import React from 'react'
import LoginButton from '../../slices/LoginButton'
import heroImage from '../../assets/heroimage.png'
import { motion } from 'framer-motion'

// Parent container animation (for stagger)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between child animations
    },
  },
}

// Each child (h1, p, button)
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0D1A30] to-[#001F1E] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Text Content with Animation */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-200 leading-tight md:leading-tight mb-6"
              variants={item}
            >
              Organize Your Life, Effortlessly.
            </motion.h1>

            <motion.p 
              className="font-lato text-lg md:text-xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={item}
            >
              Manage your tasks, projects, and deadlines with our intuitive and beautifully designed platform.
            </motion.p>

            <motion.div variants={item}>
              <LoginButton />
            </motion.div>
          </motion.div>
          
          {/* Image with Animation */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg flex items-center justify-center overflow-hidden">
              <motion.img 
                src={heroImage} 
                alt="Task management illustration" 
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
