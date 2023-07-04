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
                
              



            </div>
        </>
    )
}

export default NavBar;
