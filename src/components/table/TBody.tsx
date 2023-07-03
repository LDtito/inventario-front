'use client'
import useFetchWithAuth from '@/hooks/useFetchWithAuth';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import deleteWithAuth from '@/hooks/deleteWithAuth';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

library.add(faPencilAlt, faTrash)

interface Props {
    columnas: string[],
    endpoint: string,
    searchQuery: string;
}

const TBody:FC <Props> = ({columnas, endpoint, searchQuery}) => {
    

    const [ entidades, setEntidades ] = useState([])
    
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

const handleDelete = (id: string) => {
    confirmAlert({
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este registro?',
      buttons: [
        {
          label: 'Sí',
          onClick: async () => {
            const response = await deleteWithAuth(endpoint, id);
            if (!response.error) {
              // Eliminación exitosa, actualizar la lista de entidades
              getInitData();
            } else {
              // Error al eliminar
              console.log(response.error);
            }
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

    
 return (
   <>
   
   <tbody>
  {entidades && filteredEntidades.map((entidad) => {

    const path = entidad['precioUnitario'] || '/usuario.png';

    return (
      <tr key={entidad['id']}>
        <td>
          <img className='w-10 rounded-full' src={path} alt="" />
        </td>
        {columnas.map((columna)=> (
          <td key={entidad['id']+entidad[columna]}>{entidad[columna]}</td>
        ))}
        <td className='w-6'>
          <Link href={{
            pathname: "/inventario/"+endpoint+"/"+entidad['id'],
          }}>
            <FontAwesomeIcon icon="pencil-alt" />
          </Link>
        </td>
        <td>
          <FontAwesomeIcon
            icon="trash"
            onClick={() => handleDelete(entidad['id'])}
            style={{ cursor: 'pointer' }}
          />
        </td>
      </tr>
    );
  })}
  <tr></tr>
</tbody>
   
   </>
 )
}

export default TBody