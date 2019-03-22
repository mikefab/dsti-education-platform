import React from 'react';

const styles = (theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    backgroundColor: '#424242',
    color: '#efefef',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.5',
  }
}) 
const Footer = (props) => (
  <div className="Footer">
    <h4>Get in touch</h4>
    <p>
      State House<br></br>
      Call: +232-77-00-00-00<br></br>
      Email: <a href="mailto:info@dsti.gov.sl?subject=Education%20Platform%20Inquiry">info@dsti.gov.sl</a><br></br>
      © {(new Date()).getFullYear()} Directorate of Science, Technology, and Innovation
    </p>
  </div>
)
export default Footer;
