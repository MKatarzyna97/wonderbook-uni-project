import React from 'react';
import {Link} from 'react-router-dom';

const SearchBook = (props) => {
    return ( 
        <form onSubmit={props.searchBooks}action="">
            <input onChange={props.handleSearch} type="text" name="" id=""/>
            <button type="submit">Szukaj!</button>
        </form>
     );
}

 
export default SearchBook;