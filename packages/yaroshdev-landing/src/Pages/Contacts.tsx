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
    <ContentCard backTitle='Contacts' catchBoundary='contacts' from='/contacts' to='/'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Contacts</Heading>
        <Paragraph className='mt-4 md:mt-8'>
          📬 Feel free to reach me out via{' '}
          <ContactsLink external to='mailto:yuriy@yarosh.dev'>
            Email
          </ContactsLink>{' '}
          or{' '}
          <ContactsLink external to='https://www.linkedin.com/in/yuriy-yarosh-171ba3b9/'>
            LinkedIn
          </ContactsLink>
          .
        </Paragraph>

        <Paragraph>I'm open to remote contract work, business opportunities, and research collaborations.</Paragraph>
        <Paragraph>
          🚫 I <span className='font-bold text-red-600'>do not</span> engage with any russian-affiliated entities—this is a matter of security, safety, and above all, ethics.
        </Paragraph>

        <Paragraph>
          ⚠️ I currently <span className='font-bold text-red-600'>do not</span> participate in public events or gatherings.
        </Paragraph>

        <Paragraph>
          🔒 I <span className='font-bold text-red-600'>do not</span> Promote nor Endorse any 3rd party products or services.
        </Paragraph>
        <Paragraph>
          🛡️ I <span className='font-bold text-red-600'>do not</span> engage in military-tech R&D unless there are clear safety guarantees and referrals from trusted sources.
        </Paragraph>
        <Paragraph>
          🎓 I <span className='font-bold text-red-600'>do not</span> trade personal freedom for titles or positions.
        </Paragraph>
        <Paragraph>🗣️ All opinions are my own.</Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/contacts')({
  component: Contacts
})
