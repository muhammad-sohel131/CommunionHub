import './Header.css'
import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [isStikcy, setSticky] = useState(false)
    const [mobileDrop, setMobileDrop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
   

    const handleMobileMenu = () => {
        setMobileDrop(!mobileDrop)
    }

    
    return (
        <nav className={`border-b z-50 top-0 transition-all duration-500 border-gray-100 sticky ${isStikcy ? "py-2" : 'py-4'}`}>
            <div className='flex justify-between items-center cs-container relative'>
               <Link to='/'>
               <img width='250px' src="./logo.png" alt="logo" />
               </Link>
                <ul className='lg:flex hidden gap-5 items-center'>
                    <li><NavLink to='/' className="text-lg font-bold hover:text-[#1e40af]">Home</NavLink></li>
                    <li><NavLink to='/About' className="text-lg font-bold hover:text-[#1e40af]">About</NavLink></li>
                    <li><NavLink to='/events' className="text-lg font-bold hover:text-[#1e40af]">Events</NavLink></li>
                </ul>

                <div className='flex lg:hidden gap-5 items-center'>
                    <div onClick={() => handleMobileMenu()}>
                        {!mobileDrop ? <CiMenuBurger className='text-lg' /> : <IoMdClose className='text-lg' />}
                    </div>
                </div>

                {mobileDrop && <ul className='flex flex-col gap-5 items-center absolute bg-white top-14 left-0 w-full border-2 border-gray-200 rounded-md p-5 text-left'>
                    <li onClick={handleMobileMenu}><NavLink to='/' className="text-lg font-bold hover:text-[#1e40af]">Home</NavLink></li>
                    <li onClick={handleMobileMenu}><NavLink to='/about' className="text-lg font-bold hover:text-[#1e40af]">About</NavLink></li>
                    <li onClick={handleMobileMenu}><NavLink to='/events' className="text-lg font-bold hover:text-[#1e40af]">Events</NavLink></li>
                    
                </ul>}
            </div>

        </nav>
    )
}