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
import useAnimationState from 'Landing/Hooks/useAnimationState'

export const NavbarHomeLink = () => {
  const { resumeAnimation } = useAnimationState()
  return (
    <Link
      to='/'
      onClick={resumeAnimation}
      className=' border-transparent border-b-3 transition-colors hover:border-slate-900 hover:border-b-3 hover:text-slate-800 [&.active]:text-slate-800'>
      <h1 className='text-xl md:text-2xl lg:text-5xl'>Yuriy Yarosh</h1>
    </Link>
  )
}

export default NavbarHomeLink
