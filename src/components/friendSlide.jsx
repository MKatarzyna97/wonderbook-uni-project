import React, { Component } from 'react';
import Friends from '../photos/friends.jpg';
import {Link} from 'react-router-dom'

class FriendSlide extends Component {
    state = {  }
    render() { 
        return ( <div className="friend-slide">
           
           <div className="friend-slide-elements"> 
           <h1>Temat miesiąca</h1>
           <h2>Przyjaźń</h2>
            <div className="kochanowski">
            <p> <i>Co bez przyjaciół za żywot? Więzienie, <br/> W którym niesmaczne żadne dobre mienie.</i> </p>
            <h4>Jan Kochanowski</h4>
            </div>

            <div className="friend-desciption">
            <p> Co miesiąc wybieramy hasło, które jest motywem przewodnim wybranych dla Ciebie książek. <br/>
            W tym miesiącu tematem przewodnim jest bliska naturze człowieka <b>przyjaźń</b>. 
<br/>
                Celebruj przyjaźń i zobacz nasze propozycje: </p> 
                
             <Link to="this-month"> <button className="read-more-friend">Dowiedz się więcej</button> </Link> </div> </div>
             <img src={Friends} alt=""/> </div> );
    }
}
 
export default FriendSlide;