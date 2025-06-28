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

export const MLKernelsBlogPost = () => {
  return (
    <ContentCard backTitle='ML Kernels' catchBoundary='ml-kernels'>
      <h1>ML Kernels</h1>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/ml-kernels')({
  component: MLKernelsBlogPost
})
