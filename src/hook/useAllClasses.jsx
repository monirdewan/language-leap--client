import React from 'react';
import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
   const {data:allClasses=[], isLoading, refetch } = useQuery({
    queryKey:['allClasses'],
    queryFn: async()=>{
        const res = await fetch('http://localhost:5000/classes')
        return res.json()
    }
   });
   return [allClasses, isLoading, refetch];
};

export default useAllClasses;