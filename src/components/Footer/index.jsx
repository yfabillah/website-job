import React from 'react'
import logo from '../../images/logo.png'
import PrimaryButton from '../buttons/PrimaryButton'

export default function Footer() {
  return (
    <footer>
        <div className="text-center py-6">
        <p className="text-black">© Copyright 2022 Asoy All rights reserved</p>
        <small className='text-black'>
          Design by Yudith, checkout the repository <a href="https://github.com/yfabillah" className="text-primary" target="_blank" rel='noreferrer'>here</a>
        </small>
      </div>
    </footer>
  )
}
