import React, {useState, FormEvent} from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button, TextField, createMuiTheme, ThemeProvider } from '@material-ui/core'

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
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
  <div style={{paddingLeft: '80px', display:'Flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{paddingTop:'20px', paddingRight:'20px'}}>
      <Card style={{width:'680px',height:'auto', backgroundColor:'#303030', color:'#ebebeb'}}>
      <form onSubmit={handleSubmit} style={{padding:'25px'}} >
          <ThemeProvider theme={darkTheme}>
        <Typography  variant="body2" component="p">
          Please enter the name of your suspenseful component: 
        </Typography>
            <TextField id="outlined-basic" variant='standard' label="Component Name" value={name}
            onChange={e => setName(e.target.value)} color="primary" style={{color:"#ebebeb"}}/> 
          <div style={{display:'flex', alignItems:'flex-end',justifyContent:'space-around', paddingLeft:'120px', paddingRight:'120px', paddingTop:'15px'}}>
        </div>
        <br />
        <br />
        <Typography  variant="body2" component="p">
          Please enter the name of your fallback component: 
        </Typography>
          <TextField id="outlined-basic" variant='standard' label="Fallback Name" value={fallback}
          onChange={e => setFallback(e.target.value)} color="primary" style={{color:"#ebebeb"}}/> 
        <div style={{display:'flex', alignItems:'flex-end',justifyContent:'space-around', paddingLeft:'120px', paddingRight:'120px', paddingTop:'15px'}}>
           </div>
           <br />
            <div style={{display:'flex', alignSelf:'center',justifyContent:'center'}}>
              <Button type="submit" variant="outlined" size="large" >Generate</Button>
            </div>
          
        </ThemeProvider>
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

