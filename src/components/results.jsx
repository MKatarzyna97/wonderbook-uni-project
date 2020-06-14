import React from 'react';
import MyVerticallyCenteredModal from "./Modal/modal";
import Button from 'react-bootstrap/Button'


function Results (props) {

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div className="results">
         <Button variant="primary" onClick={() => setModalShow(true)}>   
          <img src={props.image} alt=""/> 
          </Button>
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
        onHide={() => setModalShow(false)}
      />
            </div>
        </div>
    )
}

export default Results;