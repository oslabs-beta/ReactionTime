import React from 'react';
import { render } from 'react-dom';
import Beaker from './components/Beaker';
import { CreateRootTest } from './components/CreateRootTest';
import { PackageTest } from './components/PackageTest';
import { FallbackTest } from './components/FallbackTest';
import { SuspenseTest } from './components/SuspenseTest';
import { Drawer, List, ListItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Timer from '@material-ui/icons/Timer';
import SearchIcon from '@material-ui/icons/Search';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import Home from './components/HomePage/homePage';


document.addEventListener('DOMContentLoaded', () => 
  render(
    <div>
      <Router>
        <Drawer variant="permanent">
          <List>
            <ListItem>
              <Link to="/">
                <HomeIcon fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/tests">
                <Timer fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <SearchIcon fontSize="large"/>
            </ListItem>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tests" component={Beaker} />
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
