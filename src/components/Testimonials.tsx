'use client'


import { motion} from 'framer-motion'
import Image from 'next/image'


export default function Testimonials() {
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
  