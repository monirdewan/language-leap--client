import React from 'react';
import useAllClasses from '../../../hook/useAllClasses';
import useAxios from '../../../hook/useAxios';
import Swal from 'sweetalert2';

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

  const updateFeedback =async (id)=>{
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      const feedbackText = {text}
      console.log(feedbackText)
      axiosSecure.patch(`/addfeedback/${id}`, feedbackText)
      .then(data =>{
        console.log(data)
        if(data.status == 200){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your feedback has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
        refetch()
      })
    }
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
                <td><p style={item.status == 'pending'?{color:'orange'}:item.status == 'deny'?{color:'red'}:{color:'green'}}>{item.status}</p></td>
               
                  <td ><button style={item.status == 'approved'?{backgroundColor:'gray'}:item.status == 'deny'?{backgroundColor:'gray'}:{color:''}} disabled={item.status == 'approved' || item.status == 'deny'}   onClick={()=>updateStatus(item._id, "approved")} className="rounded text-[14px]  font-semibold transition hover:bg-[#0446a3] text-white bg-[#2878EB] btn-sm">Approve</button></td>
                 <td> <button style={item.status == 'approved'?{backgroundColor:'gray'}:item.status == 'deny'?{backgroundColor:'gray'}:{color:''}} disabled={item.status == 'approved' || item.status == 'deny'} onClick={()=>updateStatus(item._id, "deny")} className="rounded text-[14px]  font-semibold transition hover:bg-[#0446a3] text-white bg-[#2878EB] btn-sm">Deny</button></td>
                 <td> <button onClick={()=>updateFeedback(item._id)} className="rounded text-[14px]  font-semibold transition hover:bg-[#0446a3] text-white bg-[#2878EB] btn-sm">Feedback</button></td>
               
              </tr>)
            }



          </tbody>


        </table>
      </div>
    </div>
  );
};

export default ManageClasses;