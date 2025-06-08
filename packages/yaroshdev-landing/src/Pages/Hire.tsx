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

export const Hire = () => {
  return (
    <CatchBoundary getResetKey={() => 'hire'} onCatch={(error) => console.error(error)}>
      <article className='flex flex-col items-center justify-between p-2'>
        <h3 className='flex-row text-xl'>Hire</h3>
      </article>
    </CatchBoundary>
  )
}

export const Route = createFileRoute('/hire')({
  component: Hire
})
