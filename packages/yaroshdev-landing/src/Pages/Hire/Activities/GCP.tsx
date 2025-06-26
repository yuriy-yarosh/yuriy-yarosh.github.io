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

export const HireGCP = () => {
  return (
    <ContentCard backTitle='GCP' catchBoundary='gcp'>
      <h1>GCP Consulting and Training</h1>
    </ContentCard>
  )
}

export const Route = createFileRoute('/gcp')({
  component: HireGCP
})
