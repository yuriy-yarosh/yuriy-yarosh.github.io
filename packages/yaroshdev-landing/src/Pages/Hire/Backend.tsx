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

export const HireBackend = () => {
  return (
    <ContentCard catchBoundary='backend'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Backend</Heading>
        <Paragraph>Backend practices:</Paragraph>
        <ul className='space-y-2'>
          <li>Microservices architecture</li>
          <li>Containerization with Docker</li>
          <li>CI/CD pipelines</li>
          <li>Monitoring and logging</li>
          <li>Database design and optimization</li>
          <li>Security</li>
        </ul>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/backend')({
  component: HireBackend
})
