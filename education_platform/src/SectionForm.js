import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  formControl: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
    textAlign: 'left',
    marginTop: '15vh',
  },
  formField: {
    marginTop:'10px',
  },
  label: {
    marginTop: '10px',
  },
  group: {
    lineHeight: '.5',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      section: '',
      color: '',
      permissions: '',
    }
  }

  // writeData = (newData) => {
  //   let currentDataset = this.props.currentDataset
  //   if (currentDataset.section === newData.section) {
  //     let newTile = {}
  //     newTile.title = newData.title
  //     newTile.description = newData.description
  //     newTile.permissions = newData.permissions
  //     newTile.link = newData.link
  //     newTile.resourceType = newData.resourceType
  //     currentDataset.tiles.push(newTile)
  //     console.log(currentDataset)
  //   }
  // };

  handleChange = event => {
    console.log(event.target.name, event.target.value)
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
        [name]: value
    });
  }

  handleSubmit = event =>  {
    event.preventDefault();
    console.log(this.state)
    // let incompleteFields = 0
    // Object.values(this.state).map(value => (
    //   !value ? incompleteFields += 1 : null
    // ));
    // if (incompleteFields > 0 ) {
    //   alert("All fields are required. Please complete the form.")
    // }
    // incompleteFields = 0;
    // this.props.close();
    // this.writeData(this.state);
  }

   render() {
    const { classes, close } = this.props;
      return (
        <form className={classes.root} onSubmit={this.handleSubmit}>
        {console.log(this.state)}
          <FormControl className={classes.formControl}>
          <h2>Add a resource</h2>
            <TextField
              required
              className={classes.formField}
              id="title-input"
              label="Title (Name of App/Site)"
              name="title"
              margin="normal"
              value={this.state.title.value}
              onChange={this.handleChange}
            />
            <Select
              value={this.state.color}
              onChange={this.handleChange}
              displayEmpty
              name="color"
              className={classes.formField}
            >
              <option value="section" disabled>Select a background color</option>
              <option name="section" value="#B0CDA7" style={{ backgroundColor: '#B0CDA7', color: '#ffffff' }}>Green</option>
              <option name="section" value="#7F909A" style={{ backgroundColor: '#7F909A', color: '#ffffff' }}>Blue</option>
              <option name="section" value="#CB9981" style={{ backgroundColor: '#CB9981', color: '#ffffff' }}>Red</option>
            </Select>
            <TextField
              required
              className={classes.formField}
              id="section-input"
              label="Application Description"
              name="description"
              helperText="Create a one-word reference code for this section"
              margin="normal"
              value={this.state.section.value}
              onChange={this.handleChange}
            />
            <FormLabel className={classes.label}>Permissions: Can a logged-in DSTI Admin change this resource?</FormLabel>
            <RadioGroup
              aria-label="Permissions"
              name="permissions"
              className={classes.group}
              value={this.state.permissions.value}
              onChange={this.handleChange}
              required
            >
              <FormControlLabel name="permissions" value="can-edit" control={<Radio />} label="Can be edited/deleted" />
              <FormControlLabel name="permissions" value="cannot-edit" control={<Radio />} label="Cannot be edited/deleted" />
            </RadioGroup>
            <input type="submit" />
            <Button onClick={close}>CANCEL</Button>
          </FormControl>
        </form>
      );
  }
}

export default withStyles(styles)(SectionForm);
