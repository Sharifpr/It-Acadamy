import React from 'react';
import './Common.css';
import { Link } from 'react-router-dom';
const Common = (props) => {

    return (
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-clumn">
                                    <h1>{props.name} <br /><strong className="brand-name"> IT Acadamy</strong></h1>
                                    <p className="my-3">The course enrollment track specifies the type of certificate, if any, that the course offers.For more information about each enrollment track, see enrollment</p>
                                    <div className="mt-3">
                                        <Link to={props.visit} className="btn-get-started">{props.btnName}</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img mb-5">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Common;