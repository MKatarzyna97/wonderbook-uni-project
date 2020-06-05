import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( <div className="navbar">
            <h1>WonderBook</h1>
            <ul>
                <li>O nas</li>
            <li>Temat miesiąca</li>
            <li>Kontakt</li>
            </ul>
        </div> );
    }
}
 
export default Navbar;