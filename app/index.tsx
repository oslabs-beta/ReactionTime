import React from 'react';
import { render } from 'react-dom';
import Beaker from './components/Beaker'
import { Drawer, List, ListItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Timer from '@material-ui/icons/Timer';
import { MemoryRouter as Router } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import Home from './components/HomePage/homePage';


document.addEventListener('DOMContentLoaded', () => 
  render(
    <div>
      <Router>
        <Drawer variant="permanent">
            <List>
              <ListItem>
                <Link to='/'>
                  <HomeIcon fontSize="large" /> 
                </Link>
              </ListItem>
              <ListItem>
                <Link to='/tests'>
                  <Timer fontSize="large" />
                </Link>
              </ListItem>
            </List>
        </Drawer>
        <Route exact path="/" component={Home} />
        <Route exact path="/tests" component={Beaker} />
      </Router>
    </div>,
    document.getElementById('root')
  )
);
