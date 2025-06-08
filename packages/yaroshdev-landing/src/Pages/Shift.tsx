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

export const HireShift = () => {
  return (
    <ContentCard backTitle='Shift' catchBoundary='shift' to='/' from='/shift'>
      <div className='space-y-2 px-4 md:px-12 lg:space-y-4'>
        <Heading>Shift</Heading>
        <Paragraph className='font-secondary-title text-xl md:text-4xl'>TBD</Paragraph>
        <Paragraph>We'll see when I'll be able to share more details...</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/shift')({
  component: HireShift
})
