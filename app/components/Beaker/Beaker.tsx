import React from "react";

// import react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import routes for react router
import { CreateRootTest } from "./CreateRootTest";
import { PackageTest } from "./PackageTest";
import { FallbackTest } from "./FallbackTest";
import { SuspenseTest } from "./SuspenseTest";

// Import stylesheet for flexbox grid
import "./styles.css";

// Import Material UI Card Component
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  // Rendering our Components Below
  return (
    // Begin 2x2
    <Router>
      <div className="grid2x2">
        {/* Begin Card 1 */}
        <div className="box box1">
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                createRoot
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Enables Concurrent Mode
              </Typography>
              <Typography variant="body2" component="p">
                {`Replaces ReactDOM.render(<App />, rootNode) and enables Concurrent Mode.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={"/CreateRootTest"}>
                {" "}
                Code Snippet{" "}
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* End Card 1 */}
        {/* Begin Card 2 */}
        <div className="box box2">
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                packageTest
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Verifies React Experimental
              </Typography>
              <Typography variant="body2" component="p">
                {`Concurrent Mode is only available in the experimental builds of React.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={"/PackageTest"}>
                {" "}
                Code Snippet{" "}
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* End Card 2 */}
        {/* Begin Card 3 */}
        <div className="box box3">
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                fallbackTest
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Ensures fallback component is present and defined.
              </Typography>
              <Typography variant="body2" component="p">
                {`Concurrent Mode is only available in the experimental builds of React.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={"/FallBackTest"}>
                {" "}
                Code Snippet{" "}
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* End Card 3 */}
        {/* Begin Card 4 */}
        <div className="box box4">
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                suspenseTest
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Mock test to determine fallback rendersin the DOM tree.
              </Typography>
              <Typography variant="body2" component="p">
                {`This will take one argument, a child component that the user expects to suspend. As of now, the suspended component must act as a standalone component.`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={"/SuspenseTest"}>
                {" "}
                Code Snippet{" "}
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* End Card 4 */}

        {/* Switch Begin */}
        <Switch>
          <Route exact path="/CreateRootTest">
            <CreateRootTest />
          </Route>
          <Route exact path="/FallbackTest">
            <FallbackTest />
          </Route>
          <Route exact path="/PackageTest">
            <PackageTest />
          </Route>
          <Route exact path="/SuspenseTest">
            <SuspenseTest />
          </Route>
        </Switch>
        {/* Switch End */}

        {/* End 2x2 */}
      </div>
    </Router>
  );
}
