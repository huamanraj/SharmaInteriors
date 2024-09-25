  'use client'

  import { useState } from 'react'
  import { motion, AnimatePresence,  } from 'framer-motion'
  import {  X,  ChevronLeft, ChevronRight } from 'lucide-react'
  import Image from 'next/image'



  interface Project {
      name: string;
      images: string[];
    }

    
  export default function Portfolio() {
      const [selectedProject, setSelectedProject] = useState<Project | null>(null);
      const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    
      const projects = [
        {
          name: 'Modern Loft',
          images: [
            'https://img.freepik.com/free-photo/close-up-elegant-decoration-house_23-2149153696.jpg?t=st=1727280569~exp=1727284169~hmac=fb57de4d666de1d6bff050b9bed520d5a765758c69c85595a4b06806086da6fd&w=996',
            'https://img.freepik.com/free-photo/view-modern-futuristic-work-space-with-furniture_23-2151797744.jpg?t=st=1727262530~exp=1727266130~hmac=5f342935eb300accb3a7b333c678d7ec559945fe6289f6cb5e50119807c62fcb&w=360',
            'https://img.freepik.com/free-photo/interior-modern-office_23-2147668767.jpg?t=st=1727280538~exp=1727284138~hmac=432788d082398b102c3a937640d8229733fda562e6732d88fbbe82c19c21d2df&w=996'
          ]
        },
        {
          name: 'Cozy Apartment',
          images: [
            'https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118835.jpg?t=st=1727280652~exp=1727284252~hmac=496a74ea1427e484ba83f7f8c310052d490272083f13dc17a62cd40d8cb07331&w=826',
            'https://img.freepik.com/free-photo/full-shot-people-reading-book-club_23-2150062121.jpg?t=st=1727280726~exp=1727284326~hmac=24521ddf3e5133172ca5c9324513c7c63210c641a520517cfa8d7b7c16ece0af&w=996',
            'https://img.freepik.com/free-photo/affectionate-couple-home-having-food-bowl-beer_23-2149442966.jpg?t=st=1727280706~exp=1727284306~hmac=82cd646d549ef48ae8c70552f810162d5b68dd30030dd1531ff3bbb6d6e8bcda&w=996'
          ]
        },
        {
          name: 'Luxury Villa',
          images: [
            'https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694099.jpg?t=st=1727280790~exp=1727284390~hmac=ac2795f738fc1ae955f121c659a655efcb50cf9dbb6588d66b29a12b29331cc6&w=360',
            'https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799681.jpg?t=st=1727280813~exp=1727284413~hmac=6faf690e10933f646f42207daf0fd62f65a379ddfc3029ae7e4d69300e08b961&w=740',
            'https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694016.jpg?t=st=1727280827~exp=1727284427~hmac=6bc26436d7b811e8ad06f8b76bd9e2d9724c610254e54642269dde686039acb3&w=1060'
          ]
        },
        {
          name: 'Office Space',
          images: [
            'https://img.freepik.com/free-photo/view-modern-office_1170-1969.jpg?t=st=1727280891~exp=1727284491~hmac=9488e9e69e78ac473ee786ea91f345eeb6cd4447b27f1b0d10c9d1d8a7d69d60&w=996',
            'https://img.freepik.com/free-photo/room-interior-design_23-2148899442.jpg?t=st=1727280907~exp=1727284507~hmac=d6a4d19e0da452678147a3347622c0f87ff250061fbec08036b7af2074452a3b&w=996',
            'https://img.freepik.com/free-photo/modern-minimalist-office-black-white_23-2151777574.jpg?t=st=1727280940~exp=1727284540~hmac=8c146eaafa670c3e0589a22d0be81a4f54d6643f801412c01bcbe0e4d840e24e&w=360'
          ]
        },
        {
          name: 'Boutique Hotel',
          images: [
            'https://img.freepik.com/free-photo/dining-table-with-chairs-tableware_140725-7823.jpg?t=st=1727280975~exp=1727284575~hmac=548bdec35b7311827af8356dcccf71a33794e670401b22901036c8c09b4b70de&w=996',
            'https://img.freepik.com/free-photo/relax-area-resort_1150-10728.jpg?t=st=1727281007~exp=1727284607~hmac=979ab16d63e905d19e4c8db6f490506e71b673e81500d8c49cc60d013c79cccd&w=996',
            'https://img.freepik.com/free-photo/luxury-thai-massage-pavilion_1150-11075.jpg?t=st=1727281000~exp=1727284600~hmac=6a7976ac50984f0f46dbc25502bcf5f656966d1efdf0ac0124a0e5ce52bf6ab4&w=996'
          ]
        },
        {
          name: 'Restaurant Interior',
          images: [
            'https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?t=st=1727281096~exp=1727284696~hmac=04669ffc7c9ed0036fe7a105c2b511ddb50b1d06fb6b87ea7d8bc32af533dbf8&w=900',
            'https://lh3.googleusercontent.com/p/AF1QipNX-EYUCWgPqzhvN1Y27ENm_r41zbMnKHbfZx7B=s1360-w1360-h1020-rw',
            'https://lh3.googleusercontent.com/p/AF1QipMeuF6RO8Rfp7W0RWoXpo5Xg_kLn-9e3oF28dV8=s1360-w1360-h1020-rw'
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