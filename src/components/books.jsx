import React from 'react';
import Results from "./results"

function Books (props) {
    
    return( props.books.slice(0,9).map((book, i) => {
        return( 
        <Results 
        key={i}    
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        category={book.volumeInfo.categories}
        description={book.volumeInfo.description}
        previewLink={book.volumeInfo.previewLink}
        afterSearch={props.afterSearch}
        /> )
    })

    )
}

export default Books;