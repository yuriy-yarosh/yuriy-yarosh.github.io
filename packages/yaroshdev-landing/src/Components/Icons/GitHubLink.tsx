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

export const GitHubIcon = ({ displayHoverOutline = false }) => (
  <svg className='h-7 w-7 lg:h-9 lg:w-9 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12' viewBox='-4 -4 32 32' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <title>Yuriy&apos;s GitHub</title>
    {displayHoverOutline && <circle cx='12' cy='12' r='14' fill='var(--color-primary)' stroke='currentColor' strokeWidth='1' className='opacity-0 group-hover:opacity-100' />}
    {!displayHoverOutline && <circle cx='12' cy='12' r='12' fill='var(--color-primary)' stroke='none' strokeWidth='1' className='opacity-0 group-hover:opacity-100' />}
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.801 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.776.418-1.304.762-1.604-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404 11.5 11.5 0 013.003.404c2.291-1.552 3.297-1.23 3.297-1.30.655 1.649.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.902-.015 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.295 24 12 24 5.37 18.627 0 12 0z'
    />
  </svg>
)

export const GithubLink = () => (
  <a
    href='https://github.com/yuriy-yarosh'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Yuriy&apos;s GitHub'
    title='GitHub'
    className='group hover:-translate-y-[1px] transition-all hover:animate-pulse hover:text-accent hover:opacity-99 hover:drop-shadow-[0_1px_2px_var(--color-accent)]'>
    <GitHubIcon />
  </a>
)

export default GithubLink
