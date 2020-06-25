import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AboutDescription extends Component {
    state = {  }
    render() { 
        return ( <div className="about-description">
        <div className="about-section-bg"></div>
      <div className="about-description-content">
        <h2>Kilka słów o nas</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, commodi. Atque tempore neque impedit in. Quo quidem, ratione ullam aspernatur laborum velit natus, eveniet eligendi quia esse, doloremque quis? Repellendus.
             <br/> Soluta nemo sed, magnam veniam, nesciunt ea earum quis esse magni non sapiente sunt ratione accusamus aut tempora veritatis enim architecto officia, ipsam a voluptatibus nihil dicta itaque. Deleniti, saepe?</p>
        <Link to="./contact">    <button>Kontakt</button> </Link> 
      </div>
    </div> );
    }
}
 
export default AboutDescription;