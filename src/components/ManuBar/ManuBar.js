import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ManuBar.css';
const ManuBar = () => {
    return (
        <div className="conatiner-fluid">
            <div className="row nav-style">
                <div className="col-10 mx-auto">
                    <Navbar expand="lg">
                        <Container fluid>
                            <Navbar.Brand className="navbar-brand" bg="info" to="/Home">IT Acadamy</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="ms-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >

                                    <Stack direction="horizontal" gap={4}>
                                        <NavLink activeClassName="manu_active" to="/Home">Home</NavLink>
                                        <NavLink activeClassName="manu_active" to="/Services">Service</NavLink>
                                        <NavLink activeClassName="manu_active" to="/About">About</NavLink>
                                        <NavLink activeClassName="manu_active" to="/Contact">Contact</NavLink>

                                    </Stack>

                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>

    );
};

export default ManuBar;