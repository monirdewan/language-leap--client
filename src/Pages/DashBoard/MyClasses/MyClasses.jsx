import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxios from '../../../hook/useAxios';

const MyClasses = () => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return
    }
    const [axiosSecure] = useAxios()
    const [myClass, setMyClass] = useState([]);
    useEffect(()=>{
        axiosSecure.get(`/myclasses?email=${user.email}`)
        .then(data =>{
           setMyClass(data.data)
        })
    },[])
    console.log(myClass)
    return (
        <div className='w-full p-8'>
            <div className="overflow-x-auto">
  <table className="table ">
  
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Status</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
       {
        myClass.map((item , index) => <tr key={item._id}>
            <th>{index+1}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.cImage} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>{item.cName}</td>
            <td><p className='text-bold'>{item.status}</p></td>
            <td>{item?.feedback?<p>{item?.feedback}</p>:" "}</td>
            
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
       }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyClasses;