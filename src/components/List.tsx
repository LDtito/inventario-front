import useFetchWithAuth from '@/hooks/useFetchWithAuth';
import React, { FC, useEffect, useState } from 'react'
import Carrito from '@/app/inventario/carrito/page';

interface Props {
    columnas: string[],
    endpoint: string,
    searchQuery: string,
}

export interface Entidad {
    id: string;
    nombre: string;
    descripcion: string;
    precioUnitario: number;
    [key: string]: any;
}

const List:FC <Props> = ({columnas, endpoint, searchQuery}) => {
    
    const [ entidades, setEntidades ] = useState([])
    const [carrito, setCarrito] = useState<Entidad[]>([]); 

    const getInitData = async() => {
          const {data } = await useFetchWithAuth(endpoint);
          setEntidades(data);
    }

    useEffect(() => {
        getInitData();
    }, [])

    

    const filteredEntidades = entidades.filter((entidad) =>
        String(entidad[columnas[0]]).toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    const addToCart = (entidad: Entidad) => {
        const index = carrito.findIndex((item) => item.id === entidad.id);
        if (index === -1) {
          setCarrito([...carrito, { ...entidad, cantidad: 1 }]);
        } else {
          const newCarrito = [...carrito];
          newCarrito[index].cantidad += 1;
          setCarrito(newCarrito);
        }
      };

    return (
        <>
            <table className="table">

                <tbody>
                    {entidades && filteredEntidades.map((entidad) => (
                        <tr key={entidad['id']}>
                            <td>
                            <div className="flex items-center space-x-8">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12 bg-blue-600">
                                        <img src="/vector.png" alt="Avatar" />
                                    </div>
                                </div>
                                {columnas.map((columna)=> (
                                    <td key={entidad['id']+entidad[columna]} className='w-36'>{entidad[columna]}</td>
                                ))} 
                            </div>
                        </td>
                        <th>
                    <button className="btn btn-primary" onClick={() => addToCart(entidad)}>Añadir al carrito</button>
                        </th>
                        </tr>
                    ))} 
                </tbody>
            </table>
            <Carrito
        columnas={columnas}
        entidades={entidades}
        carrito={carrito}
        removeFromCart={(entidad) =>
          setCarrito(carrito.filter((item) => item.id !== entidad.id))
        }
        addToCart={addToCart}
      />
        </>
    )
}

export default List;
