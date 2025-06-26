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

const BlogLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/blog' })

type BlogPost = {
  id: string
  title: string
  href: string
  description: string
  lastUpdated?: Date
  status?: string
}

const Post = ({ id, title, href, description, lastUpdated, status }: BlogPost & { className?: string }) => (
  <li key={`event-${id}`} className='flex flex-col flex-wrap'>
    <Heading className='flex flex-row justify-between'>
      <BlogLink to={href} className='flex text-wrap font-semibold text-sm transition-colors hover:text-accent md:text-2xl lg:text-4xl'>
        {title}
      </BlogLink>
      <span className='flex text-sm md:text-md'>{lastUpdated ? lastUpdated.toLocaleDateString() : status || 'Draft'}</span>
    </Heading>

    <Paragraph className='flex flex-row pr-4'>{description}</Paragraph>
  </li>
)

const posts: BlogPost[] = [
  {
    id: '0',
    title: 'Engineering Career Frameworks',
    href: '/blog/career',
    description: "Yuriy's Opinionated Career Framework for software and hardware engineering."
  },
  {
    id: '1',
    title: 'AWS Reference Architecture',
    href: '/blog/aws',
    description: 'AWS Reference Architecture prescriptive guidance for cost-optimization, compliance, customer reachability and resilience.'
  },
  {
    id: '2',
    title: 'RCNA',
    href: '/blog/rcna',
    description: "Yuriy's Reference Cloud Native Kubernetes distribution. RCNA deployments at AWS, GCP and Azure."
  },
  {
    id: '3',
    title: 'Azure Reference Architecture',
    href: '/blog/azure',
    description: "Azure Reference Architecture, it's limitations and benefits in comparison to AWS and RCNA applicability."
  },
  {
    id: '4',
    title: 'GCP Reference Architecture',
    href: '/blog/gcp',
    description: 'Describing GCP reference architecture current limitations, in comparison with Azure and AWS, respectively.'
  },
  {
    id: '5',
    title: 'Solution Architecture',
    href: '/blog/architecture',
    description: 'Describing modern Event-driven Solution Architecture, for modern cloud-native applications.'
  },
  {
    id: '6',
    title: 'Solution Discovery',
    href: '/blog/discovery',
    description: 'Describing Solution Discovery process with use of Agentic Research, for modern cloud-native applications.'
  },
  {
    id: '7',
    title: 'Logistics',
    href: '/blog/logistics',
    description: 'My experience with Embedded Logistics devices, demand tracking and demand prediction, governance and compliance automation.'
  },
  {
    id: '8',
    title: 'Modern Control Theory',
    href: '/blog/modern-control-theory',
    status: 'Censored',
    description: 'Applied Modern Control Theory for various Industrial applications.'
  },
  {
    id: '9',
    title: 'Simulation-Based System Optimization',
    href: '/blog/simulation',
    status: 'Censored',
    description: 'Simulation intelligence in System Design, Modeling and Optimization.'
  },
  {
    id: '10',
    title: 'Self-Organizing Industrial Systems',
    href: '/blog/self-organizing-control',
    status: 'Censored',
    description: 'Applied Self-Organizing Systems in Industrial Automation.'
  },
  {
    id: '11',
    title: 'AI in 5G and 6G Networks',
    href: '/blog/ai-in-telecom',
    status: 'Censored',
    description: 'Applied AI in the current 5G Advanced and the next generation 6G Telecom applications.'
  },
  {
    id: '12',
    title: 'Advanced Telecom Technologies',
    href: '/blog/telecom',
    status: 'Censored',
    description: '4G-Evo 5G-Advanced Telecom Applications and next-generation network capabilities.'
  },
  {
    id: '13',
    title: 'ML Model Code Generation',
    href: '/blog/ml-kernels',
    description: 'Describing code-generation approaches for multi-kernel/multi-framework ML models development.'
  },
  {
    id: '14',
    title: 'Cross-Language Frontend APIs',
    href: '/blog/frontend-apis',
    description: "Various cross-language code-generating approaches for modern frontend RPC's and ergonomic API's development."
  },
  {
    id: '15',
    title: 'Additive Manufacturing Control Systems',
    href: '/blog/control-manufacturing',
    description: 'Applied Control Theory in Additive Manufacturing.'
  },
  {
    id: '16',
    title: 'Predictive Cloud Native Autoscaling',
    href: '/blog/autoscaling',
    description: 'Predictive Autoscaling with Torch Forecasting for modern cloud-native applications.'
  }
]

export const Blog = () => {
  return (
    <ContentCard backTitle='Blog' catchBoundary='blog' to='/' from='/blog'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Blog</Heading>
        <Paragraph className='mt-4 md:mt-8'>My research findings and thoughts on various topics.</Paragraph>
        <Paragraph>🛠️ You can expect updates and revisions to the content of these articles in the future.</Paragraph>
        <Paragraph>
          💬 Feel free to comment at my{' '}
          <BlogLink to='https://discord.gg/gwaynUfu' external>
            Discord 💻🎧
          </BlogLink>
          .
        </Paragraph>
        <nav className='my-8 flex h-max flex-col md:my-12'>
          <ul className='flex flex-col space-y-4 md:space-y-8 '>
            {posts.map((e) => (
              <Post key={e.id} {...e} />
            ))}
          </ul>
        </nav>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/')({
  component: Blog
})
