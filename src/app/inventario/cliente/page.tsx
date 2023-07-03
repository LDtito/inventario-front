'use client'

import { Toolbar } from '@/components/Toolbar'
import TBody from '@/components/table/TBody'
import Head from '@/components/table/Head'
import React, { useState } from 'react'
import Searchbar from '@/components/Serchbar'

const page = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <div className='grow'>
      <div className='flex justify-center'>
        <img className='w-11/12 h-48 mt-2 shadow-md rounded-lg' src="/banner.avif" alt="" />
      </div>
        <Toolbar pathForm='/inventario/cliente/0' pathList='/inventario/cliente/' currentEntity={""} entityName='cliente' />
        <p className='text-center text-black'>Listado <span className='text-primary'>de clientes</span></p>
        <div className='overflow-x-auto'>
        <Searchbar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Buscar..."
            />
          <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["", "ID", "Nombre Cliente", "Fecha de nacimiento", "Dirección", "Correo electronico"]} />
            <TBody columnas={["id", "nombreCliente", "fechaNacimiento", "direccion", "correoElectronico"]} endpoint='cliente' searchQuery={''} />
          </table>
        </div>
      </div>
    </>
  )
}

export default page
