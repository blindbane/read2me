import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

import { Link } from 'react-router-dom';

const NavItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/about">
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component={Link} to="/topics">
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Topics" />
    </ListItem>
  </div>
);

export default NavItems;
