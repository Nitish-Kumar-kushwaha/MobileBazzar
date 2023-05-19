import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function ToastBox() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Added!!!</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>Items is added !!!!</Toast.Body>
      </Toast>
    </>
  );
}

export default ToastBox;
