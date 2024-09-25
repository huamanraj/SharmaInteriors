'use client'

import { motion} from 'framer-motion'
import Image from 'next/image'


export default function Services() {
    const services = [
      {
        name: 'Residential Design',
        description: 'Create your dream living space tailored to your lifestyle and preferences.',
        image: 'https://images.pexels.com/photos/28586197/pexels-photo-28586197/free-photo-of-modern-living-room-with-contemporary-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Commercial Interiors',
        description: 'Elevate your business environment to impress clients and inspire employees.',
        image: 'https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Space Planning',
        description: 'Optimize your layout for efficiency, functionality, and aesthetic appeal.',
        image: 'https://imperialfitout.co.uk/wp-content/uploads/2024/02/free-office-space-panning.png',
      },
      {
        name: 'Custom Furniture',
        description: 'Design and create unique pieces tailored to your style and space requirements.',
        image: 'https://images.crateandbarrel.com/is/image/Crate/ia-custom-furniture-design-2?&wid=1008',
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
  