import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Trail } from '@react-three/drei'
// Side-effect import to register NebulaMaterial with three-extend
// eslint-disable-next-line import/no-unassigned-import
import './NebulaBackground'
import type { Mesh } from 'three'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Crystal() {
  const mesh = useRef<Mesh>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useFrame((_, delta) => {
    if (mesh.current && !prefersReducedMotion) {
      mesh.current.rotation.y += delta * 0.2
      mesh.current.rotation.x += delta * 0.1
    }
  })

  return (
    <Float speed={prefersReducedMotion ? 0 : 1} rotationIntensity={prefersReducedMotion ? 0 : 0.5} floatIntensity={prefersReducedMotion ? 0 : 2}>
      <Trail width={1} length={5} color={'#a0a0ff'} attenuation={(t) => t * t}>
        <mesh ref={mesh} position={[0, 0, -2]}>
          <icosahedronGeometry args={[1.5, 0]} />
          {/* @ts-ignore */}
          <nebulaMaterial attach='material' />
        </mesh>
      </Trail>
    </Float>
  )
}
