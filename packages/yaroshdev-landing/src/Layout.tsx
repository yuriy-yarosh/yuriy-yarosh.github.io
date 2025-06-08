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

import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className='border-transparent border-b-1 p-2 font-["Monoton"] text-xs hover:border-slate-900 hover:border-b-1 md:text-sm [&.active]:border-slate-900 [&.active]:border-b-2 [&.active]:font-bold [&.active]:text-slate-800'>
      {children}
    </Link>
  )
}

const Github = () => (
  <a href='https://github.com/yuriy-yarosh' target='_blank' rel='noopener noreferrer' aria-label='GitHub' title='GitHub' className='hover:text-slate-800'>
    <svg className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <title>Github icon</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.801 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.776.418-1.304.762-1.604-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404 11.5 11.5 0 013.003.404c2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.902-.015 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.295 24 12 24 5.37 18.627 0 12 0z'
      />
    </svg>
  </a>
)

const Facebook = () => (
  <a href='https://www.facebook.com/profile.php?id=100006871351724' target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='hover:text-slate-800'>
    <svg className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <title>Facebook icon</title>
      <path d='M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 5.998 4.388 10.972 10.125 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.953.93-1.953 1.887V12h3.328l-.532 3.542h-2.796v8.385C19.612 23.045 24 18.071 24 12.073z' />
    </svg>
  </a>
)

const LinkedIn = () => (
  <a href='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:hover:text-slate-800'>
    <svg className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <title>LinkedIn icon</title>
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.636-1.852 3.366-1.852 3.595 0 4.262 2.366 4.262 5.444v6.299zM5.337 7.433A2.062 2.062 0 013.28 5.37C3.28 4.271 4.179 3.37 5.278 3.37s2 .901 2 2a2.062 2.062 0 01-1.941 2.062zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.793 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.225 0z' />
    </svg>
  </a>
)

export const Route = createRootRoute({
  component: () => {
    const year = new Date().getFullYear()
    return (
      <div className='flex min-h-screen min-w-[240px] flex-col text-slate-600'>
        <header className='flex flex-row items-center justify-between p-6'>
          <Link to='/' className=' border-transparent border-b-3 hover:border-slate-900 hover:border-b-3 hover:text-slate-800 [&.active]:text-slate-800'>
            <h1 className='text-xl md:text-2xl lg:text-5xl'>Yuriy Yarosh</h1>
          </Link>

          <div className='flex items-center justify-end gap-2 max-[360px]:hidden md:gap-4'>
            <Github />
            <Facebook />
            <LinkedIn />
          </div>
        </header>

        <div className='z-1 flex-1 p-6'>
          <Outlet />
        </div>

        <footer className='mt-auto flex min-w-[240px] flex-row items-center justify-between p-4 text-sm'>
          <p className='p-2 font-extralight text-[8px] md:text-[10px]'>
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
