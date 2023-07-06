'use client'
import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'
import React, { useState } from 'react'
import Searchbar from '@/components/Serchbar'
import { Accordion } from 'flowbite-react'


const ListadoUsuario = () => {
   const [searchQuery, setSearchQuery] = useState('')
    return (
    <div className='w-[1280px]'>
      <div className='flex justify-center'>
        <img className='w-11/12 h-48 mt-2 shadow-md rounded-lg' src="/banner.avif" alt="" />
      </div>
        <div className='grow w-full'>
        <Toolbar pathForm='/inventario/usuario/0' pathList='/inventario/usuario/' currentEntity={""} entityName='usuario'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de Usuarios</span></p>
        <div className='overflow-x-auto'>
           <Searchbar
               value={searchQuery}
               onChange={setSearchQuery}
               onClear={() => setSearchQuery('')}
               placeholder='Buscar...'
             />
            <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","nombre","correo","contraseña",]} />
            <TBody columnas={["nombre","correo","contraseña"]} endpoint='usuario' searchQuery={searchQuery}/>
            </table>
        
        </div>
    </div>
    </div>
    )
}

export default ListadoUsuario;