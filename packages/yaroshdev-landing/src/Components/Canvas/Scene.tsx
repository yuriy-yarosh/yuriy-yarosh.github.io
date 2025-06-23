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

import React, { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

// Import the mouse position context
import { useAnimationState, useResponsiveGridSize, useColors } from 'Landing/Hooks'

// import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
// import { AnimatedGlitch } from './effects/AnimatedGlitch'

interface BoxProps extends BoxData {
  isAdditionallyScaled?: boolean
}

const Box = ({ id, position, color, scale, isAdditionallyScaled = false }: BoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { isAnimating, animationClock, continuousClock } = useAnimationState()

  useFrame(() => {
    if (meshRef.current) {
      const x = position[0]
      const y = position[1]
      const z = position[2]

      // Use continuous clock for base sinusoidal animation if main animation is paused
      const sinusoidalElapsedTime = isAnimating ? animationClock.getElapsedTime() : continuousClock.getElapsedTime()

      const baseAnimFactorX = 0.8 + Math.sin(sinusoidalElapsedTime * 0.5 + x * 0.5) * 0.2
      const baseAnimFactorY = 0.8 + Math.sin(sinusoidalElapsedTime * 0.5 + y * 0.5) * 0.2
      const baseAnimFactorZ = 0.8 + Math.sin(sinusoidalElapsedTime * 0.5 + z * 0.5) * 0.2

      let scaleMultiplier = 0.8
      // This part of the animation (making boxes larger) should still respect the main animation state
      if (isAdditionallyScaled && isAnimating) {
        scaleMultiplier = 1.8 // Make additionally scaled boxes larger
      }

      const finalTargetScaleX = scale * baseAnimFactorX * scaleMultiplier
      const finalTargetScaleY = scale * baseAnimFactorY * scaleMultiplier
      const finalTargetScaleZ = scale * baseAnimFactorZ * scaleMultiplier

      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, finalTargetScaleX, 0.1)
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, finalTargetScaleY, 0.1)
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, finalTargetScaleZ, 0.1)
    }
  })

  return (
    <mesh ref={meshRef} position={position} userData={{ id }}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

interface BoxData {
  id: string
  position: [number, number, number]
  color: THREE.Color // Assuming THREE is imported, e.g., import * as THREE from 'three';
  scale: number
}

const isInternal = (x: number, y: number, z: number, gridSize: number) => x > 0 && x < gridSize - 1 && y > 0 && y < gridSize - 1 && z > 0 && z < gridSize - 1

const BoxGrid = () => {
  const gridSize = useResponsiveGridSize()
  const spacing = 0.15
  const boxSize = 0.07
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()
  const [additionallyScaledBoxIds, setAdditionallyScaledBoxIds] = useState(new Set<string>())
  const lastSelectionTimeRef = useRef(0)
  const selectionInterval = 3 // seconds

  const boxes = useMemo(() => {
    const offset = ((gridSize - 1) * spacing) / 2

    const coordinates = Array.from({ length: gridSize }, (_, i) => i)

    return coordinates.flatMap((x) =>
      coordinates.flatMap(
        (y) =>
          coordinates
            .map((z) => {
              // Create boxes only on the external shell. Skip internal boxes.

              if (isInternal(x, y, z, gridSize)) {
                return null // This is an internal box, skip it.
              }

              const position: [number, number, number] = [x * spacing - offset, y * spacing - offset, z * spacing - offset]

              const color = new THREE.Color(
                // Assuming THREE is imported
                0.5 + 0.5 * Math.sin((x / gridSize) * Math.PI),
                0.5 + 0.5 * Math.sin((y / gridSize) * Math.PI),
                0.5 + 0.5 * Math.sin((z / gridSize) * Math.PI)
              )

              const scale = boxSize * (0.8 + Math.random() * 0.4)
              const id = `box-${x}-${y}-${z}`

              return { id, position, color, scale }
            })
            .filter((box): box is BoxData => box !== null) // Filter out nulls (skipped boxes) and assert type
      )
    )
  }, [gridSize]) // Only gridSize is a reactive dependency here

  const { isAnimating, animationClock } = useAnimationState()

  useFrame(() => {
    // Only animate when isAnimating is true
    if (!isAnimating) return

    // Use our custom animation clock that properly handles pausing
    const elapsedTime = animationClock.getElapsedTime()

    // Grid rotation animation
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(elapsedTime * 0.05) * 0.2
    }

    // Periodically select front-facing boxes for additional scaling
    if (elapsedTime - lastSelectionTimeRef.current > selectionInterval) {
      lastSelectionTimeRef.current = elapsedTime

      if (groupRef.current && camera) {
        const frontFacingBoxMeshes: THREE.Object3D[] = []
        const tempWorldPos = new THREE.Vector3()

        for (const child of groupRef.current.children) {
          child.getWorldPosition(tempWorldPos)
          // Consider a box front-facing if its world Z is towards the camera (positive Z)
          if (tempWorldPos.z > 0.1) {
            frontFacingBoxMeshes.push(child)
          }
        }

        const numToSelect = 9
        // Shuffle the array of front-facing meshes (Fisher-Yates shuffle)
        for (let i = frontFacingBoxMeshes.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[frontFacingBoxMeshes[i], frontFacingBoxMeshes[j]] = [frontFacingBoxMeshes[j], frontFacingBoxMeshes[i]]
        }

        const selectedMeshes = frontFacingBoxMeshes.slice(0, Math.min(numToSelect, frontFacingBoxMeshes.length))
        const newSelectedIds = new Set(selectedMeshes.map((mesh) => mesh.userData.id as string))
        setAdditionallyScaledBoxIds(newSelectedIds)
      }
    }
  })

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} {...box} isAdditionallyScaled={additionallyScaledBoxIds.has(box.id)} />
      ))}
    </group>
  )
}

// Camera controller that responds to animation state
const CameraController = () => {
  const { isAnimating } = useAnimationState()
  const { camera } = useThree()

  useFrame(() => {
    const targetPosition = isAnimating ? new THREE.Vector3(0, 0, 2.5) : new THREE.Vector3(0, 0, 3)

    // Smoothly animate camera to target position
    camera.position.lerp(targetPosition, 0.05)
  })

  return null
}

export const Scene = React.memo(() => {
  const { isDark, colors } = useColors()
  // const [hasBadPerformance, degradePerformance] = useState(false)
  // const goodPerformance = () => degradePerformance(false)
  // const badPerformance = () => degradePerformance(true)

  // Dark/light theme settings
  const background = colors.rgb.primary
  const fogColor = colors.rgb.background
  const ambientIntensity = isDark ? 0.45 : 0.3
  const pointLightIntensity = isDark ? 1.3 : 1
  const accentLightIntensity = isDark ? 0.7 : 0.5

  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }} fallback={<div>Sorry no WebGL supported!</div>}>
      <CameraController />
      {/* <PerformanceMonitor onDecline={badPerformance} onIncline={goodPerformance}> */}
      <color attach='background' args={[background]} />
      <fog attach='fog' args={[fogColor, 1, 3]} />

      <ambientLight intensity={ambientIntensity} />
      <pointLight position={[1, 1, 1]} intensity={pointLightIntensity} />
      <pointLight position={[1, -1, 1]} color='#0ff' intensity={accentLightIntensity} />

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

      {/* <OrbitControls enableZoom={true} enablePan={true} /> */}
      {/* </PerformanceMonitor> */}
    </Canvas>
  )
})
