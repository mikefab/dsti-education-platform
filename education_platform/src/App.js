import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import TileForm from './TileForm';

// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Footer from './Footer';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fcfcfc',
    color: '#ffffff'
  },
  gridList: {
    width: 1100,
    height: 650,
  },
  gridListTile: {
    margin: '25px',
    backgroundColor: '#38568c',
    maxWidth: '315px',
  },
  toolbarTitle: {
     flex: 1,
     textAlign: 'left',
     padding: '30px',
   },
   toolbarMain: {
     backgroundColor: '#fcfcfc',
   },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  menuIcon: {
    marginLeft: '20px',
  },
  footer: {
    backgroundColor: '#424242',
    color: '#efefef',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.5',
    padding: '3px',
  },
  Subheader: {
    fontSize: '20px',
    fontColor: '#424242',
  },
});

const tileData = [
  {
    title: 'Card 1',
    description:
      'This is a demo card',
    permissions: ['update', 'delete'],
    action: 'VISIT',
  },
  {
    title: 'Card 2',
    description:
      'This is a demo card',
    permissions: ['update', 'delete'],
    action: 'VISIT',
  },
  {
    title: 'Card 3',
    description:
      'This is a demo card',
    permissions: ['update', 'delete'],
    action: 'VISIT',
  },
  {
    title: 'Card 4',
    description:
      'This is a demo card',
    permissions: ['update', 'delete'],
    action: 'VISIT',
  },
  {
    title: 'Card 5',
    description:
      'This is a demo card',
    permissions: ['update', 'delete'],
    action: 'VISIT',
  },
  {
    title: 'Card 6',
    description:
      'This is a demo card',
    permissions: ['update', 'delete'],
    action: 'VISIT',
  },
  {
    title: 'Add',
    permissions: [],
    description:
      'Click here to add a card',
    img: '/add_icon.png',
  },
];

function App(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
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
          <Button variant="outlined" size="small">
            Log In
          </Button>
          <MenuIcon className={classes.menuIcon}/>
        </Toolbar>
        <main>
          {/* Sub featured posts */}
          <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
              <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                <ListSubheader component="div" className={classes.Subheader}>Education News and Information</ListSubheader>
              </GridListTile>
              {tileData.map(tile => (
                <GridListTile key={tile.img} className={classes.gridListTile}>
                  { tile.title === "Add" ?
                    <img src={'./add_icon.png'} alt={tile.title} />
                    :
                    <img src={'./chart_icon.png'} alt={tile.title} />
                  }
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.description}</span>}
                    actionIcon={
                      <IconButton className={classes.icon}>
                        {tile.action}
                      </IconButton>
                    }
                    className={classes.tileBar}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          {/* End sub featured posts */}
        </main>
      </div>
      <TileForm />
      {/* Footer */}
      <footer className={classes.footer}>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
