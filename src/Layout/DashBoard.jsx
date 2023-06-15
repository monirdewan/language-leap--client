import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../Providers/AuthProviders';
import useSingleUser from '../hook/useSingleUser';


const DashBoard = () => {
  //const [singleUser,isLoading] = useSingleUser()
  const { user, loading } = useContext(AuthContext)
  const [singleUser, setSingleUser] = useState([])
  const [userLoading, setUserLoading] = useState(true)


  useEffect(() => {
    if (loading) {
      return
    }
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setSingleUser(data)
        setUserLoading(false)
      })
  }, [user])
  if (userLoading) {
    return
  }
  console.log("single User", singleUser)

  return (

    <div>
      {
        singleUser.admin ?  <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          
          
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
        </div>
        <div className="drawer-side bg-[#2878EB]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <h4 className='text-2xl text-white p-4 m-4'>Admin DashBoard</h4>
          <ul className="menu p-4 w-80 h-full text-white text-[18px]">
            {/* Sidebar content here */}
            <li><Link to='/dashboard/adminhome'>Admin Home</Link></li>
            <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
            <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
  
          </ul>
  
        </div>
      </div> : singleUser.instructor ?  <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        
        
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#2878EB]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <h4 className='text-2xl text-white p-4 m-4'>Instructor DashBoard</h4>
        <ul className="menu p-4 w-80 h-full text-white text-[18px]">
          {/* Sidebar content here */}
          <li><Link to='/dashboard/instructorhome'>Instructor Home</Link></li>
          <li><Link to='/dashboard/addaclass'>Add a Class</Link></li>
          <li><Link to='/dashboard/myclasses'>My Classes</Link></li>

        </ul>

      </div>
    </div> :  <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
       
        
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#2878EB]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <h4 className='text-2xl text-white p-4 m-4'>Student DashBoard</h4>
        <ul className="menu p-4 w-80 h-full text-white text-[18px]">
          {/* Sidebar content here */}
          <li><Link to='/dashboard/manageclasses'>My Selected Classes</Link></li>
          <li><Link to='/dashboard/manageusers'>My Enrolled Classes</Link></li>

        </ul>

      </div>
    </div>
      }
    </div>

  );
};

export default DashBoard;