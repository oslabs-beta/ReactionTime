import React, {useState, FormEvent} from "react";

export const SuspenseTest = () => {
  const [name, setName] = useState("");
  
  let result: string;

  const handleSubmit = (evt: FormEvent) => {
      evt.preventDefault();
      result = `
      test('renders suspense fallback on a child component', () => {
      \u00A0\u00A0const ComponentWrapper = (${name}) => {
      \u00A0\u00A0\u00A0\u00A0return (
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<React.Suspense fallback={'testFallback'}>
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<${name} />
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0</React.Suspense>
      \u00A0\u00A0\u00A0\u00A0);
      \u00A0\u00A0};
    
      \u00A0\u00A0const wrapper = testingLibrary.render(<ComponentWrapper />);
       
      \u00A0\u00A0expect((wrapper.queryAllByText('testFallback')[0].textContent)).toMatch(/testFallback/);
      })
      `;

      document.getElementById('test')!.innerText = result;
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
      <div id="test">
      </div>
    </div>
  );
};