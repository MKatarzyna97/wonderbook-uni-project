import React, { Component } from 'react';
import Couple from "../../photos/couple.png";

class Kochanowski extends Component {
    state = {  }
    render() { 
        return ( <div className='quote'>
    
        <div className='quote-content'>
    <p> <i> <span className="quote-mark">,,</span> Co bez przyjaciół za żywot? Więzienie, <br/> W którym niesmaczne żadne dobre mienie. <span className="quote-mark">,,</span> </i> </p>
         <h4>Jan Kochanowski</h4> </div>
         
         <img src={Couple} alt=""/>
    </div> );
    }
}
 
export default Kochanowski;