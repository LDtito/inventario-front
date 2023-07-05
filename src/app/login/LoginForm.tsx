'use client'

import useBasicAuth from '@/hooks/useBasicAuth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FC } from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {

  const { register, handleSubmit, getValues } = useForm();
  const router = useRouter();

  const onSubmit = async () => {
        console.log("ingreso en el submit")
        const { bearerToken } = await useBasicAuth(getValues("user"), getValues("password"));
        Cookies.set("token",bearerToken);
        router.push("/home")
  }

 return (
   <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Usuario</span>
        </label>
        <input 
            type="text" 
            placeholder="Usuario" 
            className="input input-bordered" 
            {...register("user")}
        />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Contraseña</span>
        </label>
        <input 
            type="password" 
            placeholder="password" 
            className="input input-bordered"
            {...register("password")}
        />
     
        </div>
        <div className="form-control mt-6">
        <button type='submit' className="btn btn-primary">Iniciar sesion</button>
        </div>    
    </form>

   </>
 )
}