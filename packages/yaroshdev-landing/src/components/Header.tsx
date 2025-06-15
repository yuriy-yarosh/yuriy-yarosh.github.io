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

import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className='flex justify-between gap-2 bg-white p-2 text-black'>
      <nav className='flex flex-row'>
        <div className='px-2 font-bold'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
    </header>
  )
}
