import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../Providers/AuthProviders';

const useSingleUser = () => {
     const {user,loading} = useContext(AuthContext)
    // const [singleUser, setSingleUser] = useState([])
    // const [userLoading, setUserLoading] = useState(true)
    // if(loading){
    //     return
    // }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/users/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setSingleUser(data)
    //         setUserLoading(false)
    //     })
    // },[])

   const {data:singleUser, isLoading, refetch} = useQuery({
    queryKey:['singleUser', user?.email],
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/users/${user?.email}`)
        return res.json()
    }
   })

    

   return [singleUser, isLoading]
};

export default useSingleUser;