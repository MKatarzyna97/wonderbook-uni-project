import React, { Component, Redirect } from 'react';
import SearchBook from "./searchForm";
import request from 'superagent';
import Books from "./books";
import Navbar from "./navbar";


class Home extends Component {
    state = { 
        books: [],
        searchArea: '',
        fireRedirect: false,
     }


// WYSZUKIWARKA - FUNKCJE I FETCHOWANIE


    handleSearch = (e) => {
        this.setState({
            searchArea: e.target.value,
            
        })
    }

searchBooks = (e) => {
    e.preventDefault();
    this.props.history.push(`/books=${this.state.searchArea}`);
request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: this.state.searchArea })
    .then((data) => {
       this.setState({
           books: [...data.body.items],
           fireRedirect: true,
       })
    })
}

//WYSZUKIWARKA - KONIEC

    render()
   
    { 

        let noTitle = ''
        let search = (<div className="sec-title"> <h2>Poszukujesz {this.state.searchArea}</h2> <hr/></div>)

        return ( 
            <div className="home">
            <h1>O czym chcesz dziś przeczytać?</h1>
          
            <SearchBook searchBooks={this.searchBooks} handleSearch={this.handleSearch} />
            {this.state.fireRedirect ? search : noTitle}
            
            <div className='searchResults'>
            <Books books={this.state.books} />

            </div>
        
            </div>

         );
        
    }
    
}
 
export default Home;