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

const LegalLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/legal' })

export const Legal = () => {
  return (
    <ContentCard backTitle='Legal' catchBoundary='legal'>
      <div className='space-y-2 px-4 md:px-12 lg:space-y-4'>
        <Heading>Legal</Heading>
        <Paragraph>Yuriy Yarosh © 2016-2025.</Paragraph>
        <Paragraph>Yuriy is a Ukrainian Private Entrepreneur (PE).</Paragraph>
        <Paragraph>
          All media and written content presented here is licensed under the{' '}
          <LegalLink to='https://creativecommons.org/licenses/by-nc-nd/4.0/' className='text-wrap' external>
            Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
          </LegalLink>{' '}
          license.
        </Paragraph>
        <Paragraph>
          This site and its entire codebase are licensed under the{' '}
          <LegalLink to='https://www.mozilla.org/en-US/MPL/2.0/' external>
            Mozilla Public License 2.0.
          </LegalLink>
        </Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/legal')({
  component: Legal
})



