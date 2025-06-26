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

import { ContentCard } from 'Landing/Components'
import useAnimationState from 'Landing/Hooks/useAnimationState'
import { createFileRoute, Link } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'

export const HiringLink = ({ className, to, children }: { className?: string; to: string; children: React.ReactNode }) => {
  const { pauseAnimation } = useAnimationState()
  return (
    <Link
      to={to}
      onClick={pauseAnimation}
      className={twMerge(
        `text-nowrap border-transparent border-b-1 text-accent transition duration-500 ease-in-out hover:animate-pulse hover:border-accent hover:border-b-1 hover:drop-shadow-[0_1px_2px_var(--color-accent)] `,
        className
      )}>
      {children}
    </Link>
  )
}

// text-xl lg:text-2xl

export const Paragraph = ({ children }: { children: React.ReactNode[] | React.ReactNode }) => <p className='text-sm md:text-lg'>{children}</p>

export const Hire = () => {
  const yearNow = new Date().getFullYear()
  const age = yearNow - 1991
  const xp = yearNow - 2008

  return (
    <ContentCard backTitle='Hire' catchBoundary='hire'>
      <div className='space-y-4 px-4 md:px-12 lg:space-y-8'>
        <h3 className='text-center font-display text-2xl lg:text-4xl'>For Hire</h3>
        <span className='flex flex-col gap-2 text-xl md:gap-4 lg:text-2xl'>
          <div>
            <Paragraph>
              I'm <span className='text-accent'>{age} y.o.</span> Ukrainian Engineer and Solopreneur with over <span className='text-accent'>{xp} years</span> of software and
              hardware development experience.
            </Paragraph>
            <Paragraph>Primarily specializing in Highload applications development, Database Engines, Programming Languages and Compilers design.</Paragraph>
            <Paragraph>
              Pioneered the concept of{' '}
              <HiringLink to='/shift' className='text-sm md:text-lg'>
                meta-iconicity
              </HiringLink>{' '}
              for modern programming languages.
            </Paragraph>
          </div>
          <span className='text-sm md:text-lg'>I do</span>
          <ul className='space-y-2 pl-2 md:space-y-3 md:pl-6'>
            <li>
              <HiringLink to='/frontend'>Frontend</HiringLink> <span className='text-lg text-secondary-accent'>(duh)</span>
            </li>
            <li>
              <HiringLink to='/backend'>Backend</HiringLink>
            </li>
            <li>
              <HiringLink to='/devops'>DevOps</HiringLink>
            </li>
            <li>
              <HiringLink to='/ml'>Machine Learning</HiringLink>
            </li>
            <li>
              <HiringLink to='/highload'>High-load</HiringLink>
            </li>
            <li>
              <HiringLink to='/embedded'>Embedded</HiringLink>
              <span className='text-lg text-secondary-accent'> and </span>
              <HiringLink to='/drivers'>Device Drivers</HiringLink>
            </li>
            <li>
              <HiringLink to='/simulation'>Simulation Intelligence</HiringLink>
            </li>
          </ul>
          <div className='flex flex-wrap items-center text-sm md:text-lg'>
            <span className='flex flex-wrap'>Across various domains: </span>
            <ul className='flex flex-wrap'>
              <li className='flex items-center pl-1'>
                <HiringLink to='/logistics'>Logistics</HiringLink>
                <span>,</span>
              </li>
              <li className='flex items-center pl-1'>
                <HiringLink to='/telecom'>Telecommunications</HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                <HiringLink to='/fintech'>Fin-Tech</HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                <HiringLink to='/edtech'>Ed-Tech</HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                <HiringLink to='/miltech'>Mil-Tech</HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                <HiringLink to='/security'>Security</HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                <HiringLink to='/research'>Private R&D</HiringLink>
                <span>.</span>
              </li>
            </ul>
          </div>

          <Paragraph>
            Building <HiringLink to='/career'>career frameworks</HiringLink>, participating in <HiringLink to='/sales'>pre-sales</HiringLink>, performing{' '}
            <HiringLink to='/discovery'>solution discovery</HiringLink> and <HiringLink to='/architecture'>solution architecture</HiringLink>.
          </Paragraph>
          <Paragraph>
            Training personnel in <HiringLink to='/aws'>AWS</HiringLink>, <HiringLink to='/gcp'>GCP</HiringLink>, <HiringLink to='/azure'>Azure</HiringLink>,
            <HiringLink to='/kubernetes'>Kubernetes</HiringLink> application development and operations.
          </Paragraph>
          <Paragraph>
            <span className='text-secondary-accent'>In short:</span> I&#39;m significantly overqualified for most positions currently advertised in the market.
          </Paragraph>
        </span>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire')({
  component: Hire
})
