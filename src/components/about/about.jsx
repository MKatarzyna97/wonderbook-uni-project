import React, { Component } from 'react';
import Szymborska from './szymborska';
import Goals from './aboutGoals';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about">
              <div className="about-baner">  
              <div className="about-baner-color"></div>
              <h1>O nas</h1> </div>
              <Goals />
              <div className="about-description">
                  <img src="" alt=""/>
                <div className="about-description-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, commodi. Atque tempore neque impedit in. Quo quidem, ratione ullam aspernatur laborum velit natus, eveniet eligendi quia esse, doloremque quis? Repellendus.
                       <br/> Soluta nemo sed, magnam veniam, nesciunt ea earum quis esse magni non sapiente sunt ratione accusamus aut tempora veritatis enim architecto officia, ipsam a voluptatibus nihil dicta itaque. Deleniti, saepe?</p>
                       <button>Kontakt</button>
                </div>
              </div>
             <Szymborska />

            </div>
         );
    }
}
 
export default About;