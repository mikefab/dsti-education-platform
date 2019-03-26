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
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  formControl: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
    marginTop: '20px',
    marginLeft: '300px',
  },
  formField: {
    marginTop:'10px',
  },
  label: {
    marginTop: '10px',
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

class TileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      description: '',
      resourceType: '',
      section: '',
    }
  }

  handleChange = event => {
    console.log(event.target.name, event.target.value)
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
          [name]: value
    });
}

   render() {
    const { classes, close } = this.props;
      return (
        <div className={classes.root}>
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
              value={this.state.section}
              onChange={this.handleChange}
              displayEmpty
              name="section"
              className={classes.formField}
              placeholder="Make a selection..."
            >
              <MenuItem value="" disabled>
                Make selection
              </MenuItem>
              <MenuItem name="section" value="news">News and Information</MenuItem>
              <MenuItem name="section" value="ministry">Ministry Resources</MenuItem>
              <MenuItem name="section" value="dsti">DSTI Apps</MenuItem>
            </Select>
            <FormHelperText>In which section should this resource appear? If you need to create a new category, close this modal and click "Add a section" on the main page.</FormHelperText>
            <TextField
              required
              className={classes.formField}
              id="link-input"
              label="Application Link"
              name="link"
              helperText="Please double check to make sure the link is correct and works."
              margin="normal"
              value={this.state.link.value}
              onChange={this.handleChange}
            />
            <TextField
              required
              className={classes.formField}
              id="description-input"
              label="Application Description"
              name="link"
              helperText="Provide a very short description of the app here."
              margin="normal"
              value={this.state.description.value}
              onChange={this.handleChange}
            />
            <FormLabel className={classes.label}>Resource Type</FormLabel>
            <RadioGroup
              aria-label="Resource Type"
              name="resourceType"
              className={classes.group}
              value={this.state.resourceType.value}
              onChange={this.handleChange}
            >
              <FormControlLabel name="resourceType" value="internal" control={<Radio />} label="Internal (DSTI) Application" />
              <FormControlLabel name="resourceType" value="external" control={<Radio />} label="External Resource" />
            </RadioGroup>
            <FormLabel className={classes.label}>Permissions: Can a logged-in DSTI Admin change this resource?</FormLabel>
            <RadioGroup
              aria-label="Permissions"
              name="permissions"
              className={classes.group}
              value={this.state.resourceType.value}
              onChange={this.handleChange}
            >
              <FormControlLabel name="permissions" value="can-edit" control={<Radio />} label="Can be edited/deleted" />
              <FormControlLabel name="permissions" value="cannot-edit" control={<Radio />} label="Cannot be edited/deleted" />
            </RadioGroup>
            <Button>SUBMIT</Button>
            <Button onClick={close}>CANCEL</Button>
          </FormControl>
        </div>
      );
  }
}

export default withStyles(styles)(TileForm);