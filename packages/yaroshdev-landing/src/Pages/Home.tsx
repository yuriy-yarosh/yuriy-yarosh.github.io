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
import { CatchBoundary, createFileRoute, Link } from '@tanstack/react-router'

export const HomeLink = ({ title, to }: { title: string; to: string }) => {
  const { pauseAnimation } = useAnimationState()

  return (
    <Link
      to={to}
      onClick={pauseAnimation}
      className={
        'flex w-fit items-center border-transparent border-b-3 transition duration-300 ease-in-out hover:animate-pulse hover:border-accent hover:border-b-3 hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)]'
      }>
      <h3 className='text-nowrap font-title text-md text-neutral md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl'>{title}</h3>
    </Link>
  )
}

export const Home = () => {
  return (
    <CatchBoundary getResetKey={() => 'home'} onCatch={(error) => console.error(error)}>
      <nav className='flex flex-row justify-center gap-6 p-4 max-[360px]:gap-3 md:gap-5 md:p-6 lg:flex-col lg:justify-start lg:p-8 xl:p-12'>
        <HomeLink title='Blog' to='/blog' />
        <HomeLink title='Projects' to='/projects' />
        <HomeLink title='For Hire' to='/hire' />
      </nav>
    </CatchBoundary>
  )
}

export const Route = createFileRoute('/')({
  component: Home
})
