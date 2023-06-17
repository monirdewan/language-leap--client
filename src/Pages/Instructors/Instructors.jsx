import React from 'react';
import useAllUser from '../../hook/useAllUser';
import InstructorCard from '../Home/PopularInstructors/InstructorCard/InstructorCard';

const Instructors = () => {
    const [users] = useAllUser();
    const instructor= users.filter(user => user.instructor == 'instructor')
    return (
        <div className='my-24'>
            <h2 className='text-5xl font-bold text-center my-20'>Our All Instructor</h2>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24'>
            {
                instructor.map(data => <InstructorCard key={data._id} data={data}></InstructorCard>)
            }
            </div>
        </div>
    );
};

export default Instructors;