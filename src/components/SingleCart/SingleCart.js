import React from 'react';
import { Card } from 'react-bootstrap';

const SingleCart = (props) => {
    const { title, img, price } = props.course;
    return (
        <Card>
            <Card.Img variant="top" style={{ width: "100%", height: "260px" }} src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text >
                    Price: ${price}
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default SingleCart;