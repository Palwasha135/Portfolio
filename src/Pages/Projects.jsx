import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import Blogimg from '../Assets/blogimg.png'
import Pricingimg from '../Assets/pricingimg.png';
import Weatherimg from '../Assets/weatherimg.png';
import Bmwimg from '../Assets/bmwimg.png'
const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 521,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          // {
          //   breakpoint: 309,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1,
          //     infinite: true,
          //     dots: true
          //   }
          // },
       ] };
  return (
    <div className='text-white  gap-3 lg:pl-16  lg:pr-16 lg:gap-3 xs:gap-1 sm:mt-7 lg:mt-12 p-12 sm:p-4 xs:p-3'>
      <h3 className="text-2xl font-bold">Projects</h3>
      <div className="slider-container mt-8 md:p-20 lg:p-20 sm:p-20 xs:p-20">
      <Slider {...settings}>
       

        <div className="relative  inline-block  ">
          <div className='bg-gray-300 w-48 h-40'>
  <img class='pt-3 pb-5 w-64 h-full object-cover' src={Blogimg}/>
        <Link  to='https://weatherapp-frontend-seven-woad.vercel.app/'>
         <button class='absolute bottom-0 left-0 px-5  py-1 ml-3  mt-6 mb-2 text-white bg-darkblue'>Live Link</button>
         
         </Link></div>
        </div>

        
         {/* <div className="relative  h-28">
        <img src={Pricingimg} alt="Image 1" className='w-64' />
        <Link  to='https://pricing-sable.vercel.app/'>
      
        <button className="absolute  inset-x-24 bottom-0 p-2 bg-white text-black">Live Link</button></Link>
      </div> */}
      
      <div className="relative inline-block  ">
          <div className='bg-gray-300 w-48 h-40'>
  <img class=' pt-3 pb-5 w-64 h-full object-cover' src={Weatherimg} alt="Description of the image"/>
  <Link to='https://weatherapp-sandy-phi.vercel.app/'>
  <button class='absolute bottom-0 left-0 px-5  py-1 ml-3 text-white mt-6 mb-2 bg-darkblue'>Live Link</button>
  </Link>
</div></div>

<div className="relative inline-block  ">
          <div className='bg-gray-300 w-48 h-40'>
  <img class=' pt-3 pb-5 w-64 h-full object-cover' src={Pricingimg} alt="Description of the image"/>
  <Link to='https://pricing-sable.vercel.app/'>
    <button class='absolute bottom-0 left-0 px-5  py-1 ml-3  mt-6 mb-2 text-white  bg-darkblue'>Live Link</button>
  </Link>
</div> </div>
 
<div className="relative inline-block  ">
          <div className='bg-gray-300 w-48 h-40'>
  <img class=' pt-3 pb-5 w-64 h-full object-cover' src={Bmwimg} alt="Description of the image"/>
  <Link to='https://bmw-cars-ruby.vercel.app/'>
  <button class='absolute bottom-0 left-0 px-5 text-white py-1 ml-3  mt-6 mb-2 bg-darkblue'>Live Link</button>
  </Link>
</div></div>
        
        
      </Slider></div>
      <div className="text-center lg:mt-40  sm:mt-6">
        <h3 className='text-xl font-semibold'>Let us create awesome products!</h3>
        <p className=" mt-4 mb-9">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
      </div>
    </div>
  )
}

export default Projects
