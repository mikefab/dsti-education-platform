import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  toolbarTitle: {
     flex: 1,
     textAlign: 'left',
     padding: '30px',
   },
   toolbarMain: {
     backgroundColor: '#fcfcfc',
   },
   menuIcon: {
     marginLeft: '20px',
   },
 })

const Header = ({ classes }) => (
  <Toolbar className={classes.toolbarMain}>
    <Typography
      component="h2"
      variant="h5"
      color="inherit"
      align="center"
      noWrap
      className={classes.toolbarTitle}
    >
      Education Platform
    </Typography>
    <MenuIcon className={classes.menuIcon}/>
  </Toolbar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
