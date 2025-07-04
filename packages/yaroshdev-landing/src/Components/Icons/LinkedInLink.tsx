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

export const LinkedInIcon = ({ displayHoverOutline = false }) => (
  <svg className='h-7 w-7 lg:h-9 lg:w-9 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12' viewBox='-4 -4 32 32' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <title>Yuriy&apos;s LinkedIn</title>
    {displayHoverOutline && (
      <rect x='-2' y='-2' width='28' height='28' rx='4' ry='4' fill='var(--color-primary)' stroke='currentColor' strokeWidth='1' className='opacity-0 group-hover:opacity-100' />
    )}
    {!displayHoverOutline && (
      <rect x='0' y='0' width='24' height='24' rx='4' ry='4' fill='var(--color-primary)' stroke='none' strokeWidth='1' className='opacity-0 group-hover:opacity-100' />
    )}
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.636-1.852 3.366-1.852 3.595 0 4.262 2.366 4.262 5.444v6.299zM5.337 7.433A2.062 2.062 0 013.28 5.37C3.28 4.271 4.179 3.37 5.278 3.37s2 .901 2 2a2.062 2.062 0 01-1.941 2.062zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.793 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.225 0z' />
  </svg>
)

export const LinkedInLink = () => (
  <a
    href='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Yuriy&apos;s LinkedIn'
    className='group hover:-translate-y-[1px] transition-all hover:animate-pulse hover:text-accent hover:opacity-99 hover:drop-shadow-[0_1px_2px_var(--color-accent)]'>
    <LinkedInIcon />
  </a>
)

export default LinkedInLink
