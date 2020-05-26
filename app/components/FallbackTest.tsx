import React, {useState} from "react";

export const FallbackTest = () => {
  const [name, setName] = useState("");
  const [fallback, setFallback] = useState("");
  
  let result: string;
  const handleSubmit = (evt) => {
      evt.preventDefault();
      result = `
      if (typeof ${name} === 'undefined') {
        test('renders fallback component', () => {
            return expect(${name})
    })
    
    if (!${fallback}) {
        test('renders fallback component', () => {
            return expect(${fallback})
        })

    } else{

        let textFallback = ${fallback}.toString('utf-8')
        let renderedFallback = testingLibrary.render(${fallback})

        if (typeof ${fallback} === "string") {
            test('renders fallback string instead of component', () => {
                const { getByText } = testingLibrary.render(${name})
                return expect(getByText(textFallback)).toBeInTheDocument()
            })
        }
        else {
            test('renders fallback inside of suspense component', () => {
                const wrapper = testingLibrary.render(${name})
                return expect(wrapper.baseElement).toEqual(renderedFallback.baseElement)
            })
        }
    }
    }
      `;

      document.getElementById('123')?.append(result)
      
  }

  return (
    <div style={{paddingLeft: '80px'}}>
      <form onSubmit={handleSubmit}>
      <label>
        Please enter the name of your suspenseful component:
        <input type="text"
        value={name}
        onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Please enter the name of your fallback:
        <input type="text"
        value={fallback}
        onChange={e => setFallback(e.target.value)} />
      </label>
      <input type="submit" value="Generate" />
      </form>
      <div id="123">
      </div>
    </div>
  );
};
