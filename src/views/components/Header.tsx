import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, createStyles, withStyles, WithStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import CommonCss from '../sass/CommonCss.scss';

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" className={CommonCss.appbar}>
        <Toolbar>
          <Typography variant="h6" className={CommonCss.appbarText}>
            気ままアプリ
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
