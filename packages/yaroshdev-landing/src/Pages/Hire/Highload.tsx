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

export const HighloadLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/highload' })

export const HireHighload = () => {
  return (
    <ContentCard catchBoundary='highload' to='/hire' from='/hire/highload'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Highload</Heading>
        <Paragraph className='mt-4 lg:mt-8'>I specialize in high-performance systems with kernel bypass, hardware acceleration, and ultra-low latency architectures:</Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Kernel Bypass Technologies</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ⚡ <strong>XDP</strong> with{' '}
                <HighloadLink to='https://prototype-kernel.readthedocs.io/en/latest/networking/XDP/' external>
                  XDP (eXpress Data Path)
                </HighloadLink>{' '}
                for ultra-fast packet processing in kernel space
              </li>
              <li>
                🚀 <strong>DPDK/SPDK</strong> with{' '}
                <HighloadLink to='https://www.dpdk.org/' external>
                  DPDK
                </HighloadLink>{' '}
                and{' '}
                <HighloadLink to='https://www.spdk.io/' external>
                  SPDK
                </HighloadLink>{' '}
                for userspace packet and storage processing
              </li>
              <li>
                🌊 <strong>Seastar</strong> with{' '}
                <HighloadLink to='https://seastar.io/' external>
                  Seastar
                </HighloadLink>{' '}
                C++17 framework for high-performance server applications
              </li>
              <li>
                🦀 <strong>Rust libos</strong> with{' '}
                <HighloadLink to='https://libos-nuse.github.io/' external>
                  libos
                </HighloadLink>{' '}
                and{' '}
                <HighloadLink to='https://github.com/microsoft/demikernel' external>
                  demikernels
                </HighloadLink>{' '}
                for safe systems programming
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Hardware Acceleration</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💻 <strong>GPU Offloading</strong> with{' '}
                <HighloadLink to='https://developer.nvidia.com/aerial' external>
                  Nvidia Aerial
                </HighloadLink>{' '}
                for 5G and edge computing workloads
              </li>
              <li>
                🔗 <strong>Multi-GPU</strong> with{' '}
                <HighloadLink to='https://developer.nvidia.com/nccl' external>
                  NCCL
                </HighloadLink>{' '}
                for collective communications and distributed computing
              </li>
              <li>
                ⚡ <strong>FPGA</strong> with{' '}
                <HighloadLink to='https://aws.amazon.com/ec2/instance-types/f2/' external>
                  AWS F1/F2
                </HighloadLink>{' '}
                instances for custom hardware acceleration
              </li>
              <li>📊 SmartNIC and DPU programming for network processing offload</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Performance Optimization</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🔥 Zero-copy networking and memory-mapped I/O for minimal latency</li>
              <li>⚙️ CPU affinity, NUMA awareness, and lock-free data structures</li>
              <li>📊 Cache-friendly algorithms and memory layout optimization</li>
              <li>
                🔍 Performance profiling with{' '}
                <HighloadLink to='https://perf.wiki.kernel.org/' external>
                  perf
                </HighloadLink>
                ,{' '}
                <HighloadLink to='https://www.intel.com/content/www/us/en/develop/tools/vtune-profiler.html' external>
                  VTune
                </HighloadLink>
                ,{' '}
                <HighloadLink to='https://www.amd.com/en/developer/uprof.html' external>
                  uProf
                </HighloadLink>
                ,{' '}
                <HighloadLink to='https://developer.nvidia.com/nsight-systems' external>
                  Nsight
                </HighloadLink>
                , and{' '}
                <HighloadLink to='https://github.com/KDAB/hotspot' external>
                  Hotspot
                </HighloadLink>
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Low-Latency Architectures</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🎨 Event-driven architectures with epoll, io_uring, and async I/O</li>
              <li>🔄 Reactive streams and backpressure handling for flow control</li>
              <li>📊 Ring buffers, lock-free queues, and wait-free algorithms</li>
              <li>⚡ Real-time scheduling and interrupt handling optimization</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Distributed Systems</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🌐 High-throughput message brokers and event streaming platforms</li>
              <li>🔗 Consistent hashing, sharding, and partition tolerance</li>
              <li>📊 Load balancing with connection pooling and circuit breakers</li>
              <li>🔍 Distributed tracing and performance monitoring at scale</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Use Cases & Applications</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>💹 High-frequency trading and financial market data processing</li>
              <li>🎮 Real-time gaming backends and multiplayer synchronization</li>
              <li>📱 5G/6G network functions and edge computing applications</li>
              <li>📊 IoT data ingestion and real-time analytics pipelines</li>
              <li>🎥 Live video streaming and media processing systems</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/highload')({
  component: HireHighload
})
