import React from 'react';
import Results from "./results"

function Books (props) {
    
    
    return( props.books.map((book, i) => {
        return( <div className="resultsPage">
        <Results 
        key={i}    
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        category={book.volumeInfo.categories}
        /> </div>)
    })

    )
}

export default Books;