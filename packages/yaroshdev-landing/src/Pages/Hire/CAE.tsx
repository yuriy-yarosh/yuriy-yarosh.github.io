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

const CAELink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/cae' })

export const HireCAE = () => {
  return (
    <ContentCard catchBoundary='cae' to='/hire' from='/hire/cae'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>CAE</Heading>
        <Paragraph className='mt-4 lg:mt-8'>Perform Computer-Aided Engineering (CAE) solutions and advanced simulation methods using physics-informed modeling.</Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Computational Fluid Dynamics (CFD)</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌊 <strong>Lattice Boltzmann Methods</strong> with{' '}
                <CAELink to='https://en.wikipedia.org/wiki/Lattice_Boltzmann_methods' external>
                  LBM
                </CAELink>{' '}
                for complex fluid flow analysis and multi-phase simulations
              </li>
              <li>
                💧 <strong>Smoothed Particle Hydrodynamics</strong> with{' '}
                <CAELink to='https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics' external>
                  SPH
                </CAELink>{' '}
                for tensor flight models validation and free-surface flow simulation
              </li>
              <li>
                ⚡ <strong>OpenFOAM Integration</strong> with{' '}
                <CAELink to='https://openfoam.org/' external>
                  OpenFOAM
                </CAELink>{' '}
                for turbulence modeling, heat transfer, and multi-physics simulations
              </li>
              <li>🌪️ Advanced turbulence models (LES, RANS, DNS) and boundary layer analysis</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Finite Element Analysis (FEA)</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔧 <strong>Structural Analysis</strong> with{' '}
                <CAELink to='https://www.ansys.com/' external>
                  ANSYS
                </CAELink>{' '}
                for static, dynamic, and non-linear mechanical simulations
              </li>
              <li>
                📐 <strong>Multiphysics Modeling</strong> with coupled thermal-structural analysis, fluid-structure interaction (FSI), and electromagnetics
              </li>
              <li>
                🎯 <strong>Optimization Studies</strong> with topology optimization, parametric design, and sensitivity analysis
              </li>
              <li>🧪 Material modeling including composites, non-linear materials, and failure analysis</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>AI-Enhanced Simulation</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>Physics-Informed Neural Networks</strong> with{' '}
                <CAELink to='https://arxiv.org/abs/2406.02496' external>
                  T-KAN
                </CAELink>{' '}
                (Temporal Kolmogorov-Arnold Networks) for reduced-order modeling
              </li>
              <li>
                📊 <strong>Neural ODEs</strong> with{' '}
                <CAELink to='https://en.wikipedia.org/wiki/Neural_differential_equation' external>
                  Neural Differential Equations
                </CAELink>{' '}
                for continuous-time system dynamics
              </li>
              <li>
                🔮 <strong>Surrogate Modeling</strong> with Gaussian processes, polynomial chaos expansion, and machine learning meta-models
              </li>
              <li>⚡ Real-time simulation acceleration using AI inference and model compression techniques</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Design & Manufacturing Simulation</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🏗️ <strong>Additive Manufacturing</strong> with powder bed fusion modeling, thermal history prediction, and defect analysis
              </li>
              <li>
                ⚙️ <strong>Machining Simulation</strong> with cutting force prediction, tool wear modeling, and surface finish optimization
              </li>
              <li>
                🔧 <strong>Assembly Analysis</strong> with tolerance stack-up, fit analysis, and kinematic simulation
              </li>
              <li>📏 Design for manufacturability (DfM) and process optimization workflows</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>High-Performance Computing Infrastructure</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💻 <strong>GPU Acceleration</strong> with CUDA,{' '}
                <CAELink to='https://www.nvidia.com/en-us/data-center/tesla-v100/' external>
                  NVIDIA Tesla
                </CAELink>
                , and{' '}
                <CAELink to='https://www.amd.com/en/graphics/instinct-server-accelerators' external>
                  AMD Instinct
                </CAELink>{' '}
                for massively parallel simulations
              </li>
              <li>
                🤖 <strong>Specialized AI Hardware</strong> with{' '}
                <CAELink to='https://aws.amazon.com/inferentia/' external>
                  AWS Inferentia
                </CAELink>{' '}
                and{' '}
                <CAELink to='https://cloud.google.com/tpu' external>
                  Google Cloud TPU
                </CAELink>{' '}
                for AI-enhanced simulations
              </li>
              <li>
                🔗 <strong>Distributed Computing</strong> with MPI, OpenMP, and <CAELink to='/hire/devops'>Kubernetes orchestration</CAELink> for large-scale simulations
              </li>
              <li>📊 Performance profiling, memory optimization, and scalability analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/cae')({
  component: HireCAE
})
