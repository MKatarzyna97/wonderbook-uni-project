import React from 'react';
import Results from "./results"

const Books = (props) => {
    
    
    return( props.books.map((book, i) => {
        return( <Results 
        key={i}    
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        category={book.volumeInfo.categories}
        />)
    })

    )
}

export default Books;