import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import ClientDetailModal from "../components/clientDetail";
import { MainNavbar } from "../components/navbar";

import clientsJson from "../jsons/clients.json";
import { ClientItem } from "../components/clientItem";

import "../styles/clients.css";

export const ClientsListView = () => {

    //lista de clientes
    const clientsMasterList = clientsJson;
    // const [ clientsMasterList, setClientsMasterList ] = useState([]);

    //fetch para traer todos los clientes
    // useEffect(() => {
    //   fetch('/api/clients')
    //   .then(response => response.json())
    //   .then(data => setClientsMasterList(data))
    //   .catch(console.error("Algo salió mal"));
    //   }, []);
    

    
    //ordeno alfabeticamente
    clientsMasterList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
    
      if (nameA < nameB) {
        return -1;
      }
    
      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    });
    
    //modal trigger
    const [modalShow, setModalShow] = useState(false);    
    const [selectedClient, setSelectedClient] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleShowModal = (client) => {
      setSelectedClient(client);
      setModalShow(true);
    };

    const handleCloseModal = () => {
      setModalShow(false);
    };

    const filteredClients = clientsMasterList.filter((client) =>
  client.name.toLowerCase().includes(searchQuery.toLowerCase())
);
    console.log(clientsMasterList)

    if (clientsMasterList === []) {
      return (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )
    } else {
    return (
        <div>
          <MainNavbar />
          <div className='container mt-5 align-items-left wrapper'>
            <h1 className="title">Lista de clientes</h1>
            <div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca por nombre"
                className="search-input"
              />
              <i className="bi bi-search icono-lupa"></i>
              <Button className="options"><i className="bi bi-person-plus-fill options-item"></i></Button>
            </div>
                <ListGroup as='ul' className="ul-container">
                {filteredClients.map(client => {
                    return (
                      <ClientItem key={client.id} client={client} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal}/>                        
                    )})}
                </ListGroup>
            </div>
            <ClientDetailModal show={modalShow} onHide={handleCloseModal} client={selectedClient} />
        </div>
    )
    }
};