import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import WhyChose from '../WhyChose/WhyChose';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <WhyChose></WhyChose>
        </div>
    );
};

export default Home;