import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, Color, BufferGeometry, BufferAttribute, AdditiveBlending } from 'three'
import { usePrefersReducedMotion } from 'Landing/Hooks'

export function ParticleSystem() {
  const count = 2000
  const particlesRef = useRef<Points>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 30
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 30

      const color = new Color()
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      sizes[i] = Math.random() * 0.5 + 0.1
    }

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    geometry.setAttribute('color', new BufferAttribute(colors, 3))
    geometry.setAttribute('size', new BufferAttribute(sizes, 1))

    return geometry
  }, [])

  useFrame((state) => {
    if (!particlesRef.current || prefersReducedMotion) return

    const time = state.clock.getElapsedTime() * 0.1
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = positions[i3]
      const z = positions[i3 + 2]

      positions[i3] = x * Math.cos(time) - z * Math.sin(time)
      positions[i3 + 2] = x * Math.sin(time) + z * Math.cos(time)
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef} geometry={particles}>
      <pointsMaterial
        size={0.1}
        vertexColors
        blending={AdditiveBlending}
        transparent
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
