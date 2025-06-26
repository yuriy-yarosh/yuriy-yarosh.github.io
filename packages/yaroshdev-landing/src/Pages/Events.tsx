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
import { default as EventsSchedule, type Event as ScheduledEvent } from 'Landing/Events'
import { createFileRoute } from '@tanstack/react-router'

const planned = EventsSchedule.filter(({ dateScheduled }) => dateScheduled === null || dateScheduled.getDate() >= Date.now())
const past = EventsSchedule.filter(({ dateScheduled }) => dateScheduled !== null && dateScheduled.getDate() < Date.now())

const EventsLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/events' })

const Event = ({ id, title, href, description, dateScheduled }: ScheduledEvent & { className?: string }) => (
  <li key={`event-${id}`} className='flex flex-col flex-wrap'>
    <Heading className='flex flex-row justify-between'>
      <EventsLink to={href} className='flex font-semibold text-lg transition-colors hover:text-accent md:text-4xl'>
        {title}
      </EventsLink>
      {dateScheduled && <span className='flex text-sm md:text-md'>{dateScheduled.toLocaleDateString()}</span>}
      {!dateScheduled && <span className='flex text-sm md:text-md'>Planned</span>}
    </Heading>

    <Paragraph className='flex flex-row pr-4'>{description}</Paragraph>
  </li>
)

export const Events = () => {
  return (
    <ContentCard backTitle='Events' catchBoundary='events' to='/' from='/events'>
      <div className='space-y-2 px-4 md:px-12'>
        <nav className='flex flex-col'>
          {planned.length > 0 && (
            <div className='flex h-max flex-1 flex-col items-center space-y-2'>
              <Heading className='mb-8 md:mb-12'>Upcoming events</Heading>
              <Paragraph className='mb-4 md:mb-8'>Currently all planned events can be re-scheduled, without prior notice.</Paragraph>
              <ul className='flex flex-col space-y-8'>
                {planned.map((e) => (
                  <Event key={e.id} {...e} />
                ))}
              </ul>
            </div>
          )}

          {planned.length === 0 && (
            <div className='flex h-max flex-1 flex-col items-center space-y-2'>
              <Heading>Events</Heading>
              <Paragraph className='mt-4 md:mt-8'>None scheduled</Paragraph>
            </div>
          )}
        </nav>

        <nav>
          {past.length > 0 && (
            <div className='mt-4 flex flex-1 flex-col items-center space-y-2 md:mt-8'>
              <Heading className='mb-8 md:mb-12'>Past events</Heading>
              <ul className='flex flex-col space-y-8'>
                {past.map((e) => (
                  <Event key={e.id} {...e} />
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/events/')({
  component: Events
})
