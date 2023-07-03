'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react'
import Button from './Guardar';
import 'react-toastify/dist/ReactToastify.css';

interface Props { }

const NavBar: FC<Props> = () => {
    const router = useRouter();
    const [isNotificationOpen, setNotificationOpen] = useState(true);

    const Logout = () => {
        Cookies.remove("token")
        router.push("/login")
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Button label={'LogOut'} onClick={() => Logout()} />
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">Ferreteria</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                            <div className="w-10 rounded-full">
                                <button className="btn btn-ghost btn-circle" onClick={() => setNotificationOpen(!isNotificationOpen)}>
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </button>
                            </div>
                        <div tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {isNotificationOpen && (
                                <div className="notification-tab">
                                    {/* Contenido de la pestaña de notificaciones */}
                                    <p>hola</p>
                                    <p>hola</p>
                                    <p>hola</p>
                                    <p>hola</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default NavBar;
