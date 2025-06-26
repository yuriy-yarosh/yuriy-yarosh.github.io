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

import { FacebookLink, FooterLink, GithubLink, LinkedInLink, NavbarHomeLink, TimeOfDay } from 'Landing/Components'
import { useColors } from 'Landing/Hooks'
import { getTitleFor } from 'Landing/Titles'
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => {
    const routerState = useRouterState()
    const { colors } = useColors()

    document.title = getTitleFor(routerState.location.pathname)
    document.body.style.backgroundColor = colors.rgb.primary

    const year = new Date().getFullYear()
    return (
      <div className='relative z-1 mx-auto flex min-h-screen w-full min-w-[240px] max-w-[1920px] flex-col p-6 font-display text-content transition-all duration-100'>
        <header className='flex items-center justify-between pb-2 lg:pb-4'>
          <div className='flex flex-1 justify-start'>
            <NavbarHomeLink />
          </div>

          <div className='flex flex-1 justify-center max-[360px]:justify-end'>
            <TimeOfDay />
          </div>

          <div className='flex flex-1 justify-end gap-2 max-[360px]:hidden md:gap-4 xl:gap-6'>
            <GithubLink />
            <FacebookLink />
            <LinkedInLink />
          </div>
        </header>

        <div className='mx-auto w-full flex-1'>
          <Outlet />
        </div>

        <footer className='flex w-full text-sm'>
          <p className='flex flex-1 cursor-default flex-col justify-start font-extralight text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]'>
            <span>
              &copy; {year}{' '}
              <a href='mailto:yuriy@yarosh.dev' className='hover:animate-pulse hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)]'>
                Yuriy Yarosh
              </a>
            </span>
            <br />
            <span>All rights reserved.</span>
          </p>

          <div className='flex flex-1 justify-center max-[360px]:justify-end'>
            <FooterLink to='/blog'>Blog</FooterLink>
          </div>

          <nav className='flex flex-1 justify-end max-[360px]:hidden md:gap-2'>
            <FooterLink to='/about'>About</FooterLink>
            <FooterLink to='/contacts'>Contacts</FooterLink>
            <FooterLink to='/legal'>Legal</FooterLink>
          </nav>
        </footer>
      </div>
    )
  }
})
