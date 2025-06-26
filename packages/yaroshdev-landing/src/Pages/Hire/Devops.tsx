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

export const DevOpsLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/devops' })

export const HireDevOps = () => {
  return (
    <ContentCard catchBoundary='devops' to='/hire' from='/hire/devops'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>DevOps</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Comprehensive DevOps solutions delivering automated infrastructure management, cloud-native deployments, and continuous integration pipelines. This approach combines
          Infrastructure as Code principles, container orchestration, and observability practices to build scalable, reliable, and secure development workflows that accelerate
          delivery while maintaining operational excellence.
        </Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/devops')({
  component: HireDevOps
})
