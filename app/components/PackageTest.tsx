import React, {useState, FormEvent} from "react";

export const PackageTest = () => {
  const [name, setName] = useState("");
  
  let result: string;
  const handleSubmit = (evt: FormEvent) => {
      evt.preventDefault();
      result = `
      let packageFile = fs.readFileSync(path.resolve(__dirname, ${name})).toString("utf-8");

      test('package.json to contain react experimental', () => {
      \u00A0\u00A0return expect(packageFile).toMatch(/\"react\": \"\^?0.0.0-experimental/);
      })
      `;

      document.getElementById('test')!.innerText = result;

      
  }

  return (
    <div style={{paddingLeft: '80px'}}>
      <form onSubmit={handleSubmit}>
      <label>
        Please enter the file path of your package.json from the root:
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
