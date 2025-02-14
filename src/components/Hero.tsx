"use client"

import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 text-center relative">
      <motion.div
        className="absolute left-20 top-0"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: -45 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Camera className="w-12 h-12 text-gray-400" />
        <svg className="w-16 h-16 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22C12 22 20 16 20 12C20 8 16 4 12 4C8 4 4 8 4 12C4 16 12 22 12 22Z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute right-20 bottom-0"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Camera className="w-12 h-12 text-gray-400" />
        <svg className="w-16 h-16 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22C12 22 20 16 20 12C20 8 16 4 12 4C8 4 4 8 4 12C4 16 12 22 12 22Z" />
        </svg>
      </motion.div>
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-4xl mx-auto leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Turning Every Moment into a Beautiful Timeless Masterpiece
      </motion.h1>
      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        From fleeting smiles to stunning landscapes, we capture the essence of your world in every shot. Capturing
        life's best moments.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">Book Now</Button>
      </motion.div>
    </section>
  )
}

