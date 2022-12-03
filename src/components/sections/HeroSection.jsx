import React, { useState } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import heroImage from '../../images/heroImage.png'
import SecondaryButton from '../buttons/SecondaryButton'
import { NavLink } from 'react-router-dom'


export default function HeroSection() {
    return (
        <section className='relative bg-primary pt-[140px] bg-opacity-5 pb-44'>
            <span className="absolute bg-secondary -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
            <span className="absolute bg-gradient-to-br from-primary to-secondary -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />
            <div className='container px-4 mx-auto grid md:grid-cols-2'>
                <div className='flex items-center'>
                    <div className='relative px-8'>
                        <div className='font-bold pb-4'>
                            <p className='text-lg text-darkblue'>Welcome!</p>
                        </div>
                        <div className="mt-4 mb-8 font-bold text-3xl">
                            <p className="text-black pb-2">Cari Pekerjaan Mudah dengan Job!</p>
                            <p className="text-black">semua pekerjaan freelance ada.</p>
                        </div>
                        <div className='pb-8 font font-semibold'>
                            <p className='text-black'>Daftar sekarang di job gratis!</p>
                        </div>
                        <div className='col-span-2 lg:flex gap-16 lg:mb-12'>
                            <SecondaryButton>
                                Register
                            </SecondaryButton>
                            <NavLink to={"/login"}>
                                <PrimaryButton>
                                    Login
                                </PrimaryButton>
                            </NavLink>
                        </div>
                    </div>

                </div>
                <div className='hidden md:flex justify-end'>
                    <img src={heroImage} alt="heroImage" className='' />
                </div>
            </div>
        </section>
    )
}
