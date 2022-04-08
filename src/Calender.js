import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
  
  
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Calender
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Select The Date</h4>
        <input type='date' onChange={props.handledate1}></input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Calender() {
  const [modalShow, setModalShow] = React.useState(false);
  let [date,setdate]=React.useState('')
  const handledate=(event)=>{
    date=event.target.value;
    setdate(date);
    localStorage.setItem("date", JSON.stringify(date));
  }

  const save=()=>{
     setModalShow(false);
    // localStorage.setItem("date", JSON.stringify(date));
  }
  
  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
<input type='text' onClick={() => setModalShow(true)} className="form-control" placeholder="select date" value={date}></input>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={save} 
          handledate1={handledate}
      />
    </>
  );
}

export default Calender