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
