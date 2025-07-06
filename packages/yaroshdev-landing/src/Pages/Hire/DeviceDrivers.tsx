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

export const DriversLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  ContentLink({ ...params, from: '/hire/drivers', underline: true })

export const HireDrivers = () => {
  return (
    <ContentCard catchBoundary='drivers' to='/hire' from='/hire/drivers'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Drivers</Heading>
        <Paragraph className='mt-4 lg:mt-8'>Occasionally I do modern device driver development in Rust, Linux kernel modules, and cross-platform driver architectures</Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Modern Driver Development</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🦀 <strong>Rust for Linux</strong> with{' '}
                <DriversLink to='https://rust-for-linux.com/' external>
                  Rust for Linux
                </DriversLink>{' '}
                kernel modules for memory-safe driver development
              </li>
              <li>
                🐧 <strong>Linux Kernel</strong> with Linux kernel modules, character/block devices, and network drivers
              </li>
              <li>
                🔧 User-space drivers with{' '}
                <DriversLink to='https://www.kernel.org/doc/html/latest/driver-api/uio-howto.html' external>
                  UIO
                </DriversLink>{' '}
                and{' '}
                <DriversLink to='https://www.kernel.org/doc/html/latest/driver-api/vfio.html' external>
                  VFIO
                </DriversLink>{' '}
                frameworks
              </li>
              <li>⚡ eBPF for network and system monitoring drivers</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Hardware Interfaces</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📊 <strong>PCIe</strong> drivers for high-speed peripheral devices
              </li>
              <li>
                🔌 <strong>USB</strong> drivers for various device classes and custom protocols
              </li>
              <li>
                📶 <strong>I2C/SPI</strong> drivers for sensor and communication interfaces
              </li>
              <li>
                ⚡ <strong>GPIO/PWM</strong> drivers for embedded system control
              </li>
              <li>
                💻 <strong>xDMA</strong> for high-performance and low-latency data transfer
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Cross-Platform Development</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🎯 <strong>Windows</strong> with WDF and KMDF/UMDF development, prefer Rust windows driver development
              </li>
              <li>
                🍎 <strong>macOS</strong> with{' '}
                <DriversLink to='https://developer.apple.com/documentation/driverkit' external>
                  DriverKit
                </DriversLink>{' '}
                for modern macOS driver development
              </li>
              <li>
                🦀 <strong>Rust</strong> abstractions for cross-platform drivers
              </li>
              <li>🔧 RTOS drivers for embedded systems (Embassy, Zephyr, NuttX, FreeRTOS)</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Specialized Driver Types</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📶 <strong>Network Drivers</strong> with NAPI, XDP, and AF_XDP integration, DPDK drivers development
              </li>
              <li>
                💾 <strong>Storage Drivers</strong> with NVMe, SCSI, and block layer optimization, SPDK drivers development
              </li>
              <li>
                💻 <strong>GPU Drivers</strong> with DRM/KMS and compute acceleration, occasional GPU drivers reverse engineering
              </li>
              <li>
                🎥 <strong>V4L2 Drivers</strong> for video capture and in-kernel stream processing
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Testing & Debugging</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔍 Kernel debugging with{' '}
                <DriversLink to='https://www.kernel.org/doc/html/latest/dev-tools/kgdb.html' external>
                  KGDB
                </DriversLink>
                ,{' '}
                <DriversLink to='https://www.kernel.org/doc/html/latest/dev-tools/kasan.html' external>
                  KASAN
                </DriversLink>
                , and{' '}
                <DriversLink to='https://www.kernel.org/doc/html/latest/dev-tools/kcov.html' external>
                  KCOV
                </DriversLink>
              </li>
              <li>⚡ Hardware-in-the-loop testing and automated driver validation</li>
              <li>📊 Performance profiling and latency analysis</li>
              <li>🔒 Security testing and vulnerability assessment</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Security & Safety</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🔒 Secure driver signing and attestation</li>
              <li>🛡️ Memory safety with Rust and formal verification techniques</li>
              <li>⚠️ Functional safety compliance (ISO 26262, IEC 61508)</li>
              <li>🔐 Driver isolation and sandboxing techniques</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/drivers')({
  component: HireDrivers
})
