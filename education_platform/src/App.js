import React from 'react';
import firebase from './firebase.js'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import TileForm from './TileForm';
import SectionForm from './SectionForm';
import InfoIcon from '@material-ui/icons/Info';
import Modal from '@material-ui/core/Modal';
import Footer from './Footer';
import Header from './Header';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fcfcfc',
    color: '#ffffff',
  },
  gridList: {
    width: 1100,
    height: 650,
  },
  gridListTile: {
    margin: '25px',
    backgroundColor: '#d8d8d8',
    maxWidth: '315px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  footer: {
    backgroundColor: '#424242',
    color: '#efefef',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.5',
    padding: '3px',
    marginTop: '100px',
  },
  Subheader: {
    fontSize: '20px',
    fontColor: '#424242',
  },
  addSubheader: {
    fontSize: '20px',
    fontColor: '#424242',
    textAlign: 'center',
  },
  modal:{
    textAlign:'center',
    outline: 'none',
  },
});

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     data: {},
     visualizations: [],
     tileModalOpen: false,
     sectionModalOpen: false,
   };
 }

  componentWillMount() {
    fetch('/data.json')
    .then(res => res.json())
    .then(json => this.setState({ data: json }))
  }

  componentDidMount() {
    const visualizationsRef = firebase.database().ref('visualizations')
    visualizationsRef.on('value', snapshot => {
      let visualizations = snapshot.val()
      console.log(visualizations)
    })
  }

  handleTileModalOpen = () => {
    this.setState({ tileModalOpen: true });
  };

  handleTileModalClose = () => {
    this.setState({ tileModalOpen: false });
  };

  handleSectionModalOpen = () => {
    this.setState({ sectionModalOpen: true });
  };

  handleSectionModalClose = () => {
    this.setState({ sectionModalOpen: false });
  };


  render() {
    const { classes } = this.props;
    const { data } = this.state;
    console.log(data)

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Header />
          <main>
            {/* Sub featured posts */}
            <div className={classes.root}>
              <GridList cellHeight={300} className={classes.gridList} cols={3}>
                <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                  <ListSubheader component="div" className={classes.Subheader}>Interactive Visualizations</ListSubheader>
                </GridListTile>
                {data.tiles && data.tiles.map((tile, index) => (
                  <GridListTile key={index} className={classes.gridListTile}>
                    { tile.title === "Add" ?
                      <img src={tile.img} alt={tile.title} onClick={this.handleTileModalOpen}/>
                      :
                      <img src={tile.img} alt={tile.title} />
                    }
                    <GridListTileBar
                      title={tile.action}
                      subtitle={<span>{tile.description}</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                      className={classes.tileBar}
                    />
                  </GridListTile>
                ))}
              ))}
            </GridList>
          </div>
          {/* End sub featured posts */}
        </main>

      </div>      {/* Footer */}
      <footer className={classes.footer}>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
