import React, { Component } from 'react';
import SearchBook from "./searchForm";
import request from 'superagent';
import Books from "./books";
import SearchAgain from "./searchAgain"
import FriendSlide from './friendSlide';



class Home extends Component {
    state = { 
        books: [],
        searchArea: '',
        afterSearch: false,
        
     }

    

 // WYSZUKIWARKA - FUNKCJE I FETCHOWANIE


    handleSearch = (e) => {
        this.setState({
            searchArea: e.target.value,
        })
    }

searchBooks = (e) => {
    e.preventDefault();
    
request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: this.state.searchArea })
    .then((data) => {
       this.setState({
           books: [...data.body.items],
           afterSearch: true,
       })
    })
}

//WYSZUKIWARKA - KONIEC

    render()
   
    { 

        let search = (<div className="secTitle"> <h2>Poszukujesz: <span style={{color: '#4a4e69'}}>{this.state.searchArea}</span> </h2> <hr className="hrLine"/></div>)

        return ( 
            <div style={{ height: this.state.afterSearch ? '' : '100vh'}} className="home">

            {this.state.afterSearch ? null :  <SearchBook searchBooks={this.searchBooks} handleSearch={this.handleSearch} />}
            {this.state.afterSearch ? search : null }
            

          <div className='searchResults'>

            <Books books={this.state.books} />

            </div>
            
            {this.state.afterSearch ? <SearchAgain searchBooks={this.searchBooks} handleSearch={this.handleSearch} /> : null }
            
            {this.state.afterSearch ? <FriendSlide />: null }

            </div>

         );
        
    }
    
}
 
export default Home;