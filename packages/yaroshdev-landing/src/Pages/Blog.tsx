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

const BlogLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/blog' })

type BlogPost = {
  id: string
  title: string
  href: string
  description: string
  lastUpdated?: Date
  status?: string
}

const Post = ({ id, title, href, description, lastUpdated, status }: BlogPost & { className?: string }) => (
  <li className='flex flex-col flex-wrap' key={`event-${id}`}>
    <Heading className='flex flex-row justify-between'>
      <BlogLink className='flex text-wrap font-semibold text-sm transition-colors hover:text-accent md:text-2xl lg:text-4xl' to={href}>
        {title}
      </BlogLink>
      <span className='flex text-sm md:text-md'>{lastUpdated ? lastUpdated.toLocaleDateString() : status || 'Draft'}</span>
    </Heading>

    <Paragraph className='flex flex-row pr-4'>{description}</Paragraph>
  </li>
)

const posts: BlogPost[] = [
  {
    description: 'Initial stuff and plans...',
    href: '/blog/initial',
    id: '0',
    title: 'Plans'
  }
]

export const Blog = () => {
  return (
    <ContentCard backTitle='Blog' catchBoundary='blog' from='/blog' to='/'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Blog</Heading>
        <Paragraph className='mt-4 md:mt-8'>My research findings and thoughts on various topics.</Paragraph>
        <Paragraph>🛠️ You can expect updates and revisions to the content of these articles in the future.</Paragraph>
        <Paragraph>Don't have enough free time to write much, atm.</Paragraph>
        <nav className='my-8 flex h-max flex-col md:my-12'>
          <ul className='flex flex-col space-y-4 md:space-y-8'>
            {posts.map((e) => (
              <Post key={e.id} {...e} />
            ))}
          </ul>
        </nav>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/')({
  component: Blog
})
