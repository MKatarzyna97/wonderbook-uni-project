import React from 'react';
import ShowDetails from "./showDetails"

function DetailsMap (props) {
    
    return( props.books.slice(0,9).map((book, i) => {
        return( 
        <ShowDetails 
        key={i}    
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        category={book.volumeInfo.categories}
        description={book.volumeInfo.description}
        /> )
    })

    )
}

export default DetailsMap;