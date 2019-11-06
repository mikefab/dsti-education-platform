import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';

const styles = (theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    backgroundColor: '#424242',
    color: '#efefef',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.5',
  },
  icon: {
    fgColor: '#8e8e8e',
    height: '15px',
    width: '15px',
    margin: '5px',
  }
})

const SocialMediaLinks = ["https://twitter.com/dstisierraleone", "https://www.instagram.com/dsti_sl/", "https://www.facebook.com/DSTISierraLeone/"]

const Footer = ({ classes }) => (
  <div className="Footer">
    <h4>Get in touch</h4>
    <p>
      State House<br></br>
      Call: +232-77-00-00-00<br></br>
      Email: <a href="mailto:info@dsti.gov.sl?subject=Education%20Platform%20Inquiry" style={{ color:'#8e8e8e' }}>info@dsti.gov.sl</a><br></br>
      This site was developed together with <b><a href='https://www.unicef.org/topics/sierra-leone' style={{ color:'#ffffff' }}>Unicef Sierra Leone</a></b>.<br></br>
      © {(new Date()).getFullYear()} Directorate of Science, Technology, and Innovation
    </p>
    { SocialMediaLinks.map(link => (
      <SocialIcon key={link} url={link} style={{ height: '20px', width: '20px', margin: '5px', marginBottom: '10px' }}/>
    ))}
  </div>
)

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
