import React from 'react';
import Doctors from './Doctors/Doctors';
import NewsLetter from './NewsLetter/NewsLetter';
import Services from './Services/Services';
import SliderBanner from './Slider/SliderBanner';
import Welcome from './WelcomeSection/Welcome';

const Home = () => {
    return (
        <div>

            <SliderBanner></SliderBanner>
            <Welcome></Welcome>
            <Services></Services>
            <Doctors></Doctors>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;