import React from 'react';
import MyVerticallyCenteredModal from "./Modal/modal";
import Grow from '@material-ui/core/Grow';



function Results (props) {

    const [modalShow, setModalShow] = React.useState(false);

    return(
     
        <div className="results">
         
        <button className="imgButton" onClick={() => setModalShow(true)}>   
          <img src={props.image} alt=""/> </button>
     
            <div className="info">
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
    <p>{props.category}</p>
    

      <MyVerticallyCenteredModal
        title={props.title}
        description={props.description}
        author={props.author}
        category={props.category}
        image={props.image}
        show={modalShow}
        previewLink={props.previewLink}
        onHide={() => setModalShow(false)}
      />
            </div>
           
        </div>
       
    )
}

export default Results;