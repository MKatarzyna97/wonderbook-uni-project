import React, { Component } from 'react';
import SearchBook from "./searchForm";
import request from 'superagent';
import Books from "./books";
import SearchAgain from "./searchAgain"
import Friend from './friend';
import News from "./news";
import Header from "./header";




class Home extends Component {
    state = { 
        books: [],
        searchArea: '',
        afterSearch: false,
        
     }

     scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
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
      
        let search = (<div className="secTitle"> <h2> <span style={{color: '#4a4e69'}, {letterSpacing: '8px'}}>{this.state.searchArea}</span> </h2> <hr className="hrLine"/></div>)

        return ( 
            <div style={{ height: this.state.afterSearch ? '' : '100vh'}} className="home">



            {this.state.afterSearch ? null :  <SearchBook searchBooks={this.searchBooks} handleSearch={this.handleSearch} />}
            
            
            {this.state.afterSearch ? <Header searchBooks={this.searchBooks}/> : null }
            {this.state.afterSearch ? search : null }
            

          <div className='searchResults'>
              
            
            <Books books={this.state.books} afterSearch={this.state.afterSearch}/>
            </div>
           
            {this.state.afterSearch ? <SearchAgain scrollToTop={this.scrollToTop} searchBooks={this.searchBooks} handleSearch={this.handleSearch} /> : null }
            
            {this.state.afterSearch ? <Friend scrollToTop={this.scrollToTop} />: null }
            {this.state.afterSearch ?<News /> : null }
            
            
         

            </div>

         );
        
    }
    
}
 
export default Home;