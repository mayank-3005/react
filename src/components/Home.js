import React from 'react';
import Hero from './Hero';
import StoryComponent from './StoryComponent';
import BestComponent from './BestComponent';
import Imagegrid from './imagegird';
import Testimonials from './Testimonials';
import OurNews from './OurNews';
import FormComponent from './FormComponent';

const Home = () => {
    return (
        <div>
        <Hero/>
        <StoryComponent/>
        <BestComponent/>
        <Imagegrid/>
        <Testimonials/>
        <OurNews/>
        <FormComponent/>
        </div>
       
    )
};

export default Home;
