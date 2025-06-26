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
        <h3 className='pb-3 font-bold text-lg'>Upcoming Events</h3>
        {planned.length > 0 && (
          <ul className='space-y-4'>
            {planned.map((e) => (
              <Event key={e.id} {...e} />
            ))}
          </ul>
        )}

        {planned.length > 0 || <p>None scheduled</p>}
      </nav>

      <nav>
        {past.length > 0 || <h3 className='mb-3 font-bold text-xl'>Past Events</h3>}
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
