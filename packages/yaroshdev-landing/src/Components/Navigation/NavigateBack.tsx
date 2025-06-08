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

import { useRouter } from '@tanstack/react-router'
import { useAnimationState } from 'Landing/Hooks'
import { useEffect } from 'react'

const ArrowIcon = ({ title }: { title: string }) => (
  <svg
    className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12'
    viewBox='2 5 16 14'
    fill='none'
    stroke='currentColor'
    strokeWidth='0.5'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <title>{title}</title>
    <path d='m9 17-5-5 5-5' className='delay-600 group-hover:animate-pulse' />
    <path d='m11 17-5-5 5-5' className='delay-400 group-hover:animate-pulse' />
    <path d='m13 17-5-5 5-5' className='delay-200 group-hover:animate-pulse' />
    <path d='m15 17-5-5 5-5' className='group-hover:animate-pulse' />
  </svg>
)

// Resuming animations on home page
export const NavigateBack = ({ title, className }: { title: string; className?: string }) => {
  const router = useRouter()
  const { resumeAnimation } = useAnimationState()

  useEffect(() => {
    const unsubscribe = router.subscribe('onLoad', ({ toLocation }) => {
      if (toLocation.pathname === '/' || toLocation.pathname === '') {
        resumeAnimation()
      }
    })

    return unsubscribe
  }, [router, resumeAnimation])

  return (
    <button
      type='button'
      onClick={() => {
        router.history.back()
      }}
      className={`flex text-secondary-accent transition delay-100 duration-300 ease-in-out hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)] ${className}`}>
      {title && (
        <h2 className='group relative flex items-center font-title text-md md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl'>
          <span className='-left-4 md:-left-6 lg:-left-8 xl:-left-10 2xl:-left-12 absolute'>
            <ArrowIcon title={title} />
          </span>
          {title}
        </h2>
      )}
    </button>
  )
}

export default NavigateBack
