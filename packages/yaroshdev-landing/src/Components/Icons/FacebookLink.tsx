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

export const FacebookIcon = ({ displayHoverOutline = false }) => (
  <svg className='h-7 w-7' viewBox='-4 -4 32 32' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <title>Yuriy&apos;s Facebook</title>
    {displayHoverOutline && <circle cx='12' cy='12' r='14' fill='var(--color-primary)' stroke='currentColor' strokeWidth='1' className='opacity-0 group-hover:opacity-100' />}
    {!displayHoverOutline && <circle cx='12' cy='12' r='12' fill='var(--color-primary)' stroke='none' strokeWidth='1' className='opacity-0 group-hover:opacity-100' />}
    <path d='M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 5.998 4.388 10.972 10.125 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.953.93-1.953 1.887V12h3.328l-.532 3.542h-2.796v8.385C19.612 23.045 24 18.071 24 12.073z' />
  </svg>
)

export const FacebookLink = () => (
  <a
    href='https://www.facebook.com/profile.php?id=100006871351724'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Yuriy&apos;s Facebook'
    className='group hover:-translate-y-[1px] transition-all hover:animate-pulse hover:text-accent hover:opacity-99 hover:drop-shadow-[0_1px_2px_var(--color-accent)]'>
    <FacebookIcon />
  </a>
)

export default FacebookLink
