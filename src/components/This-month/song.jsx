import React, { Component } from 'react';

class Song extends Component {
    state = { 
        showLyrics: false
     }

     LyricsOn = (event) => {
        event.preventDefault();
        this.setState({
          showLyrics: true
        })
      }

      LyricsOff = (event) => {
        event.preventDefault();
        this.setState({
          showLyrics: false
        })
      }
    render() { 

        let fullLyrics = (<p>
            Ja w tobie
Ty we mnie <br/>
Zaklęci <br/>
Wzajemnie <br/>
Bez granic <br/>
I miary <br/>
Dobrani <br/>
Do pary(...) <br/> 
<br/>
W lustrze cię widzę przed sobą co dzień <br/>
Za tobą chodzi z kolei mój cień <br/>
Jedna istota i taki sam plan <br/>
Komunikuję sam sobie twój stan <br/>
Ty jesteś księgą tak samo jak ja <br/>
Będę cię czytał wieczorem co dnia <br/>
Poprzez granice przeniosę twą treść <br/>
Zawsze cię będę ze sobą już nieść <br/>
<br/>
Ja w tobie <br/>
Ty we mnie <br/>
Zaklęci <br/>
Wzajemnie <br/>
Bez granic <br/>
I miary <br/>
Dobrani <br/>
Do pary(...) <br/>
        </p>)



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
        {this.state.showLyrics ? fullLyrics : null}
        {this.state.showLyrics ? <button onClick={this.LyricsOff}>Off</button> : <button onClick={this.LyricsOn}>On</button> }
       

        </div>
        <iframe className="video" title="Dobrani do pary" width="560" height="315" src="https://www.youtube.com/embed/6eZePDp0hAM" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </div> );
    }
}
 
export default Song;