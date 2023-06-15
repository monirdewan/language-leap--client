import React from 'react';
import {useForm } from 'react-hook-form';
import useSingleUser from '../../../hook/useSingleUser';
import useAxios from '../../../hook/useAxios';
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD;

const AddClass = () => {
    const [singleUser,isLoading] = useSingleUser();
    if(isLoading){
        return
    }
    const [axiosSecure] = useAxios();
    const {email, name} = singleUser[0];
    const { register, handleSubmit,reset, } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.cImage[0])
        fetch(img_hosting_url, {
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
           if(imgResponse.success){
            const imageURL = imgResponse.data.display_url;
            const {cName,cImage,iName,iEmail,aSeats,price} = data;
            const newClass = {cName, cImage:imageURL, iName, iEmail, aSeats, price:parseFloat(price), status:'pending'}
            console.log(newClass)
            axiosSecure.post('/classes', newClass)
            .then(data =>{
                console.log('after posting new menu item', data.data)
                reset()
            })
           }
        })
    };
    return (
        <div className='w-full p-8'>
           <h2 className='text-4xl mb-16'>Add Your Class</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class name" {...register("cName", { required: true })} className="input input-bordered w-full " />
                    </div>
                    
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Class Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full" placeholder="Password" {...register("cImage", { required: true })}  />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Instructor Name</span>
                        </label>
                        <input readOnly type="text" value={name} {...register("iName", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Instructor Email</span>
                        </label>
                        <input readOnly type="text" value={email} {...register("iEmail", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Available seats</span>
                        </label>
                        <input type="text" placeholder="Available seats" {...register("aSeats", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Price</span>
                        </label>
                        <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full " />
                    </div>
                    </div>
                   
                   

                
                

                <input className='btn btn-primary mt-4' value='Add Classe' type="submit" />
            </form> 
        </div>
    );
};

export default AddClass;