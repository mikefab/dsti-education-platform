import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import MenuIcon from '@material-ui/icons/Menu';
import Footer from './Footer';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginBottom: theme.spacing.unit * 3,
  },
  toolbarTitle: {
    flex: 1,
    textAlign: 'left',
    padding: '30px',
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
    height: 250,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 250,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  footer: {
    backgroundColor: '#424242',
    color: '#efefef',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.5',
    padding: '3px',
  },
  menuIcon: {
    marginLeft: '20px',
  },
});

const cards = [
  {
    title: 'Card 1',
    description:
      'This is a demo card',
  },
  {
    title: 'Card 2',
    description:
      'This is a demo card',
  },
  {
    title: 'Card 3',
    description:
      'This is a demo card',
  },
  {
    title: 'Card 4',
    description:
      'This is a demo card',
  },
  {
    title: 'Card 5',
    description:
      'This is a demo card',
  },
  {
    title: 'Card 6',
    description:
      'This is a demo card',
  },
];

const social = ['GitHub', 'Twitter', 'Facebook'];

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
          <Grid container spacing={40} className={classes.cardGrid}>
            {cards.map(card => (
              <Grid item key={card.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/charts.png"
                      title="Image title"
                    />
                  </Hidden>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {card.title}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {card.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Visit
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </div>
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
