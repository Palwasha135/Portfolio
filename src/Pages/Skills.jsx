import React from 'react'

const Skills = () => {
  return (
    <div className='font-Montserrat text-white lg:pl-16  lg:pr-16 gap-3 sm:mt-7 lg:mt-12 p-9'>
      <h3 className="text-2xl font-bold">Skills</h3>
      
      <div className='grid  sm:grid-cols-3 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-9 pb-9'>
      <h5 className='rounded-md border border-white'>React JS</h5>
      <h5 className='border border-white'>Tailwind Css</h5>
      <h5 className='border border-white'>MongoDB</h5>
      <h5 className='border border-white'>Dialogflow</h5>
      <h5 className='border border-white'>HTML</h5>
      <h5 className='border border-white'>CSS</h5>
      <h5 className='border border-white'>Express JS</h5>
      <h5 className='border border-white'>Node JS</h5>
      </div>
      <div className="text-center  lg:mt-40  sm:mt-11 xs:mt-10 ">
        <h3 className='text-xl font-semibold'>Let us create awesome products!</h3>
        <p className="mt-4 mb-7 ">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
      </div>
    </div>
  )
}

export default Skills
