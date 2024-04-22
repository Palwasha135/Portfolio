import React from 'react'
import Arrow from '../Assets/Frame.png'
const Footer = () => {
  return (
    <div className='bg-footerclr  '>
      <footer className='py-3 border-y-2 border-white ' >
       <div className='text-white text-center '>
        <h5>Contact Me</h5>
        <ul className=' grid xs:grid-cols-2 sm:grid-cols-3 md:px-20 lg:px-52 md:grid-cols-5  gap-4 pt-4  md:pl-28 '>
            <li className='flex flex-row gap-2'>Github  <img src={Arrow}/></li>
            <li className='flex flex-row gap-2'>Youtube  <img src={Arrow}/></li>
            <li className='flex flex-row gap-2'>LinkedIn  <img src={Arrow}/></li>
            <li className='flex flex-row gap-2'>Facebook  <img src={Arrow}/></li>
            <li className='flex flex-row gap-2'>Nextjs  <img src={Arrow}/></li>
           
        </ul>
        </div>
       
      </footer>
       <h6 className='p-3 text-white'>© 2024 aribamemon All rights reserved.</h6>
    </div>
  )
}

export default Footer
