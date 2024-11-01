import React from 'react'
import HeroImage from '../assets/Hero.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r  from-yellow-500 via-orange-400 to-pink-500'>Grace Augusuriyanti</span>
            , UI/UX Designer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in designing mobile and web applications
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r  from-yellow-500 via-orange-400 to-pink-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
            <button
            className='bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
      
  )
}

export default Hero