
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';


 

class FloatingActionButton extends Component {
    state = {  }
    
    style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        color: '#4a4e69',
        backgroundColor: '#4a4e69',
        
    };

    scrollToTop() {
         
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
       
      }
    render()
     { 
        return (  <Link to="/"> 
        <Fab aria-label="add" className="floatBtn" style={this.style} onClick={this.scrollToTop} >
       <HomeIcon className="homeIcon"  />
        </Fab>
        </Link> );
    }
}
 


  export default FloatingActionButton;