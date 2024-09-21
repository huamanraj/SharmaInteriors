'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 3px;
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
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ease-in-out ${isHeaderTransparent ? '' : 'flex justify-center'}`}>
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
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2023 Sharma Interior. All rights reserved.</p>
          <p>
            Created by{'  '}
            <Link href="https://www.zaman-raj.xy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              Aman Raj
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

function Hero() {
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


      {/* <Image
        src="/images/bg.gif"
        alt="Luxurious interior"
        layout="fill"
        objectFit="fill"
        quality={100}
        className="absolute inset-0 z-0"
      /> */}



      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <motion.div
        className="container mx-auto px-4 text-center relative z-20"
        style={{ opacity, scale }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Elevate Your Space
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-8 text-white"
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
            className="bg-white bg-opacity-20 backdrop-blur-md text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-30 transition-all duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

function About() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          style={{ x }}
        >
          <div className="md:w-1/2">
            <Image
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt="About Sharma Interior"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sharma Interior</h2>
            <p className="text-lg mb-6">
              At Sharma Interior, we believe that every space has the potential to inspire and transform lives. With
              over a decade of experience in the industry, our team of passionate designers brings creativity,
              expertise, and attention to detail to every project.
            </p>
            <p className="text-lg mb-6">
              We specialize in creating bespoke interiors that reflect the unique personality and lifestyle of our
              clients. From residential to commercial spaces, our goal is to deliver exceptional designs that exceed
              expectations and stand the test of time.
            </p>
            <Link
              href="#services"
              className="inline-flex items-center text-lg font-semibold text-neutral-900 hover:text-neutral-700 transition-colors"
            >
              Discover our services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      name: 'Residential Design',
      description: 'Create your dream living space tailored to your lifestyle and preferences.',
      image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
    {
      name: 'Commercial Interiors',
      description: 'Elevate your business environment to impress clients and inspire employees.',
      image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
    {
      name: 'Space Planning',
      description: 'Optimize your layout for efficiency, functionality, and aesthetic appeal.',
      image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
    {
      name: 'Custom Furniture',
      description: 'Design and create unique pieces tailored to your style and space requirements.',
      image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
  ]

  return (
    <section id="services" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// function Portfolio() {
//   const projects = [
//     { name: 'Modern Loft', image: '/placeholder.svg?height=600&width=800' },
//     { name: 'Cozy Apartment', image: '/placeholder.svg?height=600&width=800' },
//     { name: 'Luxury Villa', image: '/placeholder.svg?height=600&width=800' },
//     { name: 'Office Space', image: '/placeholder.svg?height=600&width=800' },
//     { name: 'Boutique Hotel', image: '/placeholder.svg?height=600&width=800' },
//     { name: 'Restaurant Interior', image: '/placeholder.svg?height=600&width=800' },
//   ]

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative overflow-hidden rounded-lg shadow-md group"
//             >
//               <Image
//                 src={project.image}
//                 alt={project.name}
//                 width={800}
//                 height={600}
//                 className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <h3 className="text-white text-2xl font-semibold">{project.name}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

interface Project {
  name: string;
  images: string[];
}

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const projects = [
    {
      name: 'Modern Loft',
      images: [
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
      ]
    },
    {
      name: 'Cozy Apartment',
      images: [
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
      ]
    },
    {
      name: 'Luxury Villa',
      images: [
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
      ]
    },
    {
      name: 'Office Space',
      images: [
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
      ]
    },
    {
      name: 'Boutique Hotel',
      images: [
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
      ]
    },
    {
      name: 'Restaurant Interior',
      images: [
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
      ]
    },
  ]

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openGallery(project)}
            >
              <Image
                src={project.images[0]}
                alt={project.name}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <h3 className="text-white text-2xl font-semibold">{project.name}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeGallery}
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-white" onClick={closeGallery}>
                <X size={24} />
              </button>
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={prevImage}>
                <ChevronLeft size={36} />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={nextImage}>
                <ChevronRight size={36} />
              </button>
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.name}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}


function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Sharma Interior transformed our house into a dream home. Their attention to detail and creativity exceeded our expectations.',
      avatar: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      content: 'The team at Sharma Interior designed a stunning space for our restaurant. Our customers love the ambiance, and it has significantly boosted our business.',
      avatar: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Office Manager',
      content: 'Our office renovation by Sharma Interior has improved productivity and employee satisfaction. It\'s a joy to come to work every day.',
      avatar: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6">
              Ready to transform your space? Contact us today for a free consultation. We'd love to hear about your
              project and bring your vision to life.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                123 Design Street, Creative City, 12345
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@sharmainterior.com
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}