import React from 'react';
import { Button, Modal, ModalFooter } from 'react-bootstrap';
import styles from './modal.module.scss';

const ModalComponent = (props) => {
  const { show, content, buttonText } = props;
  console.log(show);
  // const [showModal, setShowModal] = useState(false);

  // const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);

  return (
    <div>
      <Modal show={show}>
        <Modal.Body className={styles.modalBody}>{content}</Modal.Body>
        <ModalFooter className={styles.modalFooter}>
          <Button className={styles.modalButton} variant="danger" onClick={props.onHide}>
            {buttonText}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
