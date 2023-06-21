import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

import logoImage from "./../img/main-logo.png";
import Clock from './clock';

import "./../styles/navbar.css";
import { useState } from 'react';

export const MainNavbar = () => {

  const [time, setTime] = useState(null);

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour12: false
    };

    let time = currentDate.toLocaleString(undefined, options);
    return time; // Adjust the formatting as per your requirements
  };


  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant= "dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img
              alt=""
              src={logoImage}
              width="30"
              height="30"
              className="d-inline-block align-top main-logo"
            />Angela Pastelería</Navbar.Brand>
            <div className="datetime">< Clock /></div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="navbar-flex-container">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className="navbar-item" href="/">
                      Home
                    </Nav.Link>
                    <Nav.Link className="navbar-item" href="/clients">
                      Clientes
                    </Nav.Link>
                    <Nav.Link className="navbar-item" href="/products">
                      Productos
                    </Nav.Link>
                    <Nav.Link className="navbar-item" href="/sales">
                      Ventas
                    </Nav.Link>
                    <Dropdown.Divider />
                    <Nav.Link className="navbar-item logout" href="/login">
                      Logout
                    </Nav.Link>
                  </Nav>
                  <div className="datetime">{getCurrentDateTime()}</div>
                </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};