import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {

    const [details, setDetails] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setDetails((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const fromSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${details.fullName}.phone is ${details.phone} and email is ${details.email}.Here is data whar i say ${details.message}`);

    }


    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <Form onSubmit={fromSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text"
                                    name="fullName"
                                    value={details.fullName}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text"
                                    name="phone"
                                    value={details.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter you mobile number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    name="email"
                                    value={details.email}
                                    onChange={InputEvent}
                                    placeholder="Type your email" />
                            </Form.Group>
                            <Form.Group className="mb-3"
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    name="message"
                                    value={details.message}
                                    onChange={InputEvent}
                                    as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;