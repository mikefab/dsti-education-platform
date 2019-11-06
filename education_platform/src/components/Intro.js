import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import firebase from '../firebase.js'

const styles = theme => ({
  card: {
    maxWidth: 900,

    backgroundColor: '#0072C6',
    color: '#fff',
      fontSize: 20,
  },
  CardContent: {
    backgroundColor: '#0072C6'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 12px',
    transform: 'scale(0.8)',
    backgroundColor: '#0072C6'
  },
});


class Intro extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      intro: ''
    }
  }
  componentWillMount() {
    console.log('First this called');
  }

  getData(){
    const introRef = firebase.database().ref('intro')
    introRef.on('value', snapshot => {
      let intro = snapshot.val()
      this.setState({ intro: intro })
      console.log(this.state)
    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { classes } = this.props;
    return(
      <div>
        <Card className={classes.card}>
          <CardContent>
            {this.state.intro}
          </CardContent>
        </Card>
    </div>
    )
  }
}
Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Intro);
