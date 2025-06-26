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
import { createFileRoute } from '@tanstack/react-router'

export const SimulationBlogPost = () => {
  return (
    <ContentCard backTitle='Blog' catchBoundary='blog' to='/blog' from='/blog/simulation'>
      <Heading>Simulation</Heading>
      <Paragraph className='mt-4 flex w-auto flex-row justify-center px-4 md:mt-8 md:px-12'>
        Modern statistical physics simulations simplify control systems greatly, both for interception and counter-interception.
      </Paragraph>
      <Paragraph className='mt-2 flex w-auto flex-row justify-center px-4 md:px-12'>
        Due to current legal limitations of public speech in war time, {
          // "open illegal censorship, through false charges, of whistle-blowers, bloggers, political activists and opposition,
          // it is not possible to publish this article. With ongoing campaign of intellectual property extortion, engineering slavery,
          // human trafficking, and legitimizing Private Military Companies governed by local Mafias, it's a valid safety concern and a real life threat."
        } it is not possible to publish this article.
      </Paragraph>

      <Paragraph className='mt-4 flex w-auto flex-row justify-center px-4 font-title text-xl md:mt-8 md:px-12 md:text-2xl'>Censored</Paragraph>
    </ContentCard>
  )
}

export const Route = createFileRoute('/blog/simulation')({
  component: SimulationBlogPost
})
