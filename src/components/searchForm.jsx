import React from 'react';
import BgPhoto from '../photos/main-bg.jpg'

function SearchBook (props) {
    return ( <div className="search-page">
     <div className="search-bg">  </div>  <img src={BgPhoto} alt=""/>
   <div className="searchPanel">
      
       <h1>O czym chcesz dziś przeczytać?</h1>
        <form onSubmit={props.searchBooks} action="">
            <input onChange={props.handleSearch} type="text" name="" id=""/>
            <button type="submit">Szukaj!</button>
        </form>
        </div>
        </div>
     );
}

 
export default SearchBook;