import React, { useEffect, useState } from 'react';
import './Services.css';
import ItemCart from '../ItemCart/ItemCart';

const Services = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container mb-5 ">
                <div className="row ">
                    <div className="col-10">
                        <div className="row gy-4 cart-style">

                            <div className="cart-style rounded">
                                {
                                    carts.map(cart => <ItemCart
                                        key={cart.id}
                                        carts={cart}
                                    ></ItemCart>)
                                }
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;