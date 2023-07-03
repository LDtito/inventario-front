'use client'
import Searchbar from '@/components/Serchbar';
import Serchbar from '@/components/Serchbar';
import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'
import { useState } from 'react';

const ListadoProducto = () => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
    <>
    <div className='grow '>
    <div className='flex justify-center'>
        <img className='w-11/12 h-48 mt-2 shadow-md rounded-lg' src="/banner.avif" alt="" />
      </div>
        <Toolbar pathForm='/inventario/producto/0' pathList='/inventario/producto/' currentEntity={""} entityName='producto'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de productos</span></p>
        <div className='overflow-x-auto'>
        <Searchbar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Buscar..."
            />
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Nombre", "Descripción", "Precio", "Cantidad"]}/>
            <TBody columnas={["nombre", "descripcion", "precioUnitario", "cantidad"]} endpoint='producto' searchQuery={searchQuery}/>
        </table>
        </div>
    </div>
    </>
    )
}

export default ListadoProducto;   