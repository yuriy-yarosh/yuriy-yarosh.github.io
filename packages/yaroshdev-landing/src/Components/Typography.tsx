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

import { useAnimationState } from 'Landing/Hooks'
import { Link } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'

export const ContentLink = ({ className, to, from, children, external }: { className?: string; to: string; from: string; external?: boolean; children: React.ReactNode }) => {
  const { pauseAnimation } = useAnimationState()
  const mergedClassName = twMerge(
    `text-nowrap border-transparent border-b-1 text-accent transition duration-500 ease-in-out hover:animate-pulse hover:border-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)] `,
    className
  )

  return external ? (
    <a href={to} onClick={pauseAnimation} className={mergedClassName} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  ) : (
    // biome-ignore lint/suspicious/noExplicitAny: type safety is not a priority here
    <Link to={to} from={from as any} onClick={pauseAnimation} className={mergedClassName}>
      {children}
    </Link>
  )
}

export const Heading = ({ children, onClick, className }: { children: React.ReactNode[] | React.ReactNode; onClick?: () => void; className?: string }) => (
  <h3 className={twMerge('text-center font-extrabold font-secondary-title text-2xl lg:text-4xl', className)} onClick={onClick} onKeyDown={onClick}>
    {children}
  </h3>
)

export const Paragraph = ({ children, onClick, className }: { children: React.ReactNode[] | React.ReactNode; onClick?: () => void; className?: string }) => (
  <p className={twMerge('w-fit text-sm md:text-lg', className)} onClick={onClick} onKeyDown={onClick}>
    {children}
  </p>
)
