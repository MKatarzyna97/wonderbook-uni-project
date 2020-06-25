import React, { Component } from 'react';
import SearchBook from "./searchForm";
import request from 'superagent';
import Books from "./books";
import SearchAgain from "./searchAgain"
import Friend from './friend';
import News from "./news";
import Header from "./header";
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';




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

change = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    this.setState({
       
        afterSearch: false,
        
    })
}

styleBtn = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    color: '#4a4e69',
    backgroundColor: '#4a4e69'
};


//WYSZUKIWARKA - KONIEC

    render()
   
    { 
      
        let search = (<div className="secTitle"> <h2> <span style={{color: '#4a4e69'}, {letterSpacing: '8px'}}>{this.state.searchArea}</span> </h2> <hr className="hrLine"/></div>)

        return ( 
            <div style={{ height: this.state.afterSearch ? '' : '100vh'}} className="home">



            {this.state.afterSearch ? null :  <SearchBook searchArea={this.state.searchArea} searchBooks={this.searchBooks} handleSearch={this.handleSearch} />}
            {this.state.afterSearch ? <Link to="/"> 
        <Fab aria-label="add" style={this.styleBtn} onClick={this.change} >
       <HomeIcon className="homeIcon"  />
        </Fab>
        </Link> : null }
            {this.state.afterSearch ? <Header searchBooks={this.searchBooks}/> : null }
            {this.state.afterSearch ? search : null }
            
            

          <div className='searchResults'>
          {this.state.afterSearch ? <Books books={this.state.books} afterSearch={this.state.afterSearch}/> : null }
            
            
            </div>
           
            {this.state.afterSearch ? <SearchAgain searchArea={this.state.searchArea} scrollToTop={this.scrollToTop} searchBooks={this.searchBooks} handleSearch={this.handleSearch} /> : null }
            
            {this.state.afterSearch ? <Friend scrollToTop={this.scrollToTop} />: null }
            {this.state.afterSearch ?<News /> : null }
            
            
         

            </div>

         );
        
    }
    
}
 
export default Home;