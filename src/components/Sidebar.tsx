'use client'

import Link from 'next/link'
import { FC } from 'react'
interface Props {
}
const SideBar: FC<Props> = () => {
    return (
        <>
            <ul className="menu bg-white w-60 h-full rounded-box p-3">
                <div className="w-[240px] h-[73px] -left-0 top-[81px] absolute bg-white rounded-box">
                    <div className="w-[150px] h-[30px] left-4 top-2 absolute bg-slate-300 rounded-[94px]" />
                    <div className="w-[40px] h-[40px] left-[60px] top-3 absolute text-indigo-800 text-[20px] font-bold tracking-widest">FERRETERIA</div>
                </div>
                    <img className="w-[82px] h-[82px] top-[135px] left-[70px] absolute rounded-full" src="/uuario.jpg" />
                <div className="w-[43px] h-[60px] top-[220px] left-[80px] absolute">
                    <div className="left-0  absolute text-black text-[20px] font-normal">Admin</div>
                </div>
                <li className='h-[120px] invisible'></li>
                <li className='h-16 mt-11'>
                    <Link  className='' href={'/home'}>
                        <img src="/home.png" alt="home" width={35} height={35} />
                        Home
                    </Link>
                </li>
                <li className='h-16 '>
                    <Link href={'/inventario/producto'} className=''>
                        <img src="/mon.png" alt="money" width={35} height={35} />
                        Inventario
                    </Link>
                </li>
                <li className='h-16'>
                    <Link href={'/inventario/ferreteria'}>
                        <img src="/productos.png" alt="" width={25} height={30} />
                        Productos
                    </Link>
                </li>
                <li className='h-16'>
                    <Link href={'/inventario/cliente'}>
                        <img src="/cliente.png" alt="" width={35} height={35} />
                        Clientes
                    </Link>
                </li>
                <li className='h-16 '>
                    <Link href={'/inventario/ciudad'} className=''>
                        <img src="/ciudades.png" alt="" width={35} height={35} />
                        Ciudades
                    </Link>
                </li>
                <li className='h-16 '>
                    <Link href={'/inventario/compania'} className=''>
                        <img src="/compania.png" alt="" width={30} height={30} />
                        Companias
                    </Link>
                </li>
                <li className='h-16 '>
                    <Link href={'/inventario/proveedor'} className=''>
                        <img src="/proveedor.png" alt="" width={30} height={30} />
                        Proveedores
                    </Link>
                </li>
                <li className='h-16 '>
                    <Link href={'/inventario/reabastecimiento'} className=''>
                        <img src="/rebastecimiento.png" alt="" width={30} height={30} />
                        Reabastecimiento
                    </Link>
                </li>
                <li className='h-16 '>
                    <Link href={'/inventario/rol'} className=''>
                        <img src="/rol.jpg" alt="" width={30} height={30} />
                        Rol
                    </Link>
                </li>
                <li className='h-16 '>
                    <Link href={'/inventario/usuario'} className=''>
                        <img src="/usuariooo.png" alt="" width={30} height={30} />
                        Usuarios
                    </Link>
                </li>
                <li className='h-56'>
                    <Link href={'/inventario/categoria'}>
                        <img src="/categoria.jpg" alt="" width={30} height={30} />
                        Categoria
                    </Link>
                </li>
            </ul>
        </>
    )
}
export default SideBar;