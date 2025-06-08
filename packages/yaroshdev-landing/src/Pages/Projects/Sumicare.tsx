import { createFileRoute } from '@tanstack/react-router'
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

const SumicareLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/projects/sumicare' })

export const Sumicare = () => {
  return (
    <ContentCard catchBoundary='sumicare'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Sumicare</Heading>
        <Paragraph className='mt-4 md:mt-8'>
          <SumicareLink className='ml-1' external to='https://sumicare.io/'>
            Sumicare
          </SumicareLink>{' '}
          is a{' '}
          <SumicareLink className='ml-1' external to='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/'>
            Yuriy Yarosh
          </SumicareLink>{' '}
          Consumer Intelligence App, that detects and analyzes consumer commodity products packaging and detect anomalies in real-time.
        </Paragraph>

        <Paragraph>
          The main takeaway is that it introduces a new dimension to consumer product analysis with the introduction of advanced AI and computer vision techniques. Including, but
          not limited to:
        </Paragraph>
        <ul className='m-2 list-disc space-y-1 pl-6 text-sm md:m-4 md:space-y-2 md:pl-8 md:text-lg'>
          <li>Real-time detection and product classification using gaussian splats and advanced semantic compression algorithms</li>
          <li>On board distributed vector databases for fast and reliable feature storage</li>
          <li>Complete offline-first operation, for indoor use, no paywalls</li>
        </ul>
        <Paragraph className='font-secondary-title text-xl md:text-2xl'>TBD</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/projects/sumicare')({
  component: Sumicare
})
