import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "../styles/clients.css";

const ClientDetailModal = ({ show, onHide, client }) => {
    if (!client) {
      return null; // Don't render the modal if client is not selected
    }

    const handleCloseModal = () => {
        onHide();
    }
  
    return (
      <Modal size="lg" centered show={show} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Client Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="modal-client-name">{client.name}</h4>
          <p>Email: {client.email}</p>
          <p>Phone: {client.phone}</p>
          <p>Address: {client.address}</p>
          {client.comuna && <p>Comuna: {client.comuna}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ClientDetailModal;
  