import React from 'react';
import { Card } from 'react-bootstrap';
import './Itemcart.css'

const ItemCart = (props) => {
    const { title, price, img, description } = props.carts;
    return (
        <div>

            <div className="col-md-4 col-10 ">
                {/* card */}
                <Card style={{ width: "400px", height: '450px' }}>
                    <Card.Img variant="top" style={{ height: "261px" }} src={img} />
                    <Card.Body>
                        <div className="d-flex">
                            <Card.Title>{title}</Card.Title>
                            <p className="ms-auto">$ {price}</p>
                        </div>
                        <Card.Text>
                            {description.slice(0, 80)}
                        </Card.Text>
                        <button className="btn-get-started">Show Details</button>
                    </Card.Body>
                </Card>

            </div>
        </div>

    );
};

export default ItemCart;