
import Results from './results';
import React, { Component } from 'react';

class Trial extends Component {
        state = {  }
        handleClick = event => {
                event.currentTarget.classList.toggle('active');
              }

        render() { 
                return ( <Results handleClick={this.handleClick}/> );
        }
}
 
export default Trial;
