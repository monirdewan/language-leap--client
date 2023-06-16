import React from 'react';
import useAllClasses from '../../../hook/useAllClasses';
import useAxios from '../../../hook/useAxios';

const ManageClasses = () => {
  const [allClasses, isLoading, refetch] = useAllClasses();
  const [axiosSecure] = useAxios();

  const updateStatus = (id, status)=>{
    const statusInfo = {status}
    axiosSecure.put(`/updtstatus/${id}`, statusInfo)
    .then(data =>{
      console.log(data.data)
      refetch()
    })
  }

  return (
    <div className='w-full'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {
              allClasses.map((item,index) => <tr key={item._id}>
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
                <td>{item.iName}</td>
                <td><small>{item.iEmail}</small></td>
                <td>{item.aSeats}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
               
                  <td><button onClick={()=>updateStatus(item._id, "approved")} className="btn btn-ghost btn-xs">Approve</button></td>
                 <td> <button onClick={()=>updateStatus(item._id, "deny")} className="btn btn-ghost btn-xs">Deny</button></td>
                 <td> <button className="btn btn-ghost btn-xs">Feedback</button></td>
               
              </tr>)
            }



          </tbody>


        </table>
      </div>
    </div>
  );
};

export default ManageClasses;