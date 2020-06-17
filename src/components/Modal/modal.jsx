import React from 'react';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
      <div className="details-title-author">   <h2 className="detailsAuthor"> {props.title} </h2>
         <h4>{props.author}</h4> </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="detail-content">
         <img src={props.image} alt=""/>
           <div className="detail-description">
          <p>
          {props.description}
          </p>
    <p style={{fontWeight:'300'}, {fontSize:'14px'}, {color: '#9a8c98'}}>{props.category}</p>
   <a href={props.previewLink} target="_blank" rel="noopener noreferrer"> <button className="read-now-button">Zacznij czytać</button></a>
    </div>
    
    </div>
        </Modal.Body>
        <Modal.Footer>
         <button className="close-button" onClick={props.onHide}> Zamknij </button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;