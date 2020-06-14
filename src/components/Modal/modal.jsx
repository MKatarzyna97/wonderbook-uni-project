import React from 'react';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import DetailsMap from './detailsMap';

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
          {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <h4>{props.author}</h4>
         
          <p>
          {props.description}
          </p>
    <p>{props.category}</p>
    <img src={props.image} alt=""/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;