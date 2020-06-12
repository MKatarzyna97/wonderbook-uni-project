import React from 'react';
import TryResults from "./tryResult"

function Try (props) {
    
    return( 
        props.books.map((book, i) => {
        return( <div className="resultsPage">
        <TryResults 
        key={i}    
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        category={book.volumeInfo.categories}
        /> </div>)
    })

    )
}

export default Try;