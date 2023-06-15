import React from 'react';
import useAllUser from './../../../hook/useAllUser';

const ManageUsers = () => {
    const [users, , refetch] = useAllUser();

    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
            }
        })

    }
  

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
            }
        })
    }
    return (
        <div className='w-full p-4'>
            <div className="overflow-x-auto">
                <table className="table bg-[#f5cbcf]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                       {
                        users.map((user, index) =>  <tr key={user._id}>
                            <th> {index+1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td><p>{user.email}</p></td>
                            <td><button style={user?.instructor && {backgroundColor:"gray"}} disabled={user.instructor} onClick={()=>handleMakeInstructor(user)} className="rounded text-[14px] font-semibold transition hover:bg-[#0446a3] text-white bg-[#2878EB] btn-sm">Instructor</button></td>
                            <td><button style={user?.admin && {backgroundColor:"gray"}} disabled={user.admin} onClick={()=>handleMakeAdmin(user)} className="rounded text-[14px]  font-semibold transition hover:bg-[#0446a3] text-white bg-[#2878EB] btn-sm">Admin</button></td>
                        </tr>)
                       }
                        
                    </tbody>
                  
                   

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;