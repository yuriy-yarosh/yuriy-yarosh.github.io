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

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
    </div>
  )
}
