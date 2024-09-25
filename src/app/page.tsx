'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'






import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import WhatsAppIcon from '../components/WhatsappIcon'
import dynamic from 'next/dynamic'




const LazyPortfolio = dynamic(() => import('../components/Portfolio'), { ssr: false });



export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)

  

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }

      setIsHeaderTransparent(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <main>
    <div className={`min-h-screen font-poppins bg-neutral-50 text-neutral-900 antialiased`}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          
        }

        ::-webkit-scrollbar {
          width: 3px;
        }
        ::-webkit-scrollbar:hover {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #997553;
        }
        ::-webkit-scrollbar-thumb {
          background: #ffff;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
          
        }
      `}</style>
      <header className={`  fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ease-in-out ${isHeaderTransparent ? '' : 'flex justify-center'}`}>
        <nav className={`transition-all duration-300 ease-in-out ${isHeaderTransparent
          ? 'container mx-auto rounded-full'
          : 'rounded-full bg-white bg-opacity-10 backdrop-blur-md shadow-lg px-6 py-3 w-[80%]'
          }`}>
          <div className="flex items-center justify-between">
            <Link href="/" className={`text-2xl font-bold ${isHeaderTransparent ? 'text-white' : 'text-neutral-900'}`}>
              <Image
                src="/images/icon.png" // Path to your image
                alt="Description of the image"
                width={50} // Desired width
                height={30} // Desired height
              />
            </Link>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full transition-colors ${activeSection === item.href.slice(1)
                    ? isHeaderTransparent ? 'bg-white bg-opacity-20 text-white font-semibold' : 'bg-neutral-200 bg-opacity-50 text-neutral-900 font-semibold'
                    : isHeaderTransparent ? 'text-white hover:bg-white hover:bg-opacity-20' : 'text-neutral-600 hover:bg-neutral-200 hover:bg-opacity-50'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              className={`md:hidden p-2 rounded-full transition-colors ${isHeaderTransparent
                ? 'text-white hover:bg-white hover:bg-opacity-20'
                : 'text-neutral-900 hover:bg-neutral-200 hover:bg-opacity-50'
                }`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-md z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-20 flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-2xl font-semibold text-center py-2 rounded-full hover:bg-neutral-200 hover:bg-opacity-50 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <WhatsAppIcon/>
        <Hero />
        <About />
        <Services />
        <LazyPortfolio/>
        {/* <Portfolio /> */}
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 Sharma Interior. All rights reserved.</p>
          <p className='text-sm'>
            Design and Developed by{'  '}
            <Link href="https://www.aman-raj.xy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              Aman Raj
            </Link>
          </p>
        </div>
        
      </footer>
    </div>
    </main>
  )
}







