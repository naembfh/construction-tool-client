import React from 'react';

import Reviews from '../Reviews';
import Banner from './Banner';
import Contact from './Contact';
import Products from './Products';
import SpecialService from './SpecialService';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Summary></Summary>
           
            <SpecialService></SpecialService>
            <Contact></Contact>
        </div>
    );
};

export default Home;