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

const FinTechLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/fintech' })

export const HireFinTech = () => {
  return (
    <ContentCard catchBoundary='fintech' to='/hire' from='/hire/fintech'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>FinTech</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          While not my primary specialization, I have extensive experience with FPGA-accelerated trading systems, payment processing infrastructure, and related regulatory
          compliance.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Payment Systems & Processing</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💳 <strong>Payment Gateways and Accounting Integration</strong> with{' '}
                <FinTechLink to='https://stripe.com/' external>
                  Stripe
                </FinTechLink>
                ,{' '}
                <FinTechLink to='https://www.paypal.com/developer/' external>
                  PayPal
                </FinTechLink>{' '}
                with{' '}
                <FinTechLink to='https://www.quickbooks.com/' external>
                  QuickBooks
                </FinTechLink>
                ,{' '}
                <FinTechLink to='https://www.myob.com/' external>
                  MyOB
                </FinTechLink>
                ,{' '}
                <FinTechLink to='https://www.chargebee.com/' external>
                  ChargeBee
                </FinTechLink>{' '}
                etc.
              </li>
              <li>
                🌍 <strong>Cross-Border Payments</strong> with{' '}
                <FinTechLink to='https://www.swift.com/' external>
                  SWIFT
                </FinTechLink>{' '}
                integration,{' '}
                <FinTechLink to='https://www.iso20022.org/' external>
                  ISO 20022
                </FinTechLink>{' '}
                messaging, and multi-currency settlement systems
              </li>
              <li>
                ⚡ <strong>Real-Time Payments</strong> with{' '}
                <FinTechLink to='https://www.federalreserve.gov/paymentsystems/fednow_about.htm' external>
                  FedNow
                </FinTechLink>{' '}
                network integration
              </li>
              <li>
                🔒 <strong>PCI DSS</strong> compliance, tokenization, and end-to-end encryption for sensitive payment data
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Trading & Capital Markets</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📈 <strong>Algorithmic Trading</strong> with custom FPGA execution engines, related{' '}
                <FinTechLink to='https://www.fixtrading.org/' external>
                  FIX Protocol
                </FinTechLink>{' '}
                implementation, and realtime on-chip market data processing
              </li>
              <li>
                📊 <strong>Risk Management Systems</strong> with real-time portfolio monitoring, VaR calculations, and stress testing frameworks
              </li>
              <li>
                💹 <strong>Market Data Integration</strong> with{' '}
                <FinTechLink to='https://www.refinitiv.com' external>
                  Refinitiv
                </FinTechLink>
                ,{' '}
                <FinTechLink to='https://www.bloomberg.com' external>
                  Bloomberg
                </FinTechLink>
                , and{' '}
                <FinTechLink to='https://polygon.io/' external>
                  Polygon
                </FinTechLink>{' '}
                feeds
              </li>
              <li>
                🔄 <strong>Order Management</strong> Systems (OMS) with smart order routing and execution analytics
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Blockchain & Cryptocurrency</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ⛓️ <strong>Smart Contracts</strong> with{' '}
                <FinTechLink to='https://soliditylang.org/' external>
                  Solidity
                </FinTechLink>{' '}
                development,{' '}
                <FinTechLink to='https://hardhat.org/' external>
                  Hardhat
                </FinTechLink>{' '}
                testing framework, and{' '}
                <FinTechLink to='https://www.openzeppelin.com/' external>
                  OpenZeppelin
                </FinTechLink>{' '}
                security patterns, Scala contracts with{' '}
                <FinTechLink to='https://epfl-lara.github.io/stainless/intro.html' external>
                  Stainless
                </FinTechLink>
              </li>
              <li>
                🔗 <strong>DeFi Protocols</strong> including AMMs, yield farming, liquidity mining, and cross-chain bridge implementations
              </li>
              <li>
                💰 <strong>Cryptocurrency Exchanges</strong> with order books, matching engines, and{' '}
                <FinTechLink to='https://www.chainalysis.com/' external>
                  Chainalysis
                </FinTechLink>{' '}
                compliance integration
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Regulatory & Compliance</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📜 <strong>KYB/KYC Systems</strong> with custom identity verification,{' '}
                <FinTechLink to='https://www.refinitiv.com/en/products/world-check-kyc-screening' external>
                  World-Check
                </FinTechLink>{' '}
                screening, and suspicious activity reporting
              </li>
              <li>
                📋 <strong>Regulatory Reporting</strong> with{' '}
                <FinTechLink to='https://www.cftc.gov/' external>
                  CFTC
                </FinTechLink>
                ,{' '}
                <FinTechLink to='https://www.sec.gov/' external>
                  SEC
                </FinTechLink>
                , and{' '}
                <FinTechLink to='https://www.fdic.gov/' external>
                  FDIC
                </FinTechLink>{' '}
                compliance automation
              </li>
              <li>
                🔐 <strong>Data Privacy</strong> with{' '}
                <FinTechLink to='https://gdpr.eu/' external>
                  GDPR
                </FinTechLink>
                ,{' '}
                <FinTechLink to='https://oag.ca.gov/privacy/ccpa' external>
                  CCPA
                </FinTechLink>
                , and{' '}
                <FinTechLink to='https://www.gesetze-im-internet.de/englisch_bdsg/englisch_bdsg.pdf' external>
                  BDSG
                </FinTechLink>{' '}
                compliance frameworks (alongside ISO27701, ISO29100, ISO31000 standards)
              </li>
              <li>
                📊 <strong>Automated audit</strong> for cloud-native FinTech applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/fintech')({
  component: HireFinTech
})
