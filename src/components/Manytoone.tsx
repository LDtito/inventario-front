import React, { FC, useEffect, useState } from 'react'
import { Controller, Control, UseFormRegister } from 'react-hook-form';
import  useFetchWithAuth from '@/hooks/useFetchWithAuth';

interface Props {

    entity: string,
    control: Control<any, any>,
    register: UseFormRegister<any>
}

export const Manytoone: FC<Props> = ({entity, control, register }) => {



    const [data, setData] = useState([{id:0,nombre:'Select one'}]);
    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await useFetchWithAuth(entity.toLowerCase());
                setData(data);
            
            } catch (trace) {
                console.error(trace);
            }
        }
        fetchData();
    }, [entity]);

    return (
        <>
        <label htmlFor={entity}>{entity}</label>
            <Controller key={entity}
                render={({ field }) => ( 
                <select key={entity+"select"} {...field} className={' p-2 border-2 border-sky-300 outline-sky-300 bg-white rounded-xl w-full'}
                onChange={(e) => {
                    field.onChange(e); // Actualiza el valor seleccionado en el controlador
                    register(entity).onChange(e); // Actualiza el valor seleccionado en el registro
                  }}
                >
                    <option key={entity+0} value={0} >
                           Herramientas electricas
                    </option>
                    {data?.map((item) => (
                        <option key={entity+item.id} value={item.id}>
                            {item['nombre']}
                        </option>
                    ))}
                </select>
                )}
                name={entity}
                control={control}
              />
        </>
            

    )
}