import React from 'react';
import useAllClasses from '../../../hook/useAllClasses';

const ManageClasses = () => {
    const [allClasses, isLoading, refetch] = useAllClasses();
    
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      {
        allClasses.map(item =><tr key={item._id}>
            <th>
              
            </th>
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
            <td>{item.iEmail}</td>
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

export default ManageClasses;