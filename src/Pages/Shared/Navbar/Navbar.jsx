import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Providers/AuthProviders';
import useSingleUser from '../../../hook/useSingleUser';

const Navbar = () => {
  const [singleUser, isLoading] = useSingleUser()
  const { user, logOut,loading } = useContext(AuthContext)
  if(isLoading){
    return
  }
  const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Instructors</Link></li>
    <li><Link to='/'>Classes</Link></li>
    {
      user && <>
        <li>
          {
            singleUser[0]?.admin?<Link to='/dashboard/adminhome'>Dashboard</Link>:singleUser[0]?.instructor?<Link to='/dashboard/instructorhome'>Dashboard</Link>:<Link to='/dashboard/studenthome'>Dashboard</Link>
          }
        </li>
      </>
    }

  </>
  const handleLogOut =()=>{
    logOut()
    .then(()=>{

    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? <div className='flex items-center gap-4 z-10'>
            <img
              style={{ height: '40px', width: '40px' }}
              className='rounded-full border border-dark'
              src={user?.photoURL}
              data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}
              alt="" />
            <Tooltip id="my-tooltip" />

            <Link onClick={handleLogOut} className='text-decoration-none text-dark '>Log Out</Link>
          </div> : <button className="btn btn-error bg-[#FF6799] text-white font-bold"><Link to='/login'>Login</Link></button>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;