import React, { Component } from 'react';
import SearchBook from "./searchForm";
import request from 'superagent';
import Books from "./books"

class Home extends Component {
    state = { 
        books: [],
        searchArea: ''
     }

  

    handleSearch = (e) => {
        this.setState({
            searchArea: e.target.value
        })
    }

searchBooks = (e) => {
    e.preventDefault();
request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: this.state.searchArea })
    .then((data) => {
       this.setState({
           books: [...data.body.items]
       })
    })
}

    render() { 
        return ( 
            <div className="home">
            <h1>O czym chcesz dziś przeczytać?</h1>
            <SearchBook searchBooks={this.searchBooks} handleSearch={this.handleSearch} />
            <Books books={this.state.books}/>
            </div>

         );
    }
}
 
export default Home;