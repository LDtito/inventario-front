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
    const [producto, setproducto] = useState({
        id: 0,
        nombre:'',
        descripcion:'',
        precioUnitario:'',
        cantidad:'',
        categoria:'',
    });
    const { register, setValue,getValues,handleSubmit, formState: { errors }  } = useForm(
        {
            defaultValues: {
                ...producto
            }
        }
    );
    
    const getInitData = async () => {
        if (!entityId || entityId=="0")
            return;
        const { data, error } = await useFetchWithAuth("producto/" + entityId);
        
        if (!error) {
            
            if (data.id!=0){
                setValue("id", data['id'])
                setValue("nombre", data['nombre'])
                setValue("descripcion", data['descripcion'])
                setValue("precioUnitario", data['precioUnitario'])
                setValue("cantidad",data["cantidad"])
                setValue("categoria", data['categoria'])
                setproducto(data)
            }

        } else {
            console.log(error)
        }
    }

    const onSubmit = async (entity: any) => {
        try {
            let endpoint = "producto";
            
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
        <Toolbar pathForm='/inventario/producto/0' pathList='/inventario/producto/' currentEntity={getValues("nombre")} entityName='producto'/>
        <div className='h-96 w-4/6 mx-auto p-4 border-solid border-gray-300 border-2 rounded-xl  '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='id' label='' register={register} type='hidden'/>
                <Input id='nombre' label='Nombre' register={register} type='text' required/>
                <Input id='descripcion' label='Descripcion' register={register} type='text' required/>
                <Input id='precioUnitario' label='Precio' register={register} type='number' required/>
                <Input id='cantidad' label='Cantidad' register={register} type='number' required/>
                <Manytoone entity="categoria" control={control} register={register} />
                <Button className="btn-sm my-2" type='submit' label='Guardar' />
                {errors?.root?.server && <p>Form submit failed.</p>}
            </form>            
        </div>
        </div>
    </>
    )
}

export default Page;