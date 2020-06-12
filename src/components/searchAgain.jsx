import React from 'react';

function SearchAgain (props) {
    return ( 
   <div className="search-again">
       <h2>Chcesz więcej? Wyszukaj ponownie:</h2>
        <form onSubmit={props.searchBooks} action="">
            <input onChange={props.handleSearch} type="text" name="" id=""/>
            <button type="submit">Szukaj!</button>
        </form>
        </div>
     );
}

 
export default SearchAgain;
