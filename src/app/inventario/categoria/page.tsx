'use client'
import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'
import React, { useState } from 'react'
import Searchbar from '@/components/Serchbar'
import { Accordion } from 'flowbite-react'
import List from '@/components/List'
import Listcategory from '@/components/Listcategory'

const ListadoCategoria = () => {
   const [searchQuery, setSearchQuery] = useState('')
    return (
    <div className='w-[1280px]'>
      <div className='flex justify-center'>
        <img className='w-11/12 h-48 mt-2 shadow-md rounded-lg' src="/banner.avif" alt="" />
      </div>
        <div className='grow w-full'>
        <Toolbar pathForm='inventario/categoria/0' pathList='inventario/categoria/' currentEntity={""} entityName='categoria'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de categorias</span></p>
        <div className='overflow-x-auto'>
           <Searchbar
               value={searchQuery}
               onChange={setSearchQuery}
               onClear={() => setSearchQuery('')}
               placeholder='Buscar...'
             />
            <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>

            <TBody columnas={["nombre","descripcion"]} endpoint='categoria' searchQuery={searchQuery}/>
            </table>
        
        </div>
    </div>
    <div className='broder border-blue-700 flex justify-center mt-5'>
    <Accordion className='w-[1000px]'>
    <Accordion.Panel>
      <Accordion.Title className='h-12'>
        Martillos
      </Accordion.Title>
      <Accordion.Content>
            <div className='grow mt-9'>
                <div className='overflow-x-auto'>
                   
                <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
                <Listcategory columnas={["nombre","descripcion"]} endpoint='categoria' searchQuery={searchQuery}/>
                </table>
                </div>
            </div> 
      </Accordion.Content>
    </Accordion.Panel>
      </Accordion>
    </div>
    <div className='broder border-blue-700 flex justify-center mt-5 p-3'>
    <Accordion className='w-[1000px]'>
    <Accordion.Panel>
      <Accordion.Title className='h-12'>
        Taladros
      </Accordion.Title>
      <Accordion.Content>
            <div className='grow mt-9'>
                <div className='overflow-x-auto'>
                   
                <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
                    <Listcategory columnas={["nombre","descripcion"]} endpoint='categoria' searchQuery={searchQuery}/>
                </table>
                </div>
            </div> 
      </Accordion.Content>
    </Accordion.Panel>
      </Accordion>
    </div>
    </div>
    )
}

export default ListadoCategoria;