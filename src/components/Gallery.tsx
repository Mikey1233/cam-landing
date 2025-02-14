"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop",
]

const heights = ["400px", "500px", "600px", "500px", "400px"]
const position = ["70px", "20px", "0px", "20px", "70px"]


export function Gallery() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-start">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className={`relative cursor-pointer`}
            style={{ height: heights[index],position: "relative", top: position[index] }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick(index)}
          >
            <AnimatePresence>
              <motion.div
                initial={false}
                animate={{
                  y: expandedIndex === index ? -50 : 0,
                  zIndex: expandedIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Portrait photograph"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

