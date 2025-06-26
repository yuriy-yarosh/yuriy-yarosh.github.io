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

import { useAnimationState, useColors, useResponsiveGridSize } from 'Landing/Hooks'
import { Environment, PerformanceMonitor, Stars } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing'
import React, { useMemo, useRef, useState } from 'react'
import { Color, Fog, type Group, MathUtils, type Mesh, type Object3D, Vector3 } from 'three'

interface BoxProps extends BoxData {
  isAdditionallyScaled?: boolean
}

const Box = ({ id, position, color, scale, isAdditionallyScaled = false }: BoxProps) => {
  const { isDark } = useColors()

  const meshRef = useRef<Mesh>(null)
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
      if (isAdditionallyScaled && isAnimating) {
        // This part of the animation (making boxes larger) should still respect the main animation state
        scaleMultiplier = 1.8 // Make additionally scaled boxes larger
      }

      const finalTargetScaleX = scale * baseAnimFactorX * scaleMultiplier
      const finalTargetScaleY = scale * baseAnimFactorY * scaleMultiplier
      const finalTargetScaleZ = scale * baseAnimFactorZ * scaleMultiplier

      meshRef.current.scale.x = MathUtils.lerp(meshRef.current.scale.x, finalTargetScaleX, 0.1)
      meshRef.current.scale.y = MathUtils.lerp(meshRef.current.scale.y, finalTargetScaleY, 0.1)
      meshRef.current.scale.z = MathUtils.lerp(meshRef.current.scale.z, finalTargetScaleZ, 0.1)
    }
  })

  return (
    <mesh ref={meshRef} position={position} userData={{ id }}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={isDark ? 0.9 : 0.8}
        roughness={isDark ? 0.1 : 0.2}
        envMapIntensity={2}
        emissive={color}
        emissiveIntensity={isDark ? 0.2 : 0.6}
      />
    </mesh>
  )
}

interface BoxData {
  id: string
  position: [number, number, number]
  color: Color
  scale: number
}

const isInternal = (x: number, y: number, z: number, gridSize: number) => x > 0 && x < gridSize - 1 && y > 0 && y < gridSize - 1 && z > 0 && z < gridSize - 1

const BoxGrid = ({ performance = 'high' }: { performance: 'high' | 'low' }) => {
  let gridSize = useResponsiveGridSize()
  gridSize = performance === 'high' ? gridSize : gridSize - 2

  const spacing = 0.15
  const boxSize = 0.07
  const groupRef = useRef<Group>(null)
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

              const color = new Color(
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
        const frontFacingBoxMeshes: Object3D[] = []
        const tempWorldPos = new Vector3()

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
    const targetPosition = isAnimating ? new Vector3(0, 0, 2.5) : new Vector3(0, 0, 3)

    // Smoothly animate camera to target position
    camera.position.lerp(targetPosition, 0.05)
  })

  return null
}

const SceneEffectsController = () => {
  const { scene } = useThree()
  const { animationClock } = useAnimationState()
  const { colors } = useColors()

  const ANIMATION_DURATION = 5 // seconds
  const FOG_START_NEAR = 4
  const FOG_START_FAR = 5
  const FOG_TARGET_NEAR = 2
  const FOG_TARGET_FAR = 3

  const startTimeRef = useRef<number | null>(null)
  const currentColorRef = useRef<Color>(new Color())

  useFrame(() => {
    const currentTime = animationClock.getElapsedTime()

    if (startTimeRef.current === null) {
      startTimeRef.current = currentTime
      scene.fog = new Fog(colors.rgb.primary, FOG_START_NEAR, FOG_START_FAR)
      currentColorRef.current.copy(new Color(colors.rgb.primary))
    }

    const elapsed = currentTime - startTimeRef.current
    const progress = Math.min(elapsed / ANIMATION_DURATION, 1)
    const easeOut = 1 - (1 - progress) ** 3

    if (scene.fog && scene.fog instanceof Fog) {
      const targetNear = MathUtils.lerp(FOG_START_NEAR, FOG_TARGET_NEAR, easeOut)
      const targetFar = MathUtils.lerp(FOG_START_FAR, FOG_TARGET_FAR, easeOut)
      scene.fog.near = MathUtils.lerp(scene.fog.near, targetNear, 0.05)
      scene.fog.far = MathUtils.lerp(scene.fog.far, targetFar, 0.05)
      scene.fog.color.setStyle(colors.rgb.primary)
    }

    const targetColor = new Color(colors.rgb.primary)
    currentColorRef.current.lerp(targetColor, 0.02)

    if (scene.background instanceof Color) {
      scene.background.copy(currentColorRef.current)
    }
  })

  return null
}

export const Scene = React.memo(() => {
  const { isDark, colors, timeOfDay } = useColors()
  const [performanceLevel, setPerformanceLevel] = useState<'high' | 'low'>('high')

  const shouldVignette: boolean = performanceLevel === 'high' && ['evening', 'night', 'dusk', 'dawn', 'morning'].includes(timeOfDay)
  const hasStars: boolean = ['evening', 'night', 'dusk', 'dawn'].includes(timeOfDay)
  const numberOfStars = performanceLevel === 'high' ? 2000 : 500

  const shouldBloom: boolean = performanceLevel === 'high' && ['noon', 'afternoon'].includes(timeOfDay)

  const { isAnimating } = useAnimationState()

  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }} gl={{ antialias: true, powerPreference: 'low-power' }} fallback={<div>Sorry no WebGL supported!</div>}>
      <PerformanceMonitor
        onDecline={() => {
          console.log('Performance dropped')
          setPerformanceLevel('low')
        }}
      />
      <CameraController />
      <SceneEffectsController />

      <color attach='background' args={[colors.rgb.primary]} />

      <BoxGrid performance={performanceLevel} />

      <EffectComposer>
        {shouldVignette ? <Vignette eskil={false} offset={0} darkness={0.7} /> : <></>}
        {shouldBloom ? <Bloom luminanceThreshold={0.3} luminanceSmoothing={3} height={720} /> : <></>}
        {isDark ? (
          <DepthOfField focusDistance={0.5} focalLength={1} bokehScale={isAnimating ? 2 : 9} height={720} />
        ) : (
          <DepthOfField focusDistance={0.3} focalLength={0.5} bokehScale={isAnimating ? 1 : 4} height={720} />
        )}
      </EffectComposer>

      {hasStars && (
        <Stars radius={1} depth={5} count={hasStars ? numberOfStars : 0} factor={timeOfDay === 'night' ? 0.4 : 0.2} saturation={timeOfDay === 'night' ? 0.3 : 0.1} fade />
      )}

      <Environment preset={isDark ? 'night' : 'park'} />
    </Canvas>
  )
})
