'use client'


import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo1 from '../../public/images/Logo.jpeg'


export default function About() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section id="about" className="py-20 pl-6  bg-white overflow-hidden">
      <div className="container mx-auto px-4 ">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          style={{ x }}
        >
          <div className="md:w-1/2">


            <Image
              src={logo1}
              alt="About Sharma Interior"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sharma Interior</h2>
            <p className="text-lg mb-6">
  At Sharma Interior, we believe every space has the potential to inspire, elevate, and transform daily living. With over a decade of experience in interior design, our skilled team of creative designers brings unparalleled creativity, craftsmanship, and meticulous attention to detail to each project, ensuring visually stunning and functional spaces.
</p>
<p className="text-lg mb-6">
  We specialize in crafting bespoke interior designs for both residential and commercial spaces, tailored to reflect the unique personality and lifestyle of our clients. From luxurious modular kitchens to elegant living rooms and professional office spaces, we are committed to delivering timeless designs that exceed expectations and stand the test of time.
</p>

            <Link
              href="#services"
              className="inline-flex items-center text-lg font-semibold text-neutral-700 hover:text-neutral-600 hover:font-extrabold ease-in-out  border rounded-full px-3 py-1   transition-colors"
            >
              Discover our services
              <ArrowRight className="ml-2 h-5 w-5   " />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
