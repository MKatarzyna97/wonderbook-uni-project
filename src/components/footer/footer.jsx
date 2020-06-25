import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

class Footer extends Component {
    state = {  }
    //STYLOWANIE //
SocialStyle = {
    color: "white",
    fontSize: '30',
    
    
    }
   
    EmailStyle = {
      color: "white",
      fontSize: '30'
    }
    //KONIEC STYLOWANIA //
    render() { 
        return (<footer>

         <div className="footer-contact-info">  
         <div className="footer-contact">
                <p>Kontakt </p> 
            <ul> 
                <li> <EmailIcon style={this.EmailStyle}/> moj.email@adres.com</li> 
                <li> <PhoneIcon style={this.EmailStyle}/> 123 123 123  </li>
        </ul></div>

        <div className="social-media-footer">
            <p>Znajdź nas w sieci</p>
        <ul>
            <li> <FacebookIcon style={this.SocialStyle} /> Facebook</li>
            <li> <TwitterIcon style={this.SocialStyle} />Twitter</li>
            <li> <InstagramIcon style={this.SocialStyle}/>Instagram</li>
            </ul>
            </div>
            </div>
        <p className='end-line'>Strona przygotowana w ramach projektu zaliczeniowego.</p> 
        

            </footer>);
    }
}
 
export default Footer;