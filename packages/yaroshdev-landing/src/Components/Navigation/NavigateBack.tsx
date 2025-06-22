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
  <svg className='h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
    <title>{title}</title>
    <path d='m13 17-5-5 5-5' className='animate-pulse delay-900' />
    <path d='m15 17-5-5 5-5' className='animate-pulse delay-600' />
    <path d='m17 17-5-5 5-5' className='animate-pulse delay-300' />
    <path d='m19 17-5-5 5-5' className='animate-pulse' />
  </svg>
)

// Resuming animations on home page
export const NavigateBack = ({ title }: { title: string }) => {
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
      className='flex transition-colors hover:text-slate-400'>
      {title && (
        <h2 className='flex items-center hover:animate-pulse md:text-xl lg:text-2xl'>
          <ArrowIcon title={title} />
          {title}
        </h2>
      )}
    </button>
  )
}

export default NavigateBack
