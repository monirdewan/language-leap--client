import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import WhyChose from '../WhyChose/WhyChose';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <WhyChose></WhyChose>
        </div>
    );
};

export default Home;