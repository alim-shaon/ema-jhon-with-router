import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const { user } = useAuth();
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} placeholder="name"  {...register("name")} />

                <input defaultValue={user.email} placeholder="e-mail" {...register("email", { required: true })} />
                <input placeholder="address" {...register("address", { required: true })} />
                <input placeholder="city" {...register("city", { required: true })} />
                <input placeholder="phone" {...register("phone", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;