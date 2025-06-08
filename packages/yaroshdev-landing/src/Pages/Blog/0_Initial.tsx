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

export const InitialBlogPost = () => {
  return (
    <ContentCard backTitle='Blog' catchBoundary='blog' from='/blog/initial' to='/blog'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Initial</Heading>
        <Paragraph className='font-secondary-title text-xl md:text-2xl'>Initial stuff and plans...</Paragraph>

        <Paragraph>
          I'm planning to add a couple of articles regarding ongoing work with the Sumicare app and some other projects. Working on implementing a custom cost-aware terraform-based
          kubernetes cluster autoscaling, as a replacement for Karpenter.
        </Paragraph>

        <Paragraph>But there's just a lot that needs to be sorted out first.</Paragraph>

        <Paragraph>
          I'm also working on a new Sumicare app, but it's not ready yet, I'll have to ship OpenSource stack behind it first. It's kubernetes charts as terraform modules, as
          replacement for Bitnami helm charts, with opinionated distroless images. I hope I'll be able to deliver AWS SRA / GCP EF compatible reference solution.
        </Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/initial')({
  component: InitialBlogPost
})
