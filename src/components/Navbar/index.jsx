import React, { useState } from 'react'
import logo from '../../images/logo.png'
import PrimaryButton from '../buttons/PrimaryButton'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='sticky w-full transition-all duration-700  py-8 bg-secondary bg-opacity-20'>
            <div className='flex justify-between items-center container mx-auto lg:w-[90%] px-4 w-full py-4'>
                <div className='flex items-center'>
                    <img src={logo} className='ml-6' alt="Logo" />
                </div>
                <nav className='flex items-center'>
                    <div className='flex justify-between items-center gap-8'>
                        <div className='hidden md:flex text-black gap-8 font-semibold'>
                            <ul className='hidden md:flex text-black gap-8 font-semibold'>
                                <li>
                                    <NavLink to={"/"} className='mx-6'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/lowongan"} className='mx-6'>Lowongan</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex mx-8">
                            <NavLink to={"/login"}>
                                <PrimaryButton>
                                    Login
                                </PrimaryButton>
                            </NavLink>
                        </div>
                        {/* mobile burger */}
                        <div className='flex items-center mr-10'>
                            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* mobile menu */}
                    <div className={`${isOpen ? 'block' : 'hidden'}`}>
                        <li>
                            <NavLink to={"/"} className='mx-6'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/lowongan"} className='mx-6'>Lowongan</NavLink>
                        </li>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Navbar
