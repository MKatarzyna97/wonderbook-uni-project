import React, { Component } from 'react';
import WomanReading from "../../photos/woman-reading.jpg";
import ManReading from "../../photos/reading-man.jpg";
import CoupleReading from "../../photos/reading-couple.jpg";
import Image from 'react-bootstrap/Image'


class Goals extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="goals-section">
                <h2>Do czego dążymy?</h2>
            <div className="goals">
                  
                  <div className="goal">
                     
                      <Image src={WomanReading}  fluid />
                      <h3>Wspieramy czytelnictwo</h3>
                  </div>
                  <div className="goal">
                     
                      <Image src={ManReading}  fluid />
                      <h3>Ułatwiamy dostęp do literatury</h3>
                  </div>
                  <div className="goal">
                     
                      <Image src={CoupleReading}  fluid />
                      <h3>Tworzymy społeczność czytelniczą</h3> 
                  </div>
              </div>
              </div>
         );
    }
}
 
export default Goals;