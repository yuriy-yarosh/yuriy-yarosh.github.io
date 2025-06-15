import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import type { Mesh } from 'three'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface FloatingTextProps {
  children: React.ReactNode
  position?: [number, number, number]
  size?: number
  color?: string
}

export function FloatingText({ 
  children, 
  position = [0, 0, 0], 
  size = 1, 
  color = 'white'
}: FloatingTextProps) {
  const mesh = useRef<Mesh>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  
  useFrame((state) => {
    if (mesh.current && !prefersReducedMotion) {
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <Float speed={prefersReducedMotion ? 0 : 2} rotationIntensity={prefersReducedMotion ? 0 : 0.5} floatIntensity={prefersReducedMotion ? 0 : 2}>
      <Text
        ref={mesh}
        position={position}
        fontSize={size}
        color={color}
        maxWidth={6}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </Float>
  )
}
