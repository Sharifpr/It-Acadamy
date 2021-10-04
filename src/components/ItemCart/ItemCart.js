import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Itemcart.css'

const ItemCart = (props) => {
    const { title, price, img, description } = props.carts;
    return (
        <div>

            <div className="col-md-4 col-10 ">
                {/* card */}
                <Card style={{ width: '400px' }}>
                    <Card.Img variant="top" className="img" src={img} />
                    <Card.Body>
                        <div className="d-flex">
                            <Card.Title>{title}</Card.Title>
                            <p className="ms-auto">$ {price}</p>
                        </div>
                        <Card.Text>
                            {description.slice(0, 100)}
                        </Card.Text>
                        <Button
                            variant="primary">Details</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>

    );
};

export default ItemCart;