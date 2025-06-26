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

const HireLogisticsLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/logistics' })

export const HireLogistics = () => {
  return (
    <ContentCard catchBoundary='logistics' to='/hire' from='/hire/logistics'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Logistics & Supply Chain Management</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Providing comprehensive logistics and supply chain management solutions, delivering end-to-end visibility, automation, and compliance across transportation, warehousing,
          and distribution networks. Optimizing operational efficiency while ensuring regulatory compliance and real-time tracking capabilities.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Transportation Management Systems (TMS)</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🚛 <strong>Fleet Management</strong> - Real-time GPS tracking with{' '}
                <HireLogisticsLink to='https://www.fmcsa.dot.gov/' external>
                  FMCSA
                </HireLogisticsLink>{' '}
                compliance and automated route optimization using{' '}
                <HireLogisticsLink to='https://postgis.net/' external>
                  PostGIS
                </HireLogisticsLink>{' '}
                routing algorithms
              </li>
              <li>
                📊 <strong>Electronic Logging Devices (ELD)</strong> - Comprehensive{' '}
                <HireLogisticsLink to='https://www.fmcsa.dot.gov/hours-service/elds/electronic-logging-devices' external>
                  DOT compliance
                </HireLogisticsLink>{' '}
                with Hours of Service (HOS) tracking and automated DVIR reporting, enhanced with computer vision ML algorithms including{' '}
                <HireLogisticsLink to='https://arxiv.org/pdf/1907.05047' external>
                  BlazeFace
                </HireLogisticsLink>
                ,{' '}
                <HireLogisticsLink to='https://github.com/geaxgx/depthai_blazepose' external>
                  BlazePose
                </HireLogisticsLink>
                , and{' '}
                <HireLogisticsLink to='https://github.com/mpatacchiola/deepgaze' external>
                  DeepGaze
                </HireLogisticsLink>
              </li>
              <li>
                🔗 <strong>Load Planning & Optimization</strong> - Multi-modal transport coordination with advanced load balancing algorithms and demand forecasting using custom
                TFT transformer models,{' '}
                <HireLogisticsLink to='https://pytorch-forecasting.readthedocs.io/en/stable/api/pytorch_forecasting.models.nhits._nhits.NHiTS.html' external>
                  N-Hits
                </HireLogisticsLink>
                , and{' '}
                <HireLogisticsLink to='https://pytorch-forecasting.readthedocs.io/en/stable/api/pytorch_forecasting.models.nbeats._nbeats.NBeats.html' external>
                  N-Beats
                </HireLogisticsLink>{' '}
                algorithms via{' '}
                <HireLogisticsLink to='https://pytorch-forecasting.readthedocs.io/en/stable/' external>
                  PyTorch Forecasting
                </HireLogisticsLink>
              </li>
              <li>
                ⚡ <strong>Real-time Freight Tracking</strong> - Advanced{' '}
                <HireLogisticsLink to='https://www.3gpp.org/technologies/ntn-overview' external>
                  NTN-capable
                </HireLogisticsLink>{' '}
                tracking systems with EDI integration and carrier communication
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Supply Chain Visibility & Analytics</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📊 <strong>Demand Forecasting</strong> - Machine learning models with seasonal trend analysis and custom product tracking devices using{' '}
                <HireLogisticsLink to='https://pytorch-forecasting.readthedocs.io/en/stable/' external>
                  PyTorch Forecasting
                </HireLogisticsLink>
              </li>
              <li>
                🌐 <strong>End-to-End Visibility</strong> - Custom tracking devices with supply chain control towers and proactive exception management
              </li>
              <li>
                📈 <strong>Custom Observability Dashboards</strong> - Real-time metrics for delivery performance, inventory turns, and carrier analytics using{' '}
                <HireLogisticsLink to='https://grafana.com/oss' external>
                  Grafana Labs OSS
                </HireLogisticsLink>{' '}
                and custom React dashboards with{' '}
                <HireLogisticsLink to='https://tailwindcss.com/' external>
                  TailwindCSS
                </HireLogisticsLink>{' '}
                UI components
              </li>
              <li>
                🚨 <strong>Proactive Alerts</strong> - Predictive notifications for supply chain disruptions, inventory shortages, and delivery delays
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>E-commerce & Last-Mile Delivery</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🛒 <strong>Order Management</strong> - Custom ERP integration with Dynamics 365 and SAP, inventory allocation, and omni-channel fulfillment
              </li>
              <li>
                🚚 <strong>Last-Mile Optimization</strong> - Custom planning algorithms with delivery time windows and architecture patterns similar to{' '}
                <HireLogisticsLink to='https://aws.amazon.com/blogs/industries/going-the-last-mile-an-innovative-instant-delivery-accelerator-from-aws/' external>
                  AWS Last Mile
                </HireLogisticsLink>{' '}
                solutions
              </li>
              <li>
                📱 <strong>Customer Communication</strong> - Real-time tracking with SMS notifications and proof-of-delivery systems, integrated with omni-channel CRMs including{' '}
                <HireLogisticsLink to='https://www.salesforce.com/commerce/what-is-omnichannel/' external>
                  Salesforce
                </HireLogisticsLink>{' '}
                and{' '}
                <HireLogisticsLink to='https://learn.microsoft.com/en-us/dynamics365/customer-service/implement/introduction-omnichannel' external>
                  Dynamics 365
                </HireLogisticsLink>
              </li>
              <li>
                🎯 <strong>Dynamic Pricing Models</strong> - Real-time market conditions integration with carrier rates and applied tariffs using{' '}
                <HireLogisticsLink to='https://spinningup.openai.com/en/latest/algorithms/ddpg.html' external>
                  DDPG
                </HireLogisticsLink>{' '}
                algorithms
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Cold Chain & Specialized Logistics</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌡️ <strong>Temperature Monitoring</strong> - IoT sensors with{' '}
                <HireLogisticsLink to='https://www.emerson.com/en-us/livecontext-fragments-hidden-page/temp-and-humidity-logger' external>
                  temperature loggers
                </HireLogisticsLink>{' '}
                and custom hardware for automated cold chain compliance
              </li>
              <li>
                🔬 <strong>Chain of Custody Tracking</strong> - Comprehensive tracking for high-value and sensitive shipments
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Blockchain & IoT Integration</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ⛓️ <strong>Supply Chain Traceability</strong> - Blockchain-based traceability using{' '}
                <HireLogisticsLink to='https://github.com/epfl-lara/bolts' external>
                  Scala3 Stainless
                </HireLogisticsLink>{' '}
                verified smart contracts with immutable transaction records
              </li>
              <li>
                📡 <strong>IoT Device Integration</strong> - Advanced{' '}
                <HireLogisticsLink to='https://www.nordicsemi.com/Products/Wireless/Low-power-cellular-IoT/What-is-NTN' external>
                  Nordic nRF9151
                </HireLogisticsLink>{' '}
                non-terrestrial networking for remote asset tracking
              </li>
              <li>
                🔐 <strong>Secure Data Exchange</strong> - Encrypted logistics data sharing with partner API gateways and comprehensive audit trails
              </li>
              <li>
                📊 <strong>Automated Compliance Reporting</strong> - Regulatory FMCSA submission systems with automated compliance monitoring
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Infrastructure & Integration</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🏗️ <strong>Enterprise Integration</strong> - Comprehensive integration with{' '}
                <HireLogisticsLink to='https://www.sap.com/products/scm.html' external>
                  SAP SCM
                </HireLogisticsLink>
                ,{' '}
                <HireLogisticsLink to='https://www.oracle.com/scm/' external>
                  Oracle SCM
                </HireLogisticsLink>
                , and{' '}
                <HireLogisticsLink to='https://www.microsoft.com/en-us/dynamics-365/products/supply-chain-management' external>
                  Microsoft Dynamics 365 SCM
                </HireLogisticsLink>
              </li>
              <li>
                ☁️ <strong>Cloud-Native Architecture</strong> - Multi-cloud <HireLogisticsLink to='/hire/architecture'>Kubernetes deployments</HireLogisticsLink> for scalable
                logistics platforms
              </li>
              <li>
                📊 <strong>Data Pipelines</strong> - <HireLogisticsLink to='/hire/backend'>Stream processing</HireLogisticsLink> for real-time logistics data with ETL workflows and{' '}
                <HireLogisticsLink to='/hire/databases'>data warehousing</HireLogisticsLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/logistics')({
  component: HireLogistics
})
