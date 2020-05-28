import React from "react";

// Import Material UI Card Component
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom"


export default function SimpleCard() {

  
  return (
      <div style={{paddingLeft: '80px', paddingTop:'20px', paddingRight:'15px', display:'Flex', alignItems:'center', justifyContent:'center'}}>
        <div>
          <div style={{padding:'10px'}}>
            <Link to={'/CreateRootTest'} style={{textDecoration:'none'}}>
            <Card style={{height:'210px', width:'420px', backgroundColor:'#303030', color:'#ebebeb '}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Concurrent Setup Test
                </Typography>
                <Typography style={{color:'#3F51B5'}}>
                  Tests if Concurrent Mode is enabled
                </Typography>
                <Typography variant="body2" component="p">
                  {`Replaces ReactDOM.render(<App />, rootNode) and enables Concurrent Mode`}
                </Typography>
              </CardContent>
            </Card>
            </Link>
            </div>
            <div style={{padding:'10px'}}>
              <Link to={'/PackageTest'} style={{textDecoration:'none'}}>
                <Card style={{height:'210px', width:'420px', backgroundColor:'#303030', color:'#ebebeb'}}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      React Experimental Test
                    </Typography>
                    <Typography  style={{color:'#3F51B5'}}>
                      Tests for React's experimental version
                    </Typography>
                    <Typography variant="body2" component="p">
                      {`Concurrent Mode is only available in the experimental builds of React`}
                    </Typography>
                  </CardContent>
                </Card>
            </Link>
           </div>
          </div>
        <div >
          <div style={{padding:'10px'}}>
          <Link to={'/FallBackTest'} style={{textDecoration:'none'}}>
          <Card style={{height:'210px', width:'420px', backgroundColor:'#303030', color:'#ebebeb '}}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Component Fallback Test
              </Typography>
              <Typography style={{color:'#3F51B5'}}>
                Tests if fallback component is present and defined
              </Typography>
              <Typography variant="body2" component="p">
                {`Concurrent Mode is only available in the experimental builds of React`}
              </Typography>
            </CardContent>
          </Card>
          </Link>
          </div>
          <div style={{padding:'10px'}}>
          <Link to={'/SuspenseTest'} style={{textDecoration:'none'}}>
          <Card style={{height:'210px', width:'420px', backgroundColor:'#303030', color:'#ebebeb '}}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Component Suspense Test
              </Typography>
              <Typography style={{color:'#3F51B5'}}>
                Mock test to determine fallback renders in the DOM.
              </Typography>
              <Typography variant="body2" component="p">
                {'This will take one argument, a child component that the user expects to suspend. As of now, the suspended component must act as a standalone component'}
              </Typography>
            </CardContent>
          </Card>
          </Link>
          </div>
        </div>
      </div>
  );
}
