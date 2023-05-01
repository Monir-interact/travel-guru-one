import React from 'react';
import NavBar from '../pages/shared/NavBar';
import HeroSection from '../pages/shared/HeroSection';
import Booking from '../pages/shared/Booking';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <Booking></Booking>
        </div>
    );
};

export default Main;