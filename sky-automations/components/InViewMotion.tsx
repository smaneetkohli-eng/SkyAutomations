'use client'

import {
  motion,
  useInView,
  type HTMLMotionProps,
  type UseInViewOptions,
} from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

type MotionState = Record<string, number>

const defaultFrom = { opacity: 0, y: 36 }
const defaultTo = { opacity: 1, y: 0 }

type OwnProps = {
  /** Motion values when the element is not yet in view (and during SSR / first paint). */
  from?: MotionState
  /** Motion values when in view. */
  to?: MotionState
  delay?: number
  duration?: number
  /** Intersection root margin (passed to useInView). */
  margin?: UseInViewOptions['margin']
}

export type InViewMotionProps = OwnProps &
  Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileInView' | 'transition'>

/**
 * Scroll-triggered fade/slide using useInView instead of whileInView, so SSR and the
 * first client frame match (whileInView often hydrates differently than the server).
 */
export function InViewMotion({
  children,
  from = defaultFrom,
  to = defaultTo,
  delay = 0,
  duration = 0.55,
  margin = '-80px' as UseInViewOptions['margin'],
  ...rest
}: InViewMotionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin })

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isInView ? to : from}
      transition={{ duration, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
