import React from 'react';
import useAllUser from '../../../hook/useAllUser';
import InstructorCard from './InstructorCard/InstructorCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const PopularInstructors = () => {
    const [users] = useAllUser();
    const instructor= users.filter(user => user.instructor == 'instructor')
    const limit = instructor.slice(0,6)
   
    return (
        <div className='mb-24'>
            <SectionTitle heading="Popular Instructors" subHeading="Our Most"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-24'>
            {
                limit.map(data => <InstructorCard key={data._id} data={data}></InstructorCard>)
            }
            </div>
        </div>
    );
};

export default PopularInstructors;