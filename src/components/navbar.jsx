import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        
        <nav className="navbar">

          <Link to='/'> <h1>WonderBook</h1></Link>

            <ul className="navbarStyle">

           <Link className="navElement" to="/search-results"> <li>O nas</li> </Link>
           <Link className="navElement" to='/this-month'> <li>Temat miesiąca</li> </Link>
          <Link className="navElement" to='/contact'> <li>Kontakt</li> </Link> 
          
            </ul>

        </nav> );
    }
}
 
export default Navbar;