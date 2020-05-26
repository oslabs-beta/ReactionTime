import React, {useState, FormEvent} from "react";

export const FallbackTest = () => {
  const [name, setName] = useState("");
  const [fallback, setFallback] = useState("");
  
  let result: string;
  const handleSubmit = (evt: FormEvent) => {
      evt.preventDefault();
      result = `
      if (typeof ${name} === 'undefined') {
      \u00A0\u00A0test('renders fallback component', () => {
      \u00A0\u00A0\u00A0\u00A0return expect(${name});
      })
    
      if (!${fallback}) {
      \u00A0\u00A0test('renders fallback component', () => {
      \u00A0\u00A0\u00A0\u00A0return expect(${fallback});
      \u00A0\u00A0})
      } else {
      \u00A0\u00A0let textFallback = ${fallback}.toString('utf-8');
      \u00A0\u00A0let renderedFallback = testingLibrary.render(${fallback});

      \u00A0\u00A0if (typeof ${fallback} === "string") {
      \u00A0\u00A0\u00A0\u00A0test('renders fallback string instead of component', () => {
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0const { getByText } = testingLibrary.render(${name});
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0return expect(getByText(textFallback)).toBeInTheDocument();
      \u00A0\u00A0\u00A0\u00A0})
      \u00A0\u00A0} else {
      \u00A0\u00A0\u00A0\u00A0test('renders fallback inside of suspense component', () => {
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0const wrapper = testingLibrary.render(${name});
      \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0return expect(wrapper.baseElement).toEqual(renderedFallback.baseElement);
      \u00A0\u00A0\u00A0\u00A0})
      \u00A0\u00A0}
      }
      `;

      document.getElementById('test')!.innerText = result;

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
      <br></br>
      <label>
        Please enter the name of your fallback:
        <input type="text"
        value={fallback}
        onChange={e => setFallback(e.target.value)} />
      </label>
      <input type="submit" value="Generate" />
      </form>
      <div id="test">
      </div>
    </div>
  );
};
