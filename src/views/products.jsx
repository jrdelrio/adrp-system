import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import ClientDetailModal from "../components/clientDetail";
import { MainNavbar } from "../components/navbar";
import { ProductItem } from "../components/productItem";

import productsJson from "../jsons/products.json";

import "../styles/products.css";

export const ProductsListView = () => {

    //lista de clientes
    const productsList = productsJson;
    //ordeno alfabeticamente
    productsList.sort((a, b) => {
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

    const filteredProducts = productsList.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);
    
    return (
        <div>
          <MainNavbar />
            <div className='container mt-5 align-items-left wrapper'>
            <h1 className="title">Productos</h1>
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
                {filteredProducts.map(product => {
                    return (
                        <ProductItem key={product.productId} product={product} handleShowModal={handleShowModal} /> 
                    )})}
                </ListGroup>
            </div>
            <ClientDetailModal show={modalShow} onHide={handleCloseModal} client={selectedClient} />
        </div>
    );
};