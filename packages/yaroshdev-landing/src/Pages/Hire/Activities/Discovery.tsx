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

import { ContentCard, Heading, Paragraph } from 'Landing/Components'
import { createFileRoute } from '@tanstack/react-router'

export const HireDiscovery = () => {
  return (
    <ContentCard catchBoundary='discovery' to='/hire' from='/hire/discovery'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Discovery</Heading>
        <Paragraph className='font-secondary-title text-xl md:text-4xl'>TBD</Paragraph>
        <Paragraph>I&#39;ll document this after addressing the legal details.</Paragraph>
        <Paragraph>Focus on providing automated AI-driven solution discovery during pre-sales.</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/discovery')({
  component: HireDiscovery
})
