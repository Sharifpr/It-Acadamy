import React, { useEffect, useState } from 'react';
import Common from '../Common/Common';
import web from '../../images/developer1554.jpg';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css';
const Home = () => {


    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <Common
                name="Grow your study with"
                imgsrc={web}
                visit="/Services"
                btnName="Get Started"
            ></Common>

            <div className="container">
                <div className="my-5">
                    <h1 className="text-center">Our Courses</h1>
                </div>
                <div id="style" className="cart-style1 rounded">
                    {
                        courses.map(course => course.condition === "ture" ? <SingleCart
                            course={course}
                        ></SingleCart> : <span></span>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;