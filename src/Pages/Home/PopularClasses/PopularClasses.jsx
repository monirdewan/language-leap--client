import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ClassCard from '../../Shared/ClassCard/ClassCard';

const PopularClasses = () => {
    const [classInfo, setClassInfo] = useState([]);

    useEffect(()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data =>{
            const limit = data.slice(0,6)
            setClassInfo(limit)
        })
    },[])
    return (
        <section>
            <SectionTitle heading='Popular Classes' subHeading='Explore Our'></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    classInfo.map(data =><ClassCard key={data._id} data={data}></ClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;