import React from 'react';
import { Button, Modal, ModalFooter } from 'react-bootstrap';

const ModalComponent = (props) => {
  const { show, content, buttonText } = props;
  // const [showModal, setShowModal] = useState(false);

  // const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);

  return (
    <div>
      <Modal show={show}>
        <Modal.Body className={props.styles}>{content}</Modal.Body>
        <ModalFooter>
          <Button variant="danger" onClick={props.onHide}>
            {buttonText}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
