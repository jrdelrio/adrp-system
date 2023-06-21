import React from "react";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

import "../styles/clients.css";

export const ClientItem = (props) => {

    return (
        <ListGroup.Item as="li" key={props.client.id}>
            {props.client.name}
            <div className="options">
                <Button><i onClick={() => props.handleShowModal(props.client)} className="bi bi-person-square options-item"></i></Button>
                <Button><i className="bi bi-pencil-square options-item"></i></Button>
                <Button><i className="bi bi-trash options-item delete"></i></Button>
            </div>
        </ListGroup.Item>
    )
};