import React from 'react';
import { FC } from 'react'
import { UseFormRegister, } from 'react-hook-form';

interface Props {
    id: string,
    label: string,
    type?:"text"|"password"|"checkbox"|"hidden"|"number"|"date"|"datetime-local"|"email",
    step?: string,
    register: UseFormRegister<any>
    required?: boolean,
}

export const Input:FC <Props>  = ({id,label,type="text", register, step="0.01", required}) => {
 return (
   <>
   <div className='flex flex-col'>
    <label htmlFor={id}>{label}</label>
    <input 
      type={type} 
      className='input input-primary' 
      id={id} 
      step={step}
      required={required}
      {...register(id, { min: 0 })}/>
   </div>
    
   </>
 )
}