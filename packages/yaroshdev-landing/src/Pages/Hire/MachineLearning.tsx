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

export const MLLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/ml' })

export const HireMachineLearning = () => {
  return (
    <ContentCard catchBoundary='ml' to='/hire' from='/hire/ml'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Machine Learning</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Comprehensive machine learning solutions delivering modern ML frameworks, distributed computing capabilities, and production-ready ML systems with multi-kernel
          development expertise.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>ML Frameworks & Libraries</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔥 <strong>PyTorch</strong> with{' '}
                <MLLink to='https://pytorch.org/' external>
                  PyTorch
                </MLLink>{' '}
                for deep learning research and production deployment
              </li>
              <li>
                ⚡ <strong>Google JAX</strong> with{' '}
                <MLLink to='https://jax.readthedocs.io/en/latest/' external>
                  JAX
                </MLLink>{' '}
                for high-performance numerical computing and automatic differentiation
              </li>
              <li>
                🌊 <strong>Nvidia Warp</strong> with{' '}
                <MLLink to='https://developer.nvidia.com/warp-python' external>
                  Nvidia Warp
                </MLLink>{' '}
                for GPU-accelerated simulation and physics-based ML
              </li>
              <li>📊 Practice multi-kernel development in JAX + Warp as PyTorch backends for optimal performance</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Distributed Computing</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ☁️ <strong>Ray</strong> with{' '}
                <MLLink to='https://www.ray.io/' external>
                  Ray
                </MLLink>{' '}
                for distributed ML training, hyperparameter tuning, and model serving
              </li>
              <li>
                🔄 Distributed training with{' '}
                <MLLink to='https://pytorch.org/tutorials/intermediate/ddp_tutorial.html' external>
                  PyTorch DDP
                </MLLink>{' '}
                and for multi-GPU and multi-node training
              </li>
              <li>📊 Model parallelism and pipeline parallelism for large language models</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>MLOps & Production</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🚀 Model deployment with{' '}
                <MLLink to='https://docs.ray.io/en/latest/serve/index.html' external>
                  Ray Serve
                </MLLink>
              </li>
              <li>
                📊 Experiment tracking and model versioning with{' '}
                <MLLink to='https://docs.ray.io/en/latest/tune/index.html' external>
                  Ray Tune
                </MLLink>{' '}
                and{' '}
                <MLLink to='https://docs.ray.io/en/latest/train/train.html' external>
                  Ray Train
                </MLLink>
              </li>
              <li>🔍 Model monitoring and drift detection for production ML systems</li>
              <li>
                ⚙️ Feature stores and data pipelines with{' '}
                <MLLink to='https://feast.dev/' external>
                  Feast
                </MLLink>{' '}
                and{' '}
                <MLLink to='https://docs.ray.io/en/latest/data/data.html' external>
                  Ray Data
                </MLLink>
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Specialized Hardware</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💻 GPU acceleration with{' '}
                <MLLink to='https://developer.nvidia.com/cuda-toolkit' external>
                  CUDA
                </MLLink>{' '}
                and{' '}
                <MLLink to='https://rocm.docs.amd.com/' external>
                  ROCm
                </MLLink>{' '}
                for AMD GPUs
              </li>
              <li>
                🧠 TPU optimization with{' '}
                <MLLink to='https://cloud.google.com/tpu' external>
                  Google Cloud TPU
                </MLLink>{' '}
                for large-scale model training
              </li>
              <li>
                ⚡ Edge deployment with{' '}
                <MLLink to='https://aws.amazon.com/machine-learning/inferentia/' external>
                  AWS Inferentia
                </MLLink>{' '}
                and{' '}
                <MLLink to='https://aws.amazon.com/machine-learning/trainium/' external>
                  AWS Trainium
                </MLLink>{' '}
                for cost-effective inference
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Research Areas</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🤖 Large Language Models (LLMs) and transformer architectures</li>
              <li>🔍 Computer vision and multimodal learning systems</li>
              <li>🎯 Reinforcement learning and multi-agent systems</li>
              <li>📊 Time series forecasting and anomaly detection</li>
              <li>🧠 Neural architecture search and automated ML (AutoML)</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/ml')({
  component: HireMachineLearning
})
