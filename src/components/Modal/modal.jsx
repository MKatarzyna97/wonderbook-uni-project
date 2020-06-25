import React from 'react';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
      >

        <Modal.Header className="modal-header" closeButton>
        </Modal.Header>

        <Modal.Body
        className="modal-body"
        >
           <img src={props.image} alt=""/>
        <div className='details-text'> <div className="details-title-author">   
      <h2 className="detailsAuthor"> {props.title} </h2>
         <h4>{props.author}</h4> </div>
         
        
           <div className="detail-description">
          <p>
          {props.description}
          </p>
    <p style={{fontWeight:'300'}, {fontSize:'14px'}, {color: '#9a8c98'}}>{props.category}</p>
    <div className="detail-content">
   <a href={props.previewLink} target="_blank" rel="noopener noreferrer"> <button className="read-now-button">Zacznij czytać</button></a>
    </div>
    </div> 
    </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
         <button className="close-button" onClick={props.onHide}> Zamknij </button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;