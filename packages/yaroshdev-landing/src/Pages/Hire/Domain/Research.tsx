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

const ResearchLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  ContentLink({ ...params, from: '/hire/research', underline: true })

export const HireResearch = () => {
  return (
    <ContentCard catchBoundary='research' to='/hire' from='/hire/research'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Research</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Occasionally perform research computing, scientific software development, and infrastructure support for various research initiatives in Simulation Intelligence
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>High-Performance Computing (HPC)</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💻 <strong>Parallel Computing</strong> with{' '}
                <ResearchLink to='https://www.open-mpi.org/' external>
                  MPI
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://www.openmp.org/' external>
                  OpenMP
                </ResearchLink>
                , and{' '}
                <ResearchLink to='https://developer.nvidia.com/cuda-toolkit' external>
                  CUDA
                </ResearchLink>{' '}
                for large-scale computational problems, related{' '}
                <ResearchLink to='https://developer.nvidia.com/nccl' external>
                  NCCL
                </ResearchLink>{' '}
                and{' '}
                <ResearchLink to='https://developer.nvidia.com/magnum-io' external>
                  Magnum IO
                </ResearchLink>{' '}
                deployments
              </li>
              <li>
                🌐 <strong>Cluster Management</strong> with{' '}
                <ResearchLink to='https://slurm.schedmd.com/' external>
                  SLURM
                </ResearchLink>
                , and{' '}
                <ResearchLink to='https://volcano.sh' external>
                  Volcano Jobs
                </ResearchLink>{' '}
                for research workload orchestration
              </li>
              <li>
                📊 <strong>Performance Optimization</strong> with profiling tools (
                <ResearchLink to='https://www.intel.com/content/www/us/en/develop/tools/vtune-profiler.html' external>
                  VTune
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://www.amd.com/en/developer/uprof.html' external>
                  uProf
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://developer.nvidia.com/nsight-systems' external>
                  Nsight
                </ResearchLink>
                ), vectorization, and memory optimization
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Scientific Computing & Modeling</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🧮 <strong>Computational Science</strong> with{' '}
                <ResearchLink to='https://numpy.org/' external>
                  NumPy
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://www.scipy.org/' external>
                  SciPy
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://julialang.org/' external>
                  Julia
                </ResearchLink>
                , for numerical analysis (
                <ResearchLink to='https://docs.jax.dev/en/latest/' external>
                  Jax
                </ResearchLink>{' '}
                and{' '}
                <ResearchLink to='https://developer.nvidia.com/warp-python' external>
                  Nvidia Warp
                </ResearchLink>{' '}
                NumPy kernels)
              </li>
              <li>
                🔬 <strong>Physics simulations</strong> with mesoscopic energy methods, and related finite element analysis
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Data Management & Analysis</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔍 <strong>Big Data Analytics</strong> with{' '}
                <ResearchLink to='https://spark.apache.org/' external>
                  Apache Spark
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://docs.ray.io/en/latest/ray-more-libs/dask-on-ray.html' external>
                  Dask on Ray
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://flink.apache.org/' external>
                  Apache Flink
                </ResearchLink>
                , and{' '}
                <ResearchLink to='https://datafusion.apache.org/' external>
                  Apache DataFusion
                </ResearchLink>{' '}
                for large-scale data processing
              </li>
              <li>
                📊 <strong>Statistical Computing</strong> with{' '}
                <ResearchLink to='https://mc-stan.org/' external>
                  Stan
                </ResearchLink>{' '}
                for statistical analysis and reproducible research workflows with common Jupyter environments
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Machine Learning & AI Research</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>Deep Learning Frameworks</strong> with{' '}
                <ResearchLink to='https://pytorch.org/' external>
                  PyTorch
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://www.tensorflow.org/' external>
                  TensorFlow
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://jax.readthedocs.io/' external>
                  JAX
                </ResearchLink>
                , and distributed training infrastructure
              </li>
              <li>
                📚 <strong>Natural Language Processing</strong> with{' '}
                <ResearchLink to='https://huggingface.co/' external>
                  Hugging Face Transformers
                </ResearchLink>
                ,{' '}
                <ResearchLink to='https://spacy.io/' external>
                  spaCy
                </ResearchLink>
                , and large language model fine-tuning
              </li>
              <li>
                🖼️ <strong>Computer vision research</strong> with image classification, object detection and related FPGA-acceleration methods
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/research')({
  component: HireResearch
})
