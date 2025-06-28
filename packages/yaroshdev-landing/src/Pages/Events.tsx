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

import { ContentCard, Heading, Paragraph } from 'Landing/Components'
import { default as EventsSchedule, type Event as ScheduledEvent } from 'Landing/Events'
import { createFileRoute } from '@tanstack/react-router'

const planned = EventsSchedule.filter(({ dateScheduled }) => dateScheduled.getDate() >= Date.now())
const past = EventsSchedule.filter(({ dateScheduled }) => dateScheduled.getDate() < Date.now())

const Event = ({ id, title, href, description, dateScheduled }: ScheduledEvent & { className?: string }) => (
  <li key={`event-${id}`} className=''>
    <a href={href} className='text-2xl transition-colors hover:text-accent'>
      {title}
      {dateScheduled.toDateString()}
      <span>{description}</span>
    </a>
  </li>
)

export const Events = () => {
  return (
    <ContentCard backTitle='Events' catchBoundary='events'>
      <nav className='flex flex-col'>
        <Heading>Upcoming Events</Heading>
        {planned.length > 0 && (
          <ul className='space-y-4'>
            {planned.map((e) => (
              <Event key={e.id} {...e} />
            ))}
          </ul>
        )}

        {planned.length > 0 || <Paragraph>None scheduled</Paragraph>}
      </nav>

      <nav>
        {past.length > 0 || <Heading>Past Events</Heading>}
        {past.length > 0 && (
          <ul className='space-y-2'>
            <li></li>
          </ul>
        )}
      </nav>
    </ContentCard>
  )
}

export const Route = createFileRoute('/events')({
  component: Events
})
