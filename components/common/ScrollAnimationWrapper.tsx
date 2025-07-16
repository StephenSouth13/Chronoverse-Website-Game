"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollAnimationWrapperProps {
  children: ReactNode
  variants?: {
    hidden: { opacity: number; y?: number; x?: number; scale?: number }
    visible: { opacity: number; y?: number; x?: number; scale?: number }
  }
  className?: string
  delay?: number
}

const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollAnimationWrapper({
  children,
  variants = defaultVariants,
  className,
  delay = 0,
}: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
