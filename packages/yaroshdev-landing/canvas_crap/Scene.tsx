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

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars, PerformanceMonitor, Sparkles } from '@react-three/drei'
import { FloatingBoxes } from './FloatingBoxes'

import { Crystal } from './Crystal'
import { ParticleSystem } from './ParticleSystem'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
import { AnimatedGlitch } from './effects/AnimatedGlitch'
import { Physics, CuboidCollider } from '@react-three/rapier'
import { BlendFunction } from 'postprocessing'
import { Root, Text, Container } from '@react-three/uikit'
import type { ReactNode } from 'react'
import { useNavigate } from '@tanstack/react-router'

function UIButton({ children, onClick, marginRight }: { children: ReactNode; onClick?: () => void; marginRight?: number }) {
  return (
    <Container
      padding={0.02}
      backgroundColor='#222'
      borderRadius={0.01}
      marginRight={marginRight}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}>
      {children}
    </Container>
  )
}

function UI() {
  const navigate = useNavigate({ from: '/' })

  return (
    <Root scale={0.5} position={[0, 0, 0]}>
      <Container flexDirection='column' justifyContent='center' alignItems='center' padding={0.03} backgroundColor='black' backgroundOpacity={0.2} borderRadius={0.02}>
        <Text fontSize={0.1} letterSpacing={-0.02} fontWeight='bold' color='white' marginBottom={0.04}>
          Yuriy Yarosh
        </Text>
        <Text fontSize={0.04} color='gray' marginBottom={0.04}>
          Software Engineer & Creative Developer
        </Text>
        <group>
          <UIButton
            // biome-ignore lint/suspicious/noExplicitAny: <This is a temporary workaround for a type issue with TanStack Router>
            onClick={() => navigate({ to: '/blog' as any })}
            marginRight={0.01}>
            <Text>Read My Blog</Text>
          </UIButton>
          <UIButton>
            <Text>About Me</Text>
          </UIButton>
        </group>
      </Container>
    </Root>
  )
}

export function Scene() {
  const [perfPriority, setPerfPriority] = useState(0.5)
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Canvas camera={{ position: [0, 0, 1.5], fov: 50 }}>
      <PerformanceMonitor onDecline={() => setPerfPriority(0)} onIncline={() => setPerfPriority(1)}>
        <color attach='background' args={['#050505']} />
        <fog attach='fog' args={['#050505', 1, 4]} />

        <ambientLight intensity={0.4} />
        <pointLight position={[1, 1, 1]} intensity={1} />
        <pointLight position={[-1, -1, -1]} color='#0ff' intensity={0.5} />

        <Suspense fallback={null}>
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
        </Suspense>

        <OrbitControls enableZoom={true} enablePan={true} />
      </PerformanceMonitor>
    </Canvas>
  )
}
