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

import { ContentCard } from 'Landing/Components'
import { createFileRoute } from '@tanstack/react-router'

export const AITelecomBlogPost = () => {
  return (
    <ContentCard backTitle='AI in Telecom' catchBoundary='ai-in-telecom'>
      <h1>AI in Telecom</h1>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/ai-in-telecom')({
  component: AITelecomBlogPost
})
