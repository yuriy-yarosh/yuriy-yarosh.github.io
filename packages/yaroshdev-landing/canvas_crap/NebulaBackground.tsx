/*
 * Custom shader background inspired by ohzi.io aesthetic.
 * Creates a colorful nebula-like animated background.
 */

import { shaderMaterial } from '@react-three/drei'

import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'
import { ShaderMaterial } from 'three'

// Define a custom shader material using drei's helper.
// Use plain template literals for shader code; no Babel macro needed with Vite.
const NebulaMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uResolution: new THREE.Vector2(1, 1),
    uColorA: new THREE.Color('#2196f3'),
    uColorB: new THREE.Color('#9c27b0')
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    precision highp float;
    varying vec2 vUv;

    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec3 uColorA;
    uniform vec3 uColorB;

    // 2D random
    float random (in vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    // 2D noise
    float noise (in vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      // Four corners in 2D of a tile
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      // Smooth Interpolation
      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 st = vUv * 3.0; // Scale
      float n = noise(st + uTime * 0.1);
      float n2 = noise(st * 0.5 - uTime * 0.05);
      float mixVal = smoothstep(0.2, 0.8, n + n2 * 0.5);

      vec3 color = mix(uColorA, uColorB, mixVal);

      gl_FragColor = vec4(color, 1.0);
    }
  `
)

extend({ NebulaMaterial })

// Export the material so it can be reused in other components (e.g., Crystal)
export { NebulaMaterial }

export function NebulaBackground() {
  const meshRef = useRef<THREE.Mesh | null>(null)
  const materialRef = useRef<ShaderMaterial | null>(null)

  useFrame(({ clock, viewport }) => {
    const mat = materialRef.current as any
    if (!mat) return
    mat.uTime = clock.elapsedTime
    mat.uResolution = new THREE.Vector2(viewport.width, viewport.height)
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -1]} scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      {/* @ts-ignore */}
      <nebulaMaterial ref={materialRef} />
    </mesh>
  )
}
