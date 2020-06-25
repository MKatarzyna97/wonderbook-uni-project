
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';


 /* function FloatingActionButton(props) {
    
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        color: '#4a4e69',
        backgroundColor: '#4a4e69'
    };

    
    return (
        <Link to="/"> 
        <Fab aria-label="add" style={style} onClick={props.scrollToTop} >
       <HomeIcon className="homeIcon"  />
        </Fab>
        </Link>
     
    );
  } */

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
        backgroundColor: '#4a4e69'
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
        <Fab aria-label="add" style={this.style} onClick={this.scrollToTop} >
       <HomeIcon className="homeIcon"  />
        </Fab>
        </Link> );
    }
}
 


  export default FloatingActionButton;