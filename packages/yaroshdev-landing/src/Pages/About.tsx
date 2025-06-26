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

const AboutLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/about' })

export const About = () => {
  const yearNow = new Date().getFullYear()
  const age = yearNow - 1991
  const xp = yearNow - 2008

  return (
    <ContentCard backTitle='About' catchBoundary='about' to='/' from='/about'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>About</Heading>
        <Paragraph className='mt-4 md:mt-8'>
          👨‍💻 This is a personal website of{' '}
          <AboutLink to='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/' className='ml-1' external>
            Yuriy Yarosh
          </AboutLink>
        </Paragraph>
        <Paragraph>
          I'm a {age > 80 ? 'already dead' : `${age}-year-old`} software engineer and solopreneur with over {xp} years of hands-on experience in both software and hardware
          development. My work centers around building resilient, high-performance systems ⚙️⚡.
        </Paragraph>

        <Paragraph className='mt-2 md:mt-4'>My personal interests include:</Paragraph>
        <ul className='mt-2 space-y-2 md:mt-4'>
          <li className='ml-4'>🌍 Travel and hiking</li>
          <li className='ml-4'>🔪 Artisan Cutlery Collecting</li>
          <li className='ml-4'>✒️ Fountain Pens</li>
          <li className='ml-4'>🎧 Hi-Fi Audio Gear</li>
          <li className='ml-4'>🛠️ Cost-efficient In-House Fabrication</li>
          <li className='ml-4'>📸 Photography and Astrophotography</li>
          <li className='ml-4'>🎯 Guided munition design and computational ballistics</li>
          <li className='ml-4'>🧮 Applied Mathematics and Physics</li>
          <li className='ml-4'>💻 Computer Science</li>
          <li className='ml-4'>🧠 Psychology</li>
        </ul>

        <div className='mt-6 md:mt-8'>
          <Paragraph>Terminating engineers for raising valid State Security and Corruption concerns is dysfunctional criminal negligence 🧹.</Paragraph>
          <Paragraph>Covering up system failures kills people.</Paragraph>
        </div>
        <Paragraph className='mt-6 mb-4 md:mb-8'>I do not engage in any collaborations with russian-affiliated entities under any circumstances.</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/about')({
  component: About
})
