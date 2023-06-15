import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../Providers/AuthProviders';

const useSingleUser = () => {
     const {user,loading} = useContext(AuthContext)

   const {data:singleUser=[], isLoading, refetch} = useQuery({
   
    queryKey:['singleUser', user?.email],
    enabled:!loading,
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/userroll?email=${user?.email}`)
        return res.json()
    }
   })

    

   return [singleUser, isLoading]
};

export default useSingleUser;