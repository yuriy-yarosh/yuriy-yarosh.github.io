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

import { Outlet, createRootRoute } from '@tanstack/react-router'
import { FooterLink, NavbarHomeLink, GithubLink, FacebookLink, LinkedInLink, TimeOfDay } from 'Landing/Components'

export const Route = createRootRoute({
  component: () => {
    const year = new Date().getFullYear()
    return (
      <div className='relative z-1 mx-auto flex min-h-screen w-full min-w-[240px] max-w-[1280px] flex-col p-6 font-display text-neutral transition-all duration-100'>
        <header className='flex flex-row items-center justify-between pb-2 lg:pb-4'>
          <NavbarHomeLink />

          <TimeOfDay />

          <div className='flex items-center justify-end gap-2 max-[360px]:hidden md:gap-4 xl:gap-6'>
            <GithubLink />
            <FacebookLink />
            <LinkedInLink />
          </div>
        </header>

        <div className='z-1 mx-auto w-full max-w-[1280px] flex-1'>
          <Outlet />
        </div>

        <footer className='flex w-full min-w-[240px] max-w-[1280px] flex-row items-center justify-between px-2 text-sm lg:px-6'>
          <p className='font-extralight text-[8px] md:text-[10px]'>
            <span>&copy; {year} Yuriy Yarosh</span>
            <br />
            <span>All rights reserved.</span>
          </p>

          <FooterLink to='/blog'>Blog</FooterLink>

          <nav className='flex items-center max-[360px]:hidden md:gap-2'>
            <FooterLink to='/about'>About</FooterLink>
            <FooterLink to='/contacts'>Contacts</FooterLink>
            <FooterLink to='/legal'>Legal</FooterLink>
          </nav>
        </footer>
      </div>
    )
  }
})
