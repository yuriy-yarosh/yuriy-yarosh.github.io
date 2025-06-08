import { useState, useMemo, useRef } from 'react'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'
import type { Group } from 'three'

function PhysicsBox({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <RigidBody position={position} restitution={0.4} friction={0.2} linearDamping={0.5} angularDamping={0.5} colliders="cuboid">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: Keyboard events are not directly supported on 3D meshes. */}
      <mesh
        scale={clicked ? scale * 1.2 : hovered ? scale * 1.1 : scale}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color={clicked ? '#ff8800' : hovered ? '#fff' : color}
          roughness={0.3}
          metalness={0.8}
          emissive={clicked ? '#ff4400' : hovered ? '#444444' : '#000000'}
          emissiveIntensity={clicked ? 2 : hovered ? 0.5 : 0}
        />
      </mesh>
    </RigidBody>
  )
}

export function FloatingBoxes() {
  const count = 20
  const group = useRef<Group>(null)

  const boxes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 15,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      color: new Color().setHSL(0.6 + Math.random() * 0.1, 0.8, 0.7).getHexString(),
      scale: Math.random() * 0.5 + 0.5
    }))
  }, [])

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={group}>
      {boxes.map((box) => (
        <PhysicsBox key={box.id} {...box} />
      ))}
      <CuboidCollider args={[20, 0.1, 20]} position={[0, -2, 0]} />
    </group>
  )
}
