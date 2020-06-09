import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( <nav className="navbar">
          <Link to='/'>  <h1>WonderBook</h1></Link>
            <ul>
           <Link to="/search-results"> <li>O nas</li> </Link>
           <Link to='/this-month'> <li>Temat miesiąca</li> </Link>
          <Link to='Contact'> <li>Kontakt</li> </Link> 
          <Link to="/trial">Trial</Link>
            </ul>
        </nav> );
    }
}
 
export default Navbar;