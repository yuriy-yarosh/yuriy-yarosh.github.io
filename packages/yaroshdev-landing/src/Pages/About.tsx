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
    <ContentCard backTitle='About' catchBoundary='about'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>About</Heading>
        <Paragraph>
          This is a personal website of{' '}
          <AboutLink to='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/' className='ml-1' external>
            Yuriy Yarosh
          </AboutLink>
        </Paragraph>
        <Paragraph>
          I'm a {age > 80 ? 'already dead' : `${age}-year-old`} software engineer and solopreneur with over {xp} years of experience in both software and hardware development. My
          work is primarily focused on building resilient, high-performance applications that fully leverage available hardware capabilities.
        </Paragraph>

        <Paragraph>
          My personal interests include travel and hiking, artisan cutlery collecting, Hi-Fi audio gear, cost-efficient in-house fabrication, photography, guided munitions and
          computational ballistics, as well as applied mathematics, physics, and computer science.
        </Paragraph>

        <Paragraph>I do not engage in any collaborations with Russian-affiliated entities under any circumstances.</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/about')({
  component: About
})
