import React, {useState, FormEvent} from "react";
import Card from "@material-ui/core/Card";

export const CreateRootTest = () => {
  const [name, setName] = useState("");
  
  let result: string;

  const handleSubmit = (evt: FormEvent) => {
      evt.preventDefault();
      result = `
      let file = fs.readFileSync(path.resolve(__dirname, ${name})).toString("utf-8");
      
      test('index to contain createRoot', () => {
      \u00A0\u00A0return expect(file).toMatch(/createRoot/);
      })
      `;

    document.getElementById('test')!.innerText = result;
  }

  return (
    <div style={{paddingLeft: '80px', display:'Flex',alignItems:'center'}}>
      <div>
        <Card style={{width:'640px',height:'420px'}}>
        <form onSubmit={handleSubmit} style={{padding:'10px'}}>
        <label>
          Please enter the file path of your index.jsx from the root: 
          <input type="text"
          value={name}
          onChange={e => setName(e.target.value)} />
        </label>
        <input type="submit" value="Generate" />
        </form>
        <div id="test">
        </div>
        </Card>
      </div>
    </div>
  );
};
