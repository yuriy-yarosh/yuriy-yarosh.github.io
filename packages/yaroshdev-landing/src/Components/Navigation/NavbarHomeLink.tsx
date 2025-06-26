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
import { Link, useRouterState } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'

export const NavbarHomeLink = ({ className }: { className?: string }) => {
  const { resumeAnimation } = useAnimationState()
  const routerState = useRouterState()
  const showUnderLine = !(routerState.location.pathname === '/' || routerState.location.pathname === '')

  return (
    <Link
      to='/'
      onClick={() => {
        resumeAnimation()
      }}
      className={twMerge(
        `border-transparent border-b-3 transition duration-500 ease-in-out hover:animate-pulse ${showUnderLine && 'hover:border-accent'} hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)]`,
        className
      )}>
      <h1 className='font-title text-xl md:text-nowrap md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Yuriy Yarosh</h1>
    </Link>
  )
}

export default NavbarHomeLink
