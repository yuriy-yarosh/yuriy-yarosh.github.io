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

const ContactsLink = (params: { to: string; external?: boolean; children: React.ReactNode }) => ContentLink({ ...params, from: '/contacts' })

export const Contacts = () => {
  return (
    <ContentCard backTitle='Contacts' catchBoundary='contacts'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Contacts</Heading>
        <Paragraph>
          Feel free to reach me via{' '}
          <ContactsLink to='mailto:yuriy@yarosh.dev' external>
            Email
          </ContactsLink>{' '}
          or{' '}
          <ContactsLink to='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/' external>
            LinkedIn
          </ContactsLink>
          .
        </Paragraph>

        <Paragraph>I'm available for remote contract work, or any business opportunities and research activities.</Paragraph>

        <Paragraph>
          As long as they <span className='font-bold text-red-600'>Do Not Require Collaborating</span> with russian-affiliated entities.
        </Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/contacts')({
  component: Contacts
})
