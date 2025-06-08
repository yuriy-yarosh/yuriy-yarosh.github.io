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

export const FooterLink = ({ className, to, children }: { className?: string; to: string; children: React.ReactNode }) => {
  const { pauseAnimation } = useAnimationState()
  return (
    <Link
      to={to}
      onClick={pauseAnimation}
      className={`border-transparent border-b-1 p-2 text-xs transition duration-500 ease-in-out hover:animate-pulse hover:border-accent hover:border-b-1 hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)] md:text-sm [&.active]:border-accent [&.active]:border-b-2 [&.active]:text-accent ${className}`}>
      {children}
    </Link>
  )
}

export default FooterLink
