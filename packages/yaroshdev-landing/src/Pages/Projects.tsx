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

import { ContentCard, ContentLink, Heading, Paragraph } from 'Landing/Components'
import { createFileRoute } from '@tanstack/react-router'

const ProjectsLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/projects' })

type YuriyProject = {
  id: string
  title: string
  href: string
  description: string
}

const Project = ({ id, title, href, description }: YuriyProject & { className?: string }) => (
  <li className='flex flex-col flex-wrap' key={`event-${id}`}>
    <Heading className='flex flex-row justify-between'>
      <ProjectsLink className='flex font-semibold text-lg transition-colors hover:text-accent md:text-4xl' to={href}>
        {title}
      </ProjectsLink>
    </Heading>

    <Paragraph className='flex flex-row pr-4'>{description}</Paragraph>
  </li>
)

const projects: YuriyProject[] = [
  {
    description: 'Sumi.care mobile app',
    href: '/projects/sumicare',
    id: 'sumicare',
    title: 'Sumicare'
  },
  {
    description: `Reference Cloud Native Architecture`,
    href: '/projects/rcna',
    id: 'rcna',
    title: 'RCNA'
  }
]

export const Projects = () => {
  return (
    <ContentCard backTitle='Projects' catchBoundary='projects' from='/projects' to='/'>
      <div className='space-y-12 px-4 md:px-12'>
        <Heading>Projects</Heading>

        <nav className='flex h-max flex-col items-center'>
          <ul className='flex flex-col space-y-8'>
            {projects.map((e) => (
              <Project key={e.id} {...e} />
            ))}
          </ul>
        </nav>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/projects/')({
  component: Projects
})
