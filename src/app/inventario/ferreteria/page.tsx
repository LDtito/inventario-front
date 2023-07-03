'use client'

import React, { useState } from 'react'
import Searchbar from '@/components/Serchbar'
import List from '@/components/List'

const ListadoProductos = () => {
   const [searchQuery, setSearchQuery] = useState('')
    return (
    <>
    <div className='grow '>
    <div className='flex justify-center'>
        <img className='w-11/12 h-48 mt-2 shadow-md rounded-lg' src="/banner.avif" alt="" />
      </div>
        <p className='text-center text-black mt-6'>Listado <span className='text-primary'>de productos</span></p>
        <div className='overflow-x-auto'>
           <Searchbar
               value={searchQuery}
               onChange={setSearchQuery}
               onClear={() => setSearchQuery('')}
               placeholder='Buscar...'
             />
        </div>
            <List columnas={["nombre","descripcion", "precioUnitario", "cantidad"]} endpoint='producto' searchQuery={searchQuery}/>
    </div>
    </>
    )
}

export default ListadoProductos;