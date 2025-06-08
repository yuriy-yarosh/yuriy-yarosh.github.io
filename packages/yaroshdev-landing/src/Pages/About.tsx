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

import { createFileRoute, CatchBoundary } from '@tanstack/react-router'
import { NavigateBack } from 'Landing/Components'

export const About = () => {
  return (
    <CatchBoundary getResetKey={() => 'about'} onCatch={(error) => console.error(error)}>
      <article className='flex p-4 md:p-6 lg:p-8 xl:p-12'>
        <NavigateBack title='About' />
      </article>
    </CatchBoundary>
  )
}

export const Route = createFileRoute('/about')({
  component: About
})
