import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleCart = (props) => {
    const { title, img, price } = props.course;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ width: "100%", height: "260px" }} src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button variant="info">details</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleCart;