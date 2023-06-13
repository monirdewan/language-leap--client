import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <h2>This is Dashboard</h2>
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#2878EB]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <h4 className='text-2xl text-white p-4 m-4'>Admin DashBoard</h4>
    <ul className="menu p-4 w-80 h-full text-white text-[18px]">
      {/* Sidebar content here */}
      <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
      <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;