import React from 'react';
import Common from '../Common/Common';
import web from '../../images/6316.jpg';
const About = () => {
    return (
        <div>
            <Common
                name="Welcome to About Page"
                imgsrc={web}
                visit="/Contact"
                btnName="Contact Now"
            ></Common>
        </div>
    );
};

export default About;