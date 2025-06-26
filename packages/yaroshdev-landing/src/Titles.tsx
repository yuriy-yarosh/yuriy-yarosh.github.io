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

export const getTitleFor = (pathname: string) =>
  [
    ['/about', 'Yuriy Yarosh | About'],
    ['/contacts', 'Yuriy Yarosh | Contacts'],
    ['/legal', 'Yuriy Yarosh | Legal'],
    ['/blog', 'Yuriy Yarosh | Blog'],
    ['/projects', 'Yuriy Yarosh | Projects'],
    ['/events', 'Yuriy Yarosh | Events'],
    ['/hire', 'Yuriy Yarosh | For Hire']
  ].find(([p]) => pathname.startsWith(p))?.[1] || 'Yuriy Yarosh | Personal Site'

export default getTitleFor
