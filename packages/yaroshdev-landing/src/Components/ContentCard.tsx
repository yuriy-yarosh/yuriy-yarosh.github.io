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

import { NavigateBack } from 'Landing/Components'
import { useColors } from 'Landing/Hooks'
import { CatchBoundary } from '@tanstack/react-router'
import type React from 'react'
import { useEffect, useState } from 'react'

export const ContentCard = ({
  backTitle = 'Back',
  catchBoundary = 'content',
  to,
  from,
  children
}: {
  backTitle?: string
  catchBoundary: string
  to?: string
  from?: string
  children: React.ReactNode[] | React.ReactNode
}) => {
  const { isDark } = useColors()
  const [visible, setVisible] = useState(false)

  const transitionDelay = 300

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, transitionDelay)

    return () => clearTimeout(timer)
  }, [])
  //

  return (
    <CatchBoundary getResetKey={() => catchBoundary} onCatch={(error) => console.error(error)}>
      <article className='flex min-h-[calc(100vh-190px)] cursor-default flex-col p-2 sm:p-4 md:p-6 lg:p-8 xl:flex-row xl:p-12 '>
        <div className='flex h-full lg:pr-4 2xl:pr-8'>
          <NavigateBack title={backTitle} to={to || ''} from={from || ''} />
        </div>
        <div
          className={`xl:-mt-5 mt-8 flex min-h-[calc(100vh-250px)] w-full flex-col rounded-3xl bg-card-background p-2 py-6 text-content transition-opacity duration-1000 md:min-h-[calc(100vh-280px)] md:p-4 lg:min-h-[calc(100vh-280px)] lg:p-8 lg:py-12 xl:w-[calc(8/12*100%+16px)] 2xl:w-[calc(9/12*100%-50px)] ${
            isDark ? 'backdrop-blur-2xl' : 'backdrop-blur-xl'
          } ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      </article>
    </CatchBoundary>
  )
}

export default ContentCard
