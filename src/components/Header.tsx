"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      className="container flex items-center justify-between py-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-serif">
        Lensify
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        {["Home", "About", "Portfolio", "Services", "Pricing"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/${item.toLowerCase()}`} className="text-sm hover:text-gray-600">
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <Button variant="default" className="rounded-full bg-black text-white hover:bg-gray-800">
          Contact Us
        </Button>
      </motion.div>
    </motion.header>
  )
}

