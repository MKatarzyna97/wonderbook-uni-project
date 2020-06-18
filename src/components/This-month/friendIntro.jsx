import React, { Component } from 'react';
import FriendPic from "../../photos/friends.jpg";

class FriendIntro extends Component {
    state = {  }
    render() { 
        return (<div>
            <div className='this-month-intro'>
    <img src={FriendPic} alt=""/>
    <div className='this-month-intro-descr'>
    <h2>Temat miesiąca: przyjaźń </h2>
    <p>Każdego miesiąca wybieramy temat przewodni. Tym razem porozmawiamy o przyjaźni Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej!
    </p></div>
</div>
<div className='quote'>
    
    <div className='quote-content'>
<p> <i>Co bez przyjaciół za żywot? Więzienie, <br/> W którym niesmaczne żadne dobre mienie.</i> </p>
     <h4>Jan Kochanowski</h4> </div>
     
     <img src={FriendPic} alt=""/>
</div>
</div>
          );
    }
}
 
export default FriendIntro;