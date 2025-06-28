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

export const Blog = () => {
  return (
    <ContentCard backTitle='Blog' catchBoundary='blog'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Blog</Heading>
        <Paragraph>My research findings and thoughts on various topics.</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/')({
  component: Blog
})
