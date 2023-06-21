import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

import salesJson from "../jsons/sales.json";
import { SaleItem } from "../components/saleItem"
import { MainNavbar } from "../components/navbar";

import "../styles/sales.css";
import SaleDetailModal from "../components/saleDetail";

export const SalesListView = () => {

    //lista de clientes
    const salesMasterList = salesJson;
    // ordeno de más reciente a más antigua
    salesMasterList.sort((a, b) => new Date(b.date) - new Date(a.date));

    //modal trigger
    const [modalShow, setModalShow] = useState(false);    
    const [selectedSale, setSelectedSale] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleShowModal = (sale) => {
      setSelectedSale(sale);
      setModalShow(true);
    };

    const handleCloseModal = () => {
      setModalShow(false);
    };

    const filteredSales = salesMasterList.filter((sale) =>
  sale.date.toLowerCase().includes(searchQuery.toLowerCase())
);
    
    return (
        <div>
          <MainNavbar />
          <div className='container mt-5 align-items-left wrapper'>
            <h1 className="title">Ventas</h1>
            <div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca venta"
                className="search-input"
              />
              <i className="bi bi-search icono-lupa"></i>
              <Button className="add-sale" variant="primary">Agregar venta</Button>{' '}
              
              <div className="row list-header">
                <div className="col-lg-2">
                    Venta
                </div>
                <div className="col-lg-2">
                    Cliente
                </div>
                <div className="col-lg-2">
                Fecha - Hora
                </div>
                <div className="col-lg-2">
                    Entrega
                </div>
                <div className="col-lg-2">
                  Monto
                </div>
                <div className="options col-lg-2">
                </div>
              </div>
            </div>
                <ListGroup as='ul' className="ul-container options-item">
                {filteredSales.map(sale => {
                    return (
                        <SaleItem key={sale.id} sale={sale} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} />
                    )})}
                </ListGroup>
            </div>
            <SaleDetailModal show={modalShow} onHide={handleCloseModal} sale={selectedSale}  />
        </div>
    );
};