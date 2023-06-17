import React from 'react';
import { useQuery } from "@tanstack/react-query";

const useAllUser = () => {
   const {data:users=[], isLoading, refetch } = useQuery({
    queryKey:['users'],
    queryFn: async()=>{
        const res = await fetch('https://language-leap-server.vercel.app/users')
        return res.json()
    }
   });
   return [users, isLoading, refetch];
};

export default useAllUser;