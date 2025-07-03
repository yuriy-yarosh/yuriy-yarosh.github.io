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

const AzureLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/azure' })

export const HireAzure = () => {
  return (
    <ContentCard catchBoundary='azure' to='/hire' from='/hire/azure'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Azure Consulting and Training</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          I provide comprehensive Microsoft Azure consulting services with expertise in enterprise cloud architecture, Azure DevOps, and hybrid cloud solutions:
        </Paragraph>

        <div className='space-y-4'>
          <div>
            <Paragraph className='font-semibold text-lg'>Infrastructure as Code & DevOps</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🏗️ <strong>Azure Resource Manager</strong> with{' '}
                <AzureLink to='https://docs.microsoft.com/azure/azure-resource-manager/bicep/' external>
                  Bicep
                </AzureLink>
                ,{' '}
                <AzureLink to='https://www.terraform.io/' external>
                  Terraform
                </AzureLink>
                ,{' '}
                <AzureLink to='https://developer.hashicorp.com/terraform/cdktf' external>
                  CDKTF
                </AzureLink>
                , and{' '}
                <AzureLink to='https://docs.microsoft.com/azure/templates/' external>
                  ARM Templates
                </AzureLink>{' '}
                for declarative infrastructure
              </li>
              <li>
                🚀 <strong>CI/CD Pipelines</strong> with{' '}
                <AzureLink to='https://aws.amazon.com/codepipeline/' external>
                  TektonCD
                </AzureLink>
                ,{' '}
                <AzureLink to='https://argoproj.github.io/cd/' external>
                  ArgoCD
                </AzureLink>{' '}
                and{' '}
                <AzureLink to='https://github.com/features/actions' external>
                  GitHub Actions
                </AzureLink>
              </li>
              <li>📊 Azure governance with Policy, Blueprints, and Management Groups</li>
            </ul>
            <Paragraph className='mt-4 lg:mt-8'>
              Additional Kubernetes-specific design details are detailed in the <AzureLink to='/hire/architecture'>Architecture</AzureLink> and{' '}
              <AzureLink to='/hire/kubernetes'>Kubernetes</AzureLink> sections.
            </Paragraph>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/azure')({
  component: HireAzure
})
