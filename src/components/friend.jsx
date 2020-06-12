import React, { Component } from 'react';
import Books from "./books";
import FriendSlide from './friendSlide';
import {Link} from 'react-router-dom'

class Friend extends Component {
    state = { 
      searchArea: 'friend'
     }

     componentDidMount() {
      fetch('https://www.googleapis.com/books/v1/volumes?q=przyjaciel/subject:Fiction')
      .then(response => response.json())
      .then(json => {
        this.setState({
          books: json.items, 
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

            <FriendSlide />
            <div className='searchResults'>
        <Books books={this.state.books} />
        </div>
       <Link to='this-month'> <button className="read-more">Przeczytaj więcej</button> </Link>
        </div>);
    }
}
 
export default Friend;