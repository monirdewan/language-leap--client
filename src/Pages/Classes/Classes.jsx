import React, { useEffect, useState } from 'react';
import ClassCard from '../Shared/ClassCard/ClassCard';

const Classes = () => {
    const [classInfo, setClassInfo] = useState([]);

    useEffect(()=>{
        fetch('https://language-leap-server.vercel.app/classes')
        .then(res => res.json())
        .then(data =>{
            const approvedClass = data.filter(aClass => aClass.status == 'approved')
            setClassInfo(approvedClass)
        })
    },[])
    return (
        <div className='my-24'>
             <h2 className='text-5xl font-bold text-center my-20'>Our All Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24'>
                {
                    classInfo.map(data =><ClassCard key={data._id} data={data}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;