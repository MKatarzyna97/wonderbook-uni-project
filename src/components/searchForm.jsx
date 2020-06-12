import React from 'react';

function SearchBook (props) {
    return ( 
   <div className="searchPanel">
       <h1>O czym chcesz dziś przeczytać?</h1>
        <form onSubmit={props.searchBooks} action="">
            <input onChange={props.handleSearch} type="text" name="" id=""/>
            <button type="submit">Szukaj!</button>
        </form>
        </div>
     );
}

 
export default SearchBook;