import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Pricing from '../Components/Pricing/Pricing';
import AssignmentMark from '../Components/AssignmentMark/AssignmentMark';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Pricing />
            <AssignmentMark />
        </div>
    );
};

export default Home;