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

import { ContentCard, ContentLink, Heading, Paragraph } from 'Landing/Components'
import { createFileRoute } from '@tanstack/react-router'

export const SimulationLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  ContentLink({ ...params, from: '/hire/simulation', underline: true })

export const HireSimulation = () => {
  return (
    <ContentCard catchBoundary='simulation' to='/hire' from='/hire/simulation'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Simulation</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          I am well versed in computational simulation and AI-aided modeling with physics-informed neural networks, statistical physics, and high-performance computing:
        </Paragraph>

        <div className='space-y-4'>
          <div>
            <Paragraph className='font-semibold text-lg'>Physics-Based Simulation Methods</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌊 <strong>Lattice Boltzmann Methods</strong> with{' '}
                <SimulationLink to='https://en.wikipedia.org/wiki/Lattice_Boltzmann_methods' external>
                  LBM
                </SimulationLink>{' '}
                for fluid dynamics and complex flow simulations
              </li>
              <li>
                💧 <strong>Smoothed Particle Hydrodynamics</strong> with{' '}
                <SimulationLink to='https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics' external>
                  SPH
                </SimulationLink>{' '}
                for tensor flight models validation and optimization
              </li>
              <li>⚡ Finite element analysis (FEA) and computational fluid dynamics (CFD)</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>AI-Aided Simulation</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>Physics-Informed Neural Networks</strong> with{' '}
                <SimulationLink to='https://arxiv.org/abs/2406.02496' external>
                  T-KAN
                </SimulationLink>{' '}
                (Temporal Kolmogorov-Arnold Networks) for complex system modeling
              </li>
              <li>
                📊 <strong>Neural ODEs</strong> with{' '}
                <SimulationLink to='https://en.wikipedia.org/wiki/Neural_differential_equation' external>
                  Neural Differential Equations
                </SimulationLink>{' '}
                for continuous-time dynamical systems
              </li>
              <li>
                🔮 <strong>Machine learning</strong> surrogate models for expensive simulations
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>High-Performance Computing</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💻 <strong>GPU Acceleration</strong> with CUDA, OpenCL, and compute shaders
              </li>
              <li>
                🔗 <strong>Distributed computing</strong> with MPI, OpenMP, and cluster orchestration
              </li>
              <li>
                ⚡ <strong>Vectorized computations</strong> with SIMD and specialized hardware
              </li>
              <li>
                📊 <strong>Memory optimization</strong> and cache-friendly algorithm design
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Specialized Hardware</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>AWS Inferentia</strong> with{' '}
                <SimulationLink to='https://aws.amazon.com/inferentia/' external>
                  AWS Inferentia
                </SimulationLink>{' '}
                for AI inference acceleration in simulation workflows
              </li>
              <li>
                🌐 <strong>Google Cloud TPU</strong> with{' '}
                <SimulationLink to='https://cloud.google.com/tpu' external>
                  GCP TPU
                </SimulationLink>{' '}
                for tensor operations and neural network training
              </li>
              <li>
                📊 <strong>FPGA acceleration</strong> for custom simulation algorithms
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Simulation Frameworks & Tools</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🔬 OpenFOAM, ANSYS, Su2, gMesh, and COMSOL for engineering simulations</li>
              <li>🐍 NumPy, SciPy, and JAX for scientific computing in Python</li>
              <li>🦀 Developed custom Rust-based simulation frameworks for performance-critical applications</li>
              <li>
                📊 Visualization with ParaView, VisIt, and custom rendering pipelines using{' '}
                <SimulationLink to='https://bevy.org/' external>
                  Bevy
                </SimulationLink>{' '}
                game engine
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Application Domains</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>✈️ Aerospace and flight dynamics simulation</li>
              <li>🌊 Fluid dynamics</li>
              <li>🏢 Structural analysis</li>
              <li>💹 Financial modeling</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Optimization & Validation</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🎯 Multi-objective optimization and parameter sweeps</li>
              <li>📊 Uncertainty quantification and sensitivity analysis</li>
              <li>🔍 Model validation and verification techniques</li>
              <li>⚡ Adaptive mesh refinement and error estimation</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/simulation')({
  component: HireSimulation
})
