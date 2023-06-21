import React from "react";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

import "../styles/sales.css";

export const SaleItem = (props) => {

    return (
    <ListGroup.Item as="li">
        <div className="row">
            <div className="col-lg-2">
                Venta {props.sale.id}
            </div>
            <div className="col-lg-2">
                {props.sale.name}
            </div>
            <div className="col-lg-2">
            {props.sale.date} - {props.sale.hour}
            </div>
            <div className="col-lg-2">
                {props.sale.despacho ? "Despacho" : "Retiro"}
            </div>
            <div className="col-lg-2">
                $ {props.sale.amount.toLocaleString({ style: 'currency', currency: 'CLP', currencyDisplay: "symbol" })}
            </div>
            <div className="options col-lg-2">
                <Button><i onClick={() => props.handleShowModal(props.sale)} className="bi bi-card-list options-item"></i></Button>
                <Button><i className="bi bi-pencil-square options-item"></i></Button>
                <Button><i className="bi bi-trash options-item delete"></i></Button>
            </div>
        </div>
    </ListGroup.Item>
    )
};