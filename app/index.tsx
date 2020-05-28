import React from 'react';
import { render } from 'react-dom';
import Beaker from './components/Beaker';
import { CreateRootTest } from './components/CreateRootTest';
import { PackageTest } from './components/PackageTest';
import { FallbackTest } from './components/FallbackTest';
import { SuspenseTest } from './components/SuspenseTest';
import { Drawer, List, ListItem } from '@material-ui/core';
// import HomeIcon from '@material-ui/icons/HomeOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Timer from '@material-ui/icons/Timer';
import SearchIcon from '@material-ui/icons/Search';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import Home from './components/HomePage/homePage';
import {SearchGlass} from './components/SearchGlass';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import {SetUp} from './components/SetUp';
import { withStyles } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import SpeedRoundedIcon from '@material-ui/icons/SpeedRounded';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
// import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
const StyledDrawer = withStyles({
  paper: {
    background: '#303030'
  }
})(Drawer);

const StyledHomeOutlinedIcon = withStyles({
  root: {
    fill: '#eeeeee'
  }
})(HomeOutlinedIcon);

const StyledTimerRoundedIcon = withStyles({
  root: {
    fill: '#eeeeee'
  }
})(TimerRoundedIcon);

const StyledHelpOutlineRoundedIcon = withStyles({
  root: {
    fill: '#eeeeee'
  }
})(HelpOutlineRoundedIcon);

const StyledCheckCircleOutlineRoundedIcon = withStyles({
  root: {
    fill: '#eeeeee'
  }
})(CheckCircleOutlineRoundedIcon);

// const StyledTimer = withStyles({
//   root: {
//     fill: '#111111'
//   }
// })(Timer);

// const StyledSearchIcon = withStyles({
//   root: {
//     fill: '#111111'
//   }
// })(SearchIcon);

// const StyledBuildOutlinedIcon = withStyles({
//   root: {
//     fill: '#111111'
//   }
// })(BuildOutlinedIcon);

document.addEventListener('DOMContentLoaded', () => 
  render(
    <div>
      <Router>
        <StyledDrawer variant="permanent">
          <List >
            <ListItem>
              <Link to="/">
                <StyledHomeOutlinedIcon fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/tests">
                <StyledTimerRoundedIcon fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/search">
                <StyledHelpOutlineRoundedIcon fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/build">
                <StyledCheckCircleOutlineRoundedIcon fontSize="large" />
              </Link>
            </ListItem>
          </List>
        </StyledDrawer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tests" component={Beaker} />
          <Route exact path="/search" component={SearchGlass}/>
          <Route exact path="/build" component={SetUp}/>
          <Route exact path="/CreateRootTest" component={CreateRootTest} />
          <Route exact path="/PackageTest" component={PackageTest} />
          <Route exact path="/FallbackTest" component={FallbackTest} />
          <Route exact path="/SuspenseTest" component={SuspenseTest} />
        </Switch>
      </Router>
    </div>,
    document.getElementById('root')
  
  )
);
