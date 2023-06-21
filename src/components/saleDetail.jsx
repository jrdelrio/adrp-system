import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "../styles/sales.css";

const SaleDetailModal = ({ show, onHide, sale }) => {
    if (!sale) {
      return null;
    }

    const handleCloseModal = () => {
        onHide();
    }
  
    return (
      <Modal size="lg" centered show={show} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Detalle de venta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="modal-sale-name">Venta ID: {sale.id}</h4>
          <p>Email: {sale.email}</p>
          <p>Phone: {sale.phone}</p>
          <p>Address: {sale.address}</p>
          {sale.comuna && <p>Comuna: {sale.comuna}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default SaleDetailModal;