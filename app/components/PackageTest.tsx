import React, {useState, FormEvent} from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button, TextField, createMuiTheme, ThemeProvider } from '@material-ui/core'

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

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

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
