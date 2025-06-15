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

// import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

// import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
// import { AnimatedGlitch } from './effects/AnimatedGlitch'
// import { Physics, CuboidCollider } from '@react-three/rapier'
// import { BlendFunction } from 'postprocessing'
// import { Root, Text, Container } from '@react-three/uikit'
// import type { ReactNode } from 'react'
// import { useNavigate } from '@tanstack/react-router'

export const Scene = () => {
  // const [hasBadPerformance, degradePerformance] = useState(false)
  // const goodPerformance = () => degradePerformance(false)
  // const badPerformance = () => degradePerformance(true)

  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 60 }} fallback={<div>Sorry no WebGL supported!</div>}>
      {/* <PerformanceMonitor onDecline={badPerformance} onIncline={goodPerformance}> */}
      <color attach='background' args={['#f2f2f2']} />
      <fog attach='fog' args={['#f0f0f0', 1, 3]} />

      <ambientLight intensity={0.3} />
      <pointLight position={[1, 1, 1]} intensity={1} />
      <pointLight position={[1, -1, 1]} color='#0ff' intensity={0.5} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>

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
