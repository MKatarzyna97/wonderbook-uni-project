import React, { Component } from 'react';
import Call from "../photos/call.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import FloatingActionButton from './homeButton'; 


class Contact extends Component {
  state = {  }

  //STYLOWANIE //
FBstyle = {
color: "#3E3BA3",
fontSize: '70'
}
Instastyle = {
  color: "#A35591",
  fontSize: '70'
  }
Twitastyle = {
    color: "#397DA3",
    fontSize: '70'
    }
EmailStyle = {
  color: "#A31B13",
  fontSize: '70'
}
//KONIEC STYLOWANIA //

  render() { 
    return ( <div className="contact">
     <img src={Call} alt=""/>
     <FloatingActionButton />
      <div className="contact-welcome">
        <h1>Jesteśmy tam, gdzie Ty</h1>
        <p>Znajdź nas w sieci, poznajmy się lepiej.</p>
        <div className='contact-icons'>
          <ul> 
      
        <li> <a href="/" target="_blank" rel="noopener noreferrer">  <FacebookIcon style={this.FBstyle}/> </a>   </li>
  <li>   <a href="/" target="_blank" rel="noopener noreferrer">  <InstagramIcon style={this.Instastyle} /> </a> </li>
   <li> <a href="/" target="_blank" rel="noopener noreferrer">  <TwitterIcon style={this.Twitastyle} /> </a> </li> 
   <li>  <a href="/" target="_blank" rel="noopener noreferrer">  <EmailIcon style={this.EmailStyle} /> </a> </li>
     </ul>
     </div>
      </div>
      
    </div> );
  }
}
 
export default Contact;