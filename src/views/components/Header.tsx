import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, createStyles, withStyles, WithStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
  },
  title: {
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
}

class Header extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Title
            </Typography>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
