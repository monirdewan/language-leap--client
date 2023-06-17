import React from 'react';
import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
   const {data:allClasses=[], isLoading, refetch } = useQuery({
    queryKey:['allClasses'],
    queryFn: async()=>{
        const res = await fetch('https://language-leap-server.vercel.app/classes')
        return res.json()
    }
   });
   return [allClasses, isLoading, refetch];
};

export default useAllClasses;