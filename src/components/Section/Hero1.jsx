import React from 'react'
import LoginButton from '../../slices/LoginButton'
import heroImage from '../../assets/heroimage.png'

const Hero = () => {
  return (
<section className="min-h-screen bg-gradient-to-r from-[#0D1A30] to-[#001F1E] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-200 leading-tight md:leading-tight mb-6">
              Organize Your Life, Effortlessly.
            </h1>
            <p className="font-lato text-lg md:text-xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Manage your tasks, projects, and deadlines with our intuitive and beautifully designed platform.
            </p>
            <button className="px-8 py-3 bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-lato font-medium text-lg rounded-full transition-colors shadow-md">
              Get Started
            </button>
          </div>
          
          {/* Image */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
