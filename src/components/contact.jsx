import React, { Component } from 'react';

class Contact extends Component {
    state = {  }

    componentDidMount() {
        fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
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
        let {books} = this.state;
        return ( <div>

{books.map(item => (<div> {item.en} </div>))}

        </div>);
    }
}
 
export default Contact;