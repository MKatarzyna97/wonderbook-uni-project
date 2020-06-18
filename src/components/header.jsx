import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( <div className="header">
            <h1>WonderBook</h1>
            <h2>Otwórz się na słowa</h2>
            <hr className="hr-header"/>
        </div> );
    }
}
 
export default Header;