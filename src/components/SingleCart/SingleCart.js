import React from 'react';
import { Card } from 'react-bootstrap';
import './singlecart.css'
const SingleCart = (props) => {
    const { title, img, price, description } = props.course;
    return (
        <Card className="single-cart">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="fs-4">{title}</Card.Title>
                <Card.Text >
                    <p>{description.slice(0, 60)}</p>
                    <strong>Price: ${price}</strong>
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default SingleCart;