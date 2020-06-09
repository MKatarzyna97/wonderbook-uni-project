import React from 'react';

function SearchBook (props) {
    return ( 
        <form onSubmit={props.searchBooks} action="">
            <input onChange={props.handleSearch} type="text" name="" id=""/>
            <button type="submit">Szukaj!</button>
        </form>
     );
}

 
export default SearchBook;