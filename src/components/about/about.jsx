import React, { Component } from 'react';
import Szymborska from './szymborska';
import Goals from './aboutGoals';
import AboutDescription from "./aboutDescription";
import FloatingActionButton from '../homeButton'

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about">
              <div className="about-baner">  
              <div className="about-baner-color"></div>
              <FloatingActionButton />
              <h1>O nas</h1> </div>
              <Goals />
              <AboutDescription />
             <Szymborska />

            </div>
         );
    }
}
 
export default About;