import React from 'react';
import { render } from 'react-dom';
import Beaker from './components/Beaker'
import { Drawer, List, ListItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Timer from '@material-ui/icons/Timer';



document.addEventListener('DOMContentLoaded', () => 
  render(
    <div>
      <Drawer variant="permanent">
        <List>
          <ListItem>
            <HomeIcon fontSize="large" /> 
          </ListItem>
          <ListItem>
            <Timer fontSize="large" />
          </ListItem>
        </List>
      </Drawer>
      <Beaker />
    </div>,
    document.getElementById('root')
  )
);
