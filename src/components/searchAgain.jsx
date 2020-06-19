import React from 'react';

function SearchAgain (props) {
    return ( 
   <div className="search-again">
       
       <div className="search-again-elements">
       <h2>Chcesz więcej? <br/> Wyszukaj ponownie</h2>
        <form onSubmit={props.searchBooks} action="">
            <input onChange={props.handleSearch} type="text" name="" id=""/>
            <button type="submit">Szukaj!</button>
        </form>
        </div>
        </div>
     );
}

 
export default SearchAgain;
