'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export const MASCOT_HERO = '/Mascots/mascot-hero.png'
export const MASCOT_HOME = '/Mascots/mascot-home.png'
export const MASCOT_EXPLAIN = '/Mascots/mascot-explain.png'
export const MASCOT_WAVE = '/Mascots/mascot-wave.png'
export const MASCOT_POINT = '/Mascots/mascot-point.png'
export const MASCOT_THUMBS = '/Mascots/mascot-thumbs.png'

interface MascotFloatProps {
  src: string
  /** Base box size (Image intrinsic / fixed box when not unboxed) */
  size?: number
  float?: boolean
  className?: string
  /** Let Tailwind className control max width/height (no fixed px box) */
  unboxed?: boolean
}

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -14, 0],
    transition: {
      duration: 3.5,
      ease: 'easeInOut' as const,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
}

export default function MascotFloat({
  src,
  size = 160,
  float = true,
  className = '',
  unboxed = false,
}: MascotFloatProps) {
  const boxStyle = unboxed
    ? undefined
    : ({ width: size, height: size, maxWidth: '100%' } as const)

  const img = (
    <Image
      src={src}
      alt="Sky Automations mascot"
      width={size}
      height={size}
      className={
        unboxed
          ? 'h-auto w-full object-contain object-center bg-transparent'
          : 'h-full w-full object-contain object-center bg-transparent'
      }
      style={{
        backgroundColor: 'transparent',
        ...(unboxed ? { maxHeight: `min(68vh, ${size}px)` } : {}),
      }}
      sizes={`(max-width: 768px) 90vw, ${size}px`}
      priority={size >= 200}
    />
  )

  if (float) {
    return (
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className={`select-none shrink-0 bg-transparent [background-image:none] ${unboxed ? 'inline-flex w-auto max-w-full' : ''} ${className}`}
        style={boxStyle}
      >
        {img}
      </motion.div>
    )
  }

  return (
    <div
      className={`select-none shrink-0 bg-transparent ${unboxed ? 'inline-flex w-auto max-w-full' : ''} ${className}`}
      style={boxStyle}
    >
      {img}
    </div>
  )
}
