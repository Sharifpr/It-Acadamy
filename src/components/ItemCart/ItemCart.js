import React from 'react';
import { Card } from 'react-bootstrap';
import './Itemcart.css'

const ItemCart = (props) => {
    const { title, price, img, description } = props.carts;
    return (
        <Card className="card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description.slice(0, 100)}</Card.Text>
                <Card.Text>Price  ${price}</Card.Text>
                <button className="btn-style">Show Details</button>
            </Card.Body>
        </Card>

    )
};

export default ItemCart;