'use client'


import { motion,  useScroll, useTransform } from 'framer-motion'

import Link from 'next/link'



export default function Hero() {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          loop
          autoPlay
          muted  >
          <source src="/images/video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
  
        </video>
  
  
        
  
  
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-20"
          style={{ opacity, scale }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl italic font-italiana md:text-6xl font-bold mb-6 text-white"
          >
            Elevate Your Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-light italic font-italiana  text-xl md:text-2xl mb-8 text-white"
          >
            Transforming interiors with elegance and style
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="#contact"
              className="bg-red-900 font-italiana italic bg-opacity-10 backdrop-blur-md text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-70 transition-all duration-400 ease-in-out border"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    )
  }
  