import React, { Component } from 'react';

import request from 'superagent';

class Contact extends Component {
    state = { 
      searchArea: 'friend'
     }

     componentDidMount() {
      fetch('https://www.googleapis.com/books/v1/volumes?q=friend')
      .then(response => response.json())
      .then(json => {
        this.setState({
          books: json, 
        })
      })
     }

     constructor(props) {
        super(props);
        this.state = {
          books: []
        }
      }
    
    render() { 
        

        return ( <div>

        {this.state.books.map(item => (<div>{item.volumeInfo.title}</div>))}
        
        </div>);
    }
}
 
export default Contact;