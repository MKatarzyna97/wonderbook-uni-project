import React, { Component } from 'react';
import Group from "../../photos/group.png";


class FriendIntro extends Component {
    state = {  }
    render() { 
        return (<div>
            <div className='this-month-intro'>
    <img src={Group} alt=""/>
    <div className='this-month-intro-descr'>
    <h2>Temat miesiąca <span className="friend-word"> przyjaźń </span> </h2>
    <p>Każdego miesiąca wybieramy temat przewodni. Tym razem porozmawiamy o przyjaźni Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. 
       <br/> <br/> Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. 
    <br/>    <br/> Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej. Lorem ipsum i tak dalej! Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
     
     
    </p></div>
</div>

</div>
          );
    }
}
 
export default FriendIntro;