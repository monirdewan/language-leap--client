import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome,FaAddressBook,FaUserAlt } from 'react-icons/fa';
import { AiFillFolderAdd } from 'react-icons/ai';


import { AuthContext } from '../Providers/AuthProviders';
import useSingleUser from '../hook/useSingleUser';


const DashBoard = () => {
  const [singleUser,isLoading] = useSingleUser()
  if(isLoading){
    return
  }
 

  return (

    <div>
    
      {
        
        singleUser[0].admin ?  <div className="drawer lg:drawer-open">
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
            <li><Link to='/dashboard/adminhome'><FaHome/>Admin Home</Link></li>
            <li><Link to='/dashboard/manageclasses'><FaAddressBook/> Manage Classes</Link></li>
            <li><Link to='/dashboard/manageusers'><FaUserAlt/> Manage Users</Link></li>
            <div className="divider"></div> 
            <li><Link to='/'>Home</Link></li>
          </ul>
  
        </div>
      </div> : singleUser[0].instructor ?  <div className="drawer lg:drawer-open">
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
          <li><Link to='/dashboard/instructorhome'><FaHome/> Instructor Home</Link></li>
          <li><Link to='/dashboard/addaclass'><AiFillFolderAdd/> Add a Class</Link></li>
          <li><Link to='/dashboard/myclasses'><FaAddressBook/> My Classes</Link></li>
          <div className="divider"></div> 
            <li><Link to='/'>Home</Link></li>

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
          <div className="divider"></div> 
            <li><Link to='/'>Home</Link></li>

        </ul>

      </div>
    </div>
      }
    </div>

  );
};

export default DashBoard;