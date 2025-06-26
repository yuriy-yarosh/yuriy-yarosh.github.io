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

export const LogisticsBlogPost = () => {
  return (
    <ContentCard backTitle='Blog' catchBoundary='blog' to='/blog' from='/blog/logistics'>
      <Heading>Logistics</Heading>
      <Paragraph className='font-secondary-title text-xl md:text-2xl'>Logistics draft</Paragraph>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/logistics')({
  component: LogisticsBlogPost
})
