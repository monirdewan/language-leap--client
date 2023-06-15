import React from 'react';
import {Form, useForm } from 'react-hook-form';
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD;

const AddClass = () => {
    const { register, handleSubmit,reset, } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        loginUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
    };
    return (
        <div className='w-full p-8'>
           <h2 className='text-4xl mb-16'>User Login</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                    
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
                        <input type="text" placeholder="Instructor name" {...register("iName", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Instructor Email</span>
                        </label>
                        <input type="text" placeholder="Instructor Email" {...register("iEmail", { required: true })} className="input input-bordered w-full " />
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
                   
                   

                
                

                <input className='btn btn-primary mt-4' value='Add Classe' type="submit" />
            </form> 
        </div>
    );
};

export default AddClass;