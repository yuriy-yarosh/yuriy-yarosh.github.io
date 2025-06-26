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

export const EmbeddedLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/embedded' })

export const HireEmbedded = () => {
  return (
    <ContentCard catchBoundary='embedded' to='/hire' from='/hire/embedded'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Embedded</Heading>
        <Paragraph className='mt-4 lg:mt-8'>I specialize in modern embedded systems development with Rust, real-time operating systems, and IoT protocols:</Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Modern Embedded Languages</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🦀 <strong>Rust</strong> with{' '}
                <EmbeddedLink to='https://www.rust-lang.org/' external>
                  Rust
                </EmbeddedLink>{' '}
                for memory-safe systems programming without runtime overhead
              </li>
              <li>
                ⚡ <strong>Embassy</strong> with{' '}
                <EmbeddedLink to='https://embassy.dev/' external>
                  Embassy
                </EmbeddedLink>{' '}
                async runtime for modern embedded Rust development
              </li>
              <li>🔧 Bare-metal Rust development with no_std and embedded-hal traits</li>
              <li>🎯 Mixed Rust/C integration for legacy system modernization</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Real-Time Operating Systems</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔄 <strong>Zephyr</strong> with{' '}
                <EmbeddedLink to='https://www.zephyrproject.org/' external>
                  Zephyr RTOS
                </EmbeddedLink>{' '}
                for scalable, secure IoT applications
              </li>
              <li>
                🥜 <strong>Apache NuttX</strong> with{' '}
                <EmbeddedLink to='https://nuttx.apache.org/' external>
                  Apache NuttX
                </EmbeddedLink>{' '}
                for POSIX-compliant embedded systems
              </li>
              <li>
                ⚠️ Consider{' '}
                <EmbeddedLink to='https://github.com/Azure/azure-iot-middleware-freertos' external>
                  Azure FreeRTOS
                </EmbeddedLink>{' '}
                and{' '}
                <EmbeddedLink to='https://aws.amazon.com/freertos/' external>
                  AWS FreeRTOS
                </EmbeddedLink>{' '}
                too bloated for most use cases
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>IoT Communication Protocols</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📶 <strong>CoAP</strong> with{' '}
                <EmbeddedLink to='https://en.wikipedia.org/wiki/Constrained_Application_Protocol' external>
                  CoAP
                </EmbeddedLink>{' '}
                for constrained application protocol over UDP
              </li>
              <li>
                📱 <strong>MQTT-SN</strong> with{' '}
                <EmbeddedLink to='https://en.wikipedia.org/wiki/MQTT-SN' external>
                  MQTT-SN
                </EmbeddedLink>{' '}
                for sensor networks with HTTP/3 transports
              </li>
              <li>
                🌐 <strong>LWM2M</strong> with{' '}
                <EmbeddedLink to='https://en.wikipedia.org/wiki/Lightweight_Machine_to_Machine' external>
                  LWM2M
                </EmbeddedLink>{' '}
                for device management and service enablement
              </li>
              <li>
                📊 Prefer modern protocols over traditional{' '}
                <EmbeddedLink to='https://en.wikipedia.org/wiki/MQTT' external>
                  MQTT
                </EmbeddedLink>{' '}
                for better performance and security
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Hardware Platforms</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>💻 ARM Cortex-M and Cortex-A series microcontrollers and processors</li>
              <li>⚡ RISC-V architecture for open-source hardware platforms</li>
              <li>📶 ESP32/ESP8266 for WiFi and Bluetooth connectivity</li>
              <li>🔌 STM32, Nordic nRF, and Raspberry Pi Pico development</li>
              <li>📊 FPGA integration with soft-core processors</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Development Tools & Debugging</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🔧 Cross-compilation toolchains and embedded Rust ecosystem</li>
              <li>🔍 Hardware debugging with JTAG, SWD, and OpenOCD</li>
              <li>📊 Real-time tracing and profiling with ETM and ITM</li>
              <li>⚡ Unit testing and hardware-in-the-loop (HIL) testing</li>
              <li>📊 Power consumption analysis and optimization</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Security & Safety</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🔒 Secure boot, cryptographic hardware acceleration, and TrustZone</li>
              <li>🛡️ Memory protection units (MPU) and privilege separation</li>
              <li>🔐 Over-the-air (OTA) updates with cryptographic verification</li>
              <li>⚠️ Functional safety standards (ISO 26262, IEC 61508) compliance</li>
            </ul>
          </div>
        </div>

        <Paragraph className='mt-6 text-secondary-accent text-sm'>
          Also check out my expertise in <EmbeddedLink to='/hire/drivers'>Device Drivers</EmbeddedLink>, <EmbeddedLink to='/hire/highload'>Highload Applications</EmbeddedLink>, and{' '}
          <EmbeddedLink to='/hire/simulation'>Simulation & Modeling</EmbeddedLink>.
        </Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/embedded')({
  component: HireEmbedded
})
