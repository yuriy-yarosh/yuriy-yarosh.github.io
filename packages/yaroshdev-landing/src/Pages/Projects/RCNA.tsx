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

const RCNALink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/projects/rcna' })

export const RCNA = () => {
  return (
    <ContentCard catchBoundary='rcna'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>RCNA</Heading>
        <Paragraph className='mt-4 md:mt-8'>
          <RCNALink className='ml-1' external to='https://github.com/yuriy-yarosh/architecture'>
            RCNA
          </RCNALink>{' '}
          is a{' '}
          <RCNALink className='ml-1' external to='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/'>
            Yuriy Yarosh
          </RCNALink>{' '}
          's reference Kubernetes distribution.
        </Paragraph>
        <Paragraph className='font-secondary-title text-xl md:text-2xl'>TBD</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/projects/rcna')({
  component: RCNA
})
