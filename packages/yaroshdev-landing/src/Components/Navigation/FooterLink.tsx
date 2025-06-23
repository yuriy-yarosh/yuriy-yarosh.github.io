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

import useAnimationState from 'Landing/Hooks/useAnimationState'
import { Link } from '@tanstack/react-router'

export const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const { pauseAnimation } = useAnimationState()
  return (
    <Link
      to={to}
      onClick={pauseAnimation}
      className='border-transparent border-b-1 p-2 text-xs transition-colors hover:border-slate-900 hover:border-b-1 md:text-sm [&.active]:border-slate-900 [&.active]:border-b-2 [&.active]:font-bold [&.active]:text-slate-800'>
      {children}
    </Link>
  )
}

export default FooterLink
