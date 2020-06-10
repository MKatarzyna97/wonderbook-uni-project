import React, { Component } from 'react';
import FriendSlide from './friendSlide';
import request from 'superagent';
import Trial from './trial'

class FriendSection extends Component {
    state = { 
        friendbook: []
     }
  searchBooks = (e) => {
        e.preventDefault();
    request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: `friend` })
        .then((data) => {
           this.setState({
               friendbook: [...data.body.items],
               
           })
        })
    }

    render() { 
        return ( <div>

        </div>  );
        
        
    }
}
 
export default FriendSection;