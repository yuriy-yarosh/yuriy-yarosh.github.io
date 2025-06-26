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

const EdTechLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/edtech' })

export const HireEdTech = () => {
  return (
    <ContentCard catchBoundary='edtech' to='/hire' from='/hire/edtech'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Educational Technology Solutions</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Comprehensive educational technology solutions delivering scalable learning platforms, intelligent assessment systems, and data-driven educational insights. These
          solutions encompass learning management systems, adaptive testing platforms, and AI-powered educational tools designed to enhance learning outcomes, streamline
          administrative processes, and ensure regulatory compliance with educational standards.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Learning Management Systems</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📚 <strong>LMS Platforms</strong> - Agent-driven career frameworks with{' '}
                <EdTechLink to='https://www.canvaslms.com/' external>
                  Canvas LMS
                </EdTechLink>{' '}
                interoperability, custom course scoring tools, and automated staffing processes
              </li>
              <li>
                📖 <strong>Content Management</strong> - Interactive learning experiences with{' '}
                <EdTechLink to='https://xapi.com/' external>
                  xAPI (Tin Can API)
                </EdTechLink>{' '}
                support, multimedia content delivery, and automated content curation
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Assessment & Analytics</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📊 <strong>Learning Analytics</strong> - Progress tracking and predictive analytics with intervention recommendations and real-time performance insights
              </li>
              <li>
                🧠 <strong>Adaptive Testing</strong> - Machine learning-driven question selection with{' '}
                <EdTechLink to='https://en.wikipedia.org/wiki/Item_response_theory' external>
                  Item Response Theory (IRT)
                </EdTechLink>{' '}
                algorithms and personalized difficulty adjustment
              </li>
              <li>
                🔍 <strong>Plagiarism Detection</strong> - Text similarity algorithms with document fingerprinting and integration with proofreading services like{' '}
                <EdTechLink to='https://www.turnitin.com/' external>
                  Turnitin
                </EdTechLink>{' '}
                for academic integrity enforcement
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>AI-Powered Education</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>Intelligent Tutoring Systems</strong> - AI-driven personalized learning with natural language processing and adaptive curriculum delivery
              </li>
              <li>
                💬 <strong>Educational Chatbots</strong> - 24/7 support with{' '}
                <EdTechLink to='https://dialogflow.cloud.google.com/' external>
                  Dialogflow
                </EdTechLink>{' '}
                and{' '}
                <EdTechLink to='https://azure.microsoft.com/en-us/products/ai-services/ai-bot-service' external>
                  Azure Bot Service
                </EdTechLink>{' '}
                for automated assistance
              </li>
              <li>
                📝 <strong>Automated Essay Scoring</strong> - Natural language processing for essay evaluation with rubric-based scoring and feedback generation
              </li>
              <li>
                🔍 <strong>Learning Path Optimization</strong> - Machine learning algorithms for personalized curriculum recommendations and skill gap analysis
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Compliance & Accessibility</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ⚖️ <strong>Educational Compliance</strong> - Adherence to{' '}
                <EdTechLink to='https://www2.ed.gov/policy/gen/guid/fpco/ferpa/' external>
                  FERPA
                </EdTechLink>{' '}
                and{' '}
                <EdTechLink to='https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa' external>
                  COPPA
                </EdTechLink>{' '}
                regulations for data protection
              </li>
              <li>
                ♿ <strong>Accessibility Standards</strong> - Implementation of{' '}
                <EdTechLink to='https://www.w3.org/WAI/WCAG21/quickref/' external>
                  WCAG 2.1 AA
                </EdTechLink>{' '}
                standards and{' '}
                <EdTechLink to='https://www.section508.gov/' external>
                  Section 508
                </EdTechLink>{' '}
                compliance for inclusive education
              </li>
              <li>
                🔒 <strong>Data Privacy & Security</strong> - Data encryption, secure authentication, and privacy-by-design principles
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Infrastructure & Integration</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ☁️ <strong>Cloud-Native Architecture</strong> - Scalable deployment with{' '}
                <EdTechLink to='/hire/aws' external={false}>
                  AWS
                </EdTechLink>
                ,{' '}
                <EdTechLink to='/hire/azure' external={false}>
                  Azure
                </EdTechLink>
                , and{' '}
                <EdTechLink to='/hire/gcp' external={false}>
                  GCP
                </EdTechLink>{' '}
                for global educational platform delivery
              </li>
              <li>
                📊 <strong>Analytics & Reporting</strong> - Comprehensive educational data pipelines with real-time dashboards and institutional research capabilities
              </li>
              <li>
                🛡️ <strong>Security & Monitoring</strong> - Advanced threat detection, compliance monitoring, and educational data governance frameworks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/edtech')({
  component: HireEdTech
})
