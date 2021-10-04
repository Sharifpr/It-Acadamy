import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import './Footer.css';


const Footer = () => {
    return (

        <div className="main-footer bg-info py-4 mt-4">
            <div className="container  ">
                <div className="row ">
                    {/* coloumn-01 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>IT Acadamy</h4>
                        <ul className="list-unstyled">
                            <li>What is an IT course? IT course prepares students to be experts who perform installation, operation, development, maintenance, and administration of computer applications.</li>

                        </ul>
                    </div>
                    {/* coloumn-02 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Services</h4>
                        <ul className="list-unstyled">
                            <li>Data Science</li>
                            <li>Big Data Engineering</li>
                            <li>Data Analyst</li>
                            <li>Big Data Analysis</li>
                            <li>Web development</li>
                            <li>Software development</li>
                        </ul>
                    </div>
                    {/* coloumn-03 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>About Us</h4>
                        <ul className="list-unstyled">
                            <li>phone: + 10255 6241 2532</li>
                            <li>Email: example@gmail.com</li>
                            <li>Address: 120, state road, dhaka, bangladesh</li>

                        </ul>
                    </div>
                    {/* coloumn-04 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Join Us</h4>
                        <ul className="list-unstyled">
                            <li className="my-3">NewsLetter</li>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Type your email or CV"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                        </ul>
                    </div>
                </div>
                {/* footer bottom */}
                <div className="footer-bottom ">
                    <p className="text-center"><strong> @ All Rights Reserved By: Sharif Ahmed </strong></p>
                </div>
            </div>
        </div >




    );
};

export default Footer;