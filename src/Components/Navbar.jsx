
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
    {/* Desktop Navbar */}
      <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-gradient-to-t from-darkblue to-black ">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10 ">
          <Link className='no-underline' to='/'>
           <h5 className=' text-white  bg-gray-500 rounded-full  py-3 px-4 '>LOGO</h5>
          </Link>
          <div>
            <ul className="hidden md:flex items-center ">
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to='/' className='no-underline text-white'>Home</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to={'/about' }  className='no-underline text-white'>About</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to={'/experience'}  className='no-underline text-white'>Experience</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to={'/projects' }  className='no-underline text-white'>Projects</Link>
              </li>
              <li className="bg-white rounded-full  py-2 px-2 ml-10 text-sm uppercase hover:border-b hover:border-black">
                <Link to={'/skills' }  className='no-underline text-black'>Skills</Link>
              </li>
             
             
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu color='white'size="20" />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
              : ''
          }`}
        >
          <div
            className={`${
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <Link to='/'>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/020/815/881/non_2x/portfolio-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
           
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link to='/' onClick={()=>setNav(false)}>
                  <li className="py-4">Home</li>
                </Link>

                <Link to={'/about' } onClick={()=>setNav(false)}>
                  <li className="py-4">About</li>
                </Link>

               

                <Link to={'/experience'} onClick={()=>setNav(false)}>
                <li className="py-4">Experience</li>
                </Link>
                <Link to={'/projects'} onClick={()=>setNav(false)}>
                <li className="py-4">Projects</li>
                </Link>
                <Link to={'/skills'} onClick={()=>setNav(false)}>
                <li className="py-4">Skills</li>
                </Link>
               
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}