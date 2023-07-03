'use client'
import { Input } from '@/components/Input';
import { ErrorOption, FieldArray, FieldArrayPath, FieldError, FieldErrors, FieldValues, FormState, RegisterOptions, SubmitErrorHandler, SubmitHandler, UseFormRegisterReturn, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Toolbar } from '@/components/Toolbar';
import useFetchWithAuth from '@/hooks/useFetchWithAuth';
import saveWithAuth from '@/hooks/saveWithAuth';
import Button from '@/components/Guardar';
import { Manytoone } from '@/components/Manytoone';

const ClientePage = ({ params }: { params: { id: string } })  => {

    const router = useRouter();
    const entityId =params.id;
    const [cliente, setCliente] = useState({
        id: 0,
        nombreCliente: '',
        fechaNacimiento: '',
        direccion:'',
        correoElectronico:''
    });
    const { register, setValue,getValues,handleSubmit, formState: { errors }  } = useForm(
        {
            defaultValues: {
                ...cliente
            }
        }
    );
    
    const getInitData = async () => {
        if (!entityId || entityId=="0")
            return;
        const { data, error } = await useFetchWithAuth("cliente/" + entityId);
        
        if (!error) {
            
            if (data.id!=0){
                setValue("id", data['id'])
                setValue("nombreCliente", data['nombreCliente'])
                setValue("fechaNacimiento", data['fechaNacimiento'])
                setValue("direccion", data['direccion'])
                setValue("correoElectronico", data['correoElectronico'])
                setCliente(data)
            }

        } else {
            console.log(error)
        }
    }

    const onSubmit = async (entity: any) => {
        try {
            let endpoint = "cliente";
            
            const { data, error } = await saveWithAuth(endpoint, entityId, entity);
            if (error) {
                console.log(error);
            } else {
                router.back()
            }
        } catch (e) {
            console.log("Post error:");
            console.table(e);
        }
    }


    useEffect(() => {
        getInitData();
    }, [])

    return (
    <>
        <div className='grow '>
        <Toolbar pathForm='/inventario/cliente/0' pathList='/inventario/cliente/' currentEntity={getValues("nombreCliente")} entityName='cliente'/>
        <div className='h-96 w-4/6 mx-auto p-4 border-solid border-gray-300 border-2 rounded-xl  '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='id' label='' register={register} type='hidden'/>
                <Input id='nombreCliente' label='Nombre Cliente' register={register} type='text'/>
                <Input id='fechaNacimiento' label='Fecha Nacimiento' register={register} type='date'/>
                <Input id='direccion' label='Direccion' register={register} type='text'/>
                <Input id='correoElectronico' label='Correo Electronico' register={register} type='email'/>
                <Button className="btn-sm my-2" type='submit' label='Guardar' />
                {errors?.root?.server && <p>Form submit failed.</p>}
            </form>            
        </div>
        </div>

    </>
    )
}

export default ClientePage;