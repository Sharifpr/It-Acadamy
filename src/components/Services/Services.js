import React, { useEffect, useState } from 'react';
import './Servies.css';
import ItemCart from '../ItemCart/ItemCart';
import { Container } from 'react-bootstrap';

const Services = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    return (
        <Container>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="service-conatiner">
                {
                    carts.map(cart => <ItemCart
                        key={cart.id}
                        carts={cart}
                    ></ItemCart>)
                }
            </div>
        </Container>
    );
};

export default Services;