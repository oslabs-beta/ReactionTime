import React, {useState} from "react";

export const SuspenseTest = () => {
  const [name, setName] = useState("");
  
  let result: string;

  const handleSubmit = (evt) => {
      evt.preventDefault();
      result = `
      test('renders suspense fallback on a child component', () => {
        const ComponentWrapper = (${name}) => {
         return (
            <React.Suspense fallback={'testFallback'}>
              <${name} />
            </React.Suspense>
          );
        };
    
        const wrapper = testingLibrary.render(<ComponentWrapper />);
       
        expect((wrapper.queryAllByText('testFallback')[0].textContent)).toMatch(/testFallback/);
    })
      `;

      document.getElementById('123')?.append(result)
      
  }

  return (
    <div style={{paddingLeft: '80px'}}>
      <form onSubmit={handleSubmit}>
      <label>
        Please enter the name of your Suspenseful Component:
        <input type="text"
        value={name}
        onChange={e => setName(e.target.value)} />
      </label>
      <input type="submit" value="Generate" />
      </form>
      <div id="123">
      </div>
    </div>
  );
};