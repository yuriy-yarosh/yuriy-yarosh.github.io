import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import { Vector2 } from 'three'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'

export function AnimatedGlitch() {
  const [active, setActive] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useFrame(() => {
    if (prefersReducedMotion) {
      if (active) setActive(false)
      return
    }

    const shouldGlitch = Math.random() > 0.995
    if (shouldGlitch !== active) {
      setActive(shouldGlitch)
    }
  })

  return <Glitch delay={new Vector2(1.5, 3.5)} duration={new Vector2(0.6, 1.0)} strength={new Vector2(0.01, 0.02)} mode={GlitchMode.SPORADIC} active={active} ratio={0.85} />
}
