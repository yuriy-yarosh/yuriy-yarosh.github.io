/*
 * Copyright (C) 2016-2025 Yuriy Yarosh
 * All rights reserved.
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRef, useMemo, useState, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Import the mouse position context
import { useMousePosition } from '../../context/MouseContext'

// import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
// import { AnimatedGlitch } from './effects/AnimatedGlitch'

// Create a simple component for a single box in the grid
const Box = ({ position, color, scale }: { position: [number, number, number]; color: THREE.Color; scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const { normalizedPosition } = useMousePosition()

  const { camera } = useThree()

  const isNearMouse = useCallback(() => {
    if (!meshRef.current) return false

    const boxPosition = new THREE.Vector3()
    meshRef.current.getWorldPosition(boxPosition)

    const tempV = boxPosition.clone()
    tempV.project(camera)

    const distance = Math.sqrt((tempV.x - normalizedPosition.x) ** 2 + (tempV.y - normalizedPosition.y) ** 2)

    return distance < 0.1
  }, [normalizedPosition, camera])

  useFrame((state) => {
    if (meshRef.current) {
      const x = position[0]
      const y = position[1]
      const z = position[2]

      const mouseNearby = isNearMouse()
      if (mouseNearby !== hovered) {
        setHovered(mouseNearby)
      }

      let targetScaleX = scale * (0.8 + Math.sin(state.clock.elapsedTime * 0.5 + x * 0.5) * 0.2)
      let targetScaleY = scale * (0.8 + Math.sin(state.clock.elapsedTime * 0.5 + y * 0.5) * 0.2)
      let targetScaleZ = scale * (0.8 + Math.sin(state.clock.elapsedTime * 0.5 + z * 0.5) * 0.2)

      if (hovered) {
        targetScaleX *= 1.0 + Math.sin(state.clock.elapsedTime * 0.2 + x * 0.2)
        targetScaleY *= 1.0 + Math.sin(state.clock.elapsedTime * 0.2 + y * 0.2)
        targetScaleZ *= 1.0 + Math.sin(state.clock.elapsedTime * 0.2 + z * 0.2)
      }

      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScaleX, 0.1)
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScaleY, 0.1)
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScaleZ, 0.1)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} emissive={hovered ? color : new THREE.Color(0, 0, 0)} emissiveIntensity={hovered ? 0.5 : 0} />
    </mesh>
  )
}

// Create the BoxGrid component
const BoxGrid = () => {
  const gridSize = 8 // Reduced from 16 to 8 for better performance
  const spacing = 0.15 // Increased spacing for better visibility
  const boxSize = 0.05 // Increased box size for better visibility
  const groupRef = useRef<THREE.Group>(null)

  // Generate positions and colors for each box in the grid
  const boxes = useMemo(() => {
    const boxes = []
    const offset = ((gridSize - 1) * spacing) / 2

    // Only create boxes on the outer shell to improve performance
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          // Only create boxes on the outer shell or randomly inside (for a less dense grid)
          if (x === 0 || x === gridSize - 1 || y === 0 || y === gridSize - 1 || z === 0 || z === gridSize - 1 || Math.random() < 0.1) {
            // 10% chance for interior boxes

            // Calculate position
            const position: [number, number, number] = [x * spacing - offset, y * spacing - offset, z * spacing - offset]

            // Generate a color based on position
            const color = new THREE.Color(
              0.5 + 0.5 * Math.sin((x / gridSize) * Math.PI),
              0.5 + 0.5 * Math.sin((y / gridSize) * Math.PI),
              0.5 + 0.5 * Math.sin((z / gridSize) * Math.PI)
            )

            // Vary the scale slightly for visual interest
            const scale = boxSize * (0.8 + Math.random() * 0.4)

            // Create a unique ID for each box
            const id = `box-${x}-${y}-${z}-${Math.random().toString(36).substr(2, 9)}`

            boxes.push({ id, position, color, scale })
          }
        }
      }
    }

    return boxes
  }, [])

  // Animation for the entire grid
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} color={box.color} scale={box.scale} />
      ))}
    </group>
  )
}

export const Scene = () => {
  // const [hasBadPerformance, degradePerformance] = useState(false)
  // const goodPerformance = () => degradePerformance(false)
  // const badPerformance = () => degradePerformance(true)

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 60 }} fallback={<div>Sorry no WebGL supported!</div>}>
      {/* <PerformanceMonitor onDecline={badPerformance} onIncline={goodPerformance}> */}
      <color attach='background' args={['#f2f2f2']} />
      <fog attach='fog' args={['#f0f0f0', 1, 3]} />

      <ambientLight intensity={0.3} />
      <pointLight position={[1, 1, 1]} intensity={1} />
      <pointLight position={[1, -1, 1]} color='#0ff' intensity={0.5} />

      <BoxGrid />

      <Environment preset='night' />

      {/* <Suspense fallback={null}>
          <Physics gravity={[0, -0.08, 0]} interpolate={false}>
            <CuboidCollider position={[0, -0.5, 0]} args={[2, 0.05, 2]} restitution={0.5} />
            <FloatingBoxes />
          </Physics>

          <Crystal />

          {perfPriority > 0.5 && <ParticleSystem />}
          <Stars radius={5} depth={5} count={perfPriority > 0.5 ? 5000 : 1000} factor={0.4} saturation={0.5} fade speed={prefersReducedMotion ? 0 : 1} />

          {perfPriority > 0.5 && <Sparkles count={100} scale={1.5} size={1} speed={prefersReducedMotion ? 0 : 0.4} color='#fff' />}

          <Environment preset='night' />

          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} opacity={1.5} />
            <ChromaticAberration offset={prefersReducedMotion ? [0, 0] : [0.002, 0.002]} />
            <Noise opacity={0.05} blendFunction={BlendFunction.OVERLAY} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <AnimatedGlitch />
          </EffectComposer>

          <UI />
        </Suspense> */}

      <OrbitControls enableZoom={true} enablePan={true} />
      {/* </PerformanceMonitor> */}
    </Canvas>
  )
}
