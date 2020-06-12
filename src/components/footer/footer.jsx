import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (<footer>

         <div className="footer-contact-info">  
         <div className="footer-contact">
                <p>Kontakt </p> 
            <ul> 
                <li> moj.email@adres.com</li> 
                <li> 123 123 123  </li>
        </ul></div>

        <div className="social-media-footer">
            <p>Znajdź nas w sieci</p>
        <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            </ul>
            </div>
            </div>
        <p className='end-line'>Strona przygotowana w ramach projektu zaliczeniowego.</p> 
        

            </footer>);
    }
}
 
export default Footer;