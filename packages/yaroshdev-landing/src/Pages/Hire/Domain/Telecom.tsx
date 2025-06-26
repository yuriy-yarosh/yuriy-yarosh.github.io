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

const TelecomLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/telecom' })

export const HireTelecom = () => {
  return (
    <ContentCard catchBoundary='telecom' to='/hire' from='/hire/telecom'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Telecommunications Infrastructure</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Solid experience in telecommunications infrastructure solutions and real-time streaming, delivering next-generation network capabilities, carrier-grade reliability, and
          service-oriented architectures. My solutions encompass 5G networks, IoT communications, and virtualized network functions designed to meet connectivity demands and
          regulatory equirements.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>5G & Wireless Networks</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📶 <strong>5G Core Network</strong> - Service-Based Architecture (SBA) implementation with{' '}
                <TelecomLink to='https://www.3gpp.org/about-3gpp' external>
                  3GPP standards
                </TelecomLink>{' '}
                compliance, Network Function Virtualization (NFV), and microservices-based network functions
              </li>
              <li>
                📡 <strong>Radio Access Network</strong> - Advanced{' '}
                <TelecomLink to='https://www.o-ran.org/' external>
                  O-RAN
                </TelecomLink>{' '}
                architecture implementation with Massive MIMO, beamforming technologies, and small cell deployments
              </li>
              <li>
                ⚡ <strong>Network Slicing</strong> - Isolated virtual networks with{' '}
                <TelecomLink to='https://www.opnfv.org/' external>
                  OPNFV
                </TelecomLink>{' '}
                platforms, QoS management for different service types, and Multi-Access Edge Computing (MEC) integration
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Network Infrastructure & Protocols</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📊 <strong>Traffic Engineering</strong> - AI-optimized Segment Routing with MPLS-TE and SR-MPLS/SRv6 for optimal path selection and network optimization
              </li>
              <li>
                🔄 <strong>High-Availability Architectures</strong> - Redundancy and failover mechanisms ensuring carrier-grade reliability with 99.999% uptime guarantees
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>IoT & M2M Communications</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📱 <strong>Cellular IoT</strong> - Massive machine-type communications with{' '}
                <TelecomLink to='https://www.gsma.com/iot/narrow-band-internet-of-things-nb-iot/' external>
                  NB-IoT
                </TelecomLink>
                ,{' '}
                <TelecomLink to='https://www.gsma.com/iot/lte-m/' external>
                  LTE-M
                </TelecomLink>
                , and{' '}
                <TelecomLink to='https://www.gsma.com/iot/5g-iot/' external>
                  5G IoT
                </TelecomLink>{' '}
                protocols for ultra-low power and high-density deployments
              </li>
              <li>
                🌐 <strong>LPWAN Technologies</strong> - Private LPWAN network deployments with{' '}
                <TelecomLink to='https://lora-alliance.org/' external>
                  LoRaWAN
                </TelecomLink>
                , custom WiLo emulation, and long-range wireless connectivity solutions
              </li>
              <li>
                🔌 <strong>Device Management</strong> - Remote device provisioning and monitoring with{' '}
                <TelecomLink to='https://www.omaspecworks.org/what-is-oma-specworks/iot/lightweight-m2m-lwm2m/' external>
                  LwM2M
                </TelecomLink>
                , and{' '}
                <TelecomLink to='https://mqtt.org/' external>
                  MQTT / MQTT-SN
                </TelecomLink>{' '}
                protocols for comprehensive device lifecycle management
              </li>
              <li>
                🔋 <strong>Edge Analytics</strong> - Real-time data processing and machine learning at the network edge for improved latency and bandwidth optimization
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>VoIP & Unified Communications</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📞 <strong>Legacy VoIP Systems</strong> - SIP server development with{' '}
                <TelecomLink to='https://www.asterisk.org/' external>
                  Asterisk
                </TelecomLink>
                ,{' '}
                <TelecomLink to='https://www.freeswitch.org/' external>
                  FreeSWITCH
                </TelecomLink>
                , and{' '}
                <TelecomLink to='https://www.kamailio.org/' external>
                  Kamailio
                </TelecomLink>{' '}
                for enterprise communications solutions
              </li>
              <li>
                🎥 <strong>WebRTC</strong> - Browser-based real-time communications with{' '}
                <TelecomLink to='https://webrtc.org/' external>
                  WebRTC standards
                </TelecomLink>
                , STUN/TURN servers, and NAT traversal solutions
              </li>
              <li>
                📹 <strong>Video Conferencing</strong> - Custom scalable media server architecture with{' '}
                <TelecomLink to='https://webrtc.rs/' external>
                  webrtc.rs
                </TelecomLink>{' '}
                streaming and signaling for enterprise-grade video communications
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Network Function Virtualization (NFV)</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💻 <strong>NFV Infrastructure</strong> - Virtualized network functions with{' '}
                <TelecomLink to='https://www.opnfv.org/' external>
                  OPNFV
                </TelecomLink>
                , and{' '}
                <TelecomLink to='https://osm.etsi.org/' external>
                  OSM
                </TelecomLink>{' '}
                orchestration platforms
              </li>
              <li>
                🔄 <strong>VNF Development</strong> - High-performance packet processing with{' '}
                <TelecomLink to='https://www.dpdk.org/' external>
                  DPDK
                </TelecomLink>{' '}
                and{' '}
                <TelecomLink to='https://fd.io/' external>
                  FD.io/VPP
                </TelecomLink>{' '}
                for fast data plane implementations
              </li>
              <li>
                📊 <strong>Performance Optimizations</strong> - SR-IOV, CPU pinning, and NUMA-aware resource allocation for carrier-grade performance
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Emerging Technologies</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📡 <strong>Satellite Communications</strong> - Hybrid terrestrial-satellite networks with{' '}
                <TelecomLink to='https://www.3gpp.org/news-events/3gpp-news/1963-ran_ntn' external>
                  3GPP Non-Terrestrial Networks (NTN)
                </TelecomLink>
                , LEO/MEO satellite integration, and global coverage solutions
              </li>
              <li>
                🤖 <strong>AI/ML in Telecom</strong> - Network optimization and predictive maintenance with machine learning algorithms for autonomous network operations
              </li>
              <li>
                🔍 <strong>Network Analytics</strong> - Big data processing for customer experience management and network performance optimization with real-time insights
              </li>
              <li>
                🌐 <strong>Private 5G Networks</strong> - Industrial IoT deployments and mission-critical communications with dedicated spectrum and enhanced security
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/telecom')({
  component: HireTelecom
})
