import React, { Component } from 'react';
import SearchBook from "./searchForm";
import request from 'superagent';
import Books from "./books";



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
        let search = (<div className="secTitle"> <h2>Poszukujesz: <span style={{color: '#4a4e69'}}>{this.state.searchArea}</span> </h2> <hr className="hrLine"/></div>)

        return ( 
            <div className="home">
                <div className="searchPanel">
            <h1>O czym chcesz dziś przeczytać?</h1>
          
            <SearchBook searchBooks={this.searchBooks} handleSearch={this.handleSearch} /> </div>
            {this.state.fireRedirect ? search : noTitle}
            
            <div className='searchResults'>
            <Books books={this.state.books} />

            </div>
        
            </div>

         );
        
    }
    
}
 
export default Home;