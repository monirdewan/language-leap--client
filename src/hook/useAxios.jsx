import React from 'react';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://language-leap-server.vercel.app', 
  });
const useAxios = () => {
    return [axiosSecure]
};

export default useAxios;
