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
    <div style={{paddingLeft: '80px', display:'Flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{paddingTop:'20px', paddingRight:'20px'}}>
        <Card style={{width:'680px',height:'420px', backgroundColor:'#303030', color:'#ebebeb' }}>
        <form onSubmit={handleSubmit} style={{padding:'25px'}}>
          
        {/* <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}> */}
        <Typography variant="h5" component="h5">
        Please enter the file path of your package.json from the root:
        </Typography>
          <br />
          <br />
          <div style={{display:'flex', alignItems:'flex-end',justifyContent:'space-around', paddingLeft:'120px', paddingRight:'120px', paddingTop:'15px'}}>
          <ThemeProvider theme={darkTheme}>
          <TextField id="outlined-basic" variant='standard' label="/FilePath/" value={name}
          onChange={e => setName(e.target.value)} color="primary" style={{color:"#ebebeb"}}/> 
        <Button type="submit" variant="outlined" size="large" >Generate</Button>
        {/* </div> */}
        </ThemeProvider>
        </div>
        </form>
        <Typography variant="body2" component="p">
      <div id="test" style={{padding:'40px'}}>
      </div>
      </Typography>
        </Card>
      </div>
    </div>
  );
};
