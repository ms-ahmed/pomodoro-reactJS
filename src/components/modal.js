import React from "react";
import Modal from "react-bootstrap/Modal";

export default function BreakModal(props) {
    return (
        <Modal
            {...props}
            show={props.show}
            size={"md"}
            aria-labelledby={"contained-modal-title-vcenter"}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id={"contained-modal-title-vcenter"}>
                    {"Modal heading"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{"Centered Modal"}</h4>
                <p>{`It is the end of your session.`}</p>
            </Modal.Body>
            <Modal.Footer>
                <button type={"button"} onClick={props.onHide}>
                    {"Close"}
                </button>
            </Modal.Footer>
        </Modal>
    );
}
