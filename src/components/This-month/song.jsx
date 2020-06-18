import React, { Component } from 'react';

class Song extends Component {
    state = {  }
    render() { 
        return ( <div className='song'>
        <div className='song-lyrics'>
            <h3>Grzegorz Turnau</h3>
            <h2>Dobrani do pary</h2>
            <p>Dobry człowieku rozumiem twój ból <br/>
        Sam też wypadam z najlepszych swych ról <br/>
        Sam się obsadzam nie tak jak bym chciał <br/>
        Ktoś mi tę rolę wymyślił i dał <br/>
        Ty jesteś księgą tak samo jak ja <br/>
        Będę cię czytał wieczorem co dnia <br/>
        Poprzez granice przeniosę twą treść <br/>
        Zawsze cię będę ze sobą już nieść</p>
        </div>
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/6eZePDp0hAM" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </div> );
    }
}
 
export default Song;