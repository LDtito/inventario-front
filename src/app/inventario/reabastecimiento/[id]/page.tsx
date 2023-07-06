'use client'
import { Input } from '@/components/Input';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Toolbar } from '@/components/Toolbar';
import useFetchWithAuth from '@/hooks/useFetchWithAuth';
import saveWithAuth from '@/hooks/saveWithAuth';
import Button from '@/components/Guardar';
import { Manytoone } from '@/components/Manytoone';

const Page = ({ params }: { params: { id: string } })  => {

    const router = useRouter();
    const entityId =params.id;
    const [reabastecimiento, setreabastecimiento] = useState({
        id: 0,
        productoReabastecimiento:'',
        cantidadReabastecimiento:'',
        fechaReabastecimiento:'',
       
    });
    const { register, setValue,getValues,handleSubmit, formState: { errors }  } = useForm(
        {
            defaultValues: {
                ...reabastecimiento
            }
        }
    );
    
    const getInitData = async () => {
        if (!entityId || entityId=="0")
            return;
        const { data, error } = await useFetchWithAuth("reabastecimiento/" + entityId);
        
        if (!error) {
            
            if (data.id!=0){
                setValue("id", data['id'])
                setValue("productoReabastecimiento", data['productoReabastecimiento'])
                setValue("cantidadReabastecimiento", data['cantidadReabastecimiento'])
                setValue("fechaReabastecimiento",data["fechaReabastecimiento"])
                setreabastecimiento(data)
            }

        } else {
            console.log(error)
        }
    }

    const onSubmit = async (entity: any) => {
        try {
            let endpoint = "reabastecimiento";
            
            const { data, error } = await saveWithAuth(endpoint, entityId, entity);
            if (error) {
                console.log(error);
                console.log('success')
            } else {
                router.back()
            }
        } catch (e) {
            console.log("Post error:");
            console.table(e);
        }
    }
    const { control } = useForm();

    useEffect(() => {
        getInitData();
    }, [])

      
    return (
    <>
        <div className='grow '>
        <Toolbar pathForm='/inventario/reabastecimiento/0' pathList='/inventario/reabastecimiento/' currentEntity={getValues("productoReabastecimiento")} entityName='reabastecimiento'/>
        <div className='h-96 w-4/6 mx-auto p-4 border-solid border-gray-300 border-2 rounded-xl  '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='id' label='' register={register} type='hidden'/>
                <Input id='productoReabastecimiento' label='productoReabastecimiento' register={register} type='number' required/>
                <Input id='cantidadReabastecimiento' label='cantidadReabastecimiento' register={register} type='number' required/>
                <Input id='fechaReabastecimiento' label='fechaReabastecimiento' register={register} type='date' required/>
                <Button className="btn-sm my-2" type='submit' label='Guardar' />
                {errors?.root?.server && <p>Form submit failed.</p>}
            </form>            
        </div>
        </div>
    </>
    )
}

export default Page;