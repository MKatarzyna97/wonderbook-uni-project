import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        
        <nav>
         
        <div className="navbar">

          <Link to='/'> <h1>WonderBook</h1></Link>

            <ul className="navbarStyle">

           <Link className="navElement" to="/about"> <li>O nas</li> </Link>
           <Link className="navElement" to='/this-month'> <li>Temat miesiąca</li> </Link>
          <Link className="navElement" to='/contact'> <li>Kontakt</li> </Link> 
          
            </ul>
            </div>
        </nav> );
    }
}
 
export default Navbar;