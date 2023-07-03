import useFetchWithAuth from '@/hooks/useFetchWithAuth';
import React, { FC, useEffect, useState } from 'react'

interface Props {
    columnas: string[],
    endpoint: string,
    searchQuery: string,
}

const Listcategory:FC<Props> = ({columnas, endpoint, searchQuery}) => {

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
        </tr>
    ))} 
</tbody>
</table>
    </>
  )
}

export default Listcategory
