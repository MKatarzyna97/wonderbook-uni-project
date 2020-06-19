import React, { Component } from 'react';
import FriendIntro from './friendIntro'
import Books from "../books";
import Song from "./song";
import Kochanowski from './kochanowski';




class ThisMonth extends Component {
    state = {  }
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
        return ( <div className="this-month">
<FriendIntro />
<Kochanowski />
<div className='friend-books'>
<h2>Przyjaźń w literaturze</h2>
<div className="searchResults">
<Books books={this.state.books} />
</div>
</div>

<Song />
        </div> );
    }
}
 
export default ThisMonth;