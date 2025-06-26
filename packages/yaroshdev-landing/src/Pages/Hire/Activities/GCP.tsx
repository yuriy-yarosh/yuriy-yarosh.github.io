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

const GCPLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/gcp' })

export const HireGCP = () => {
  return (
    <ContentCard catchBoundary='gcp' to='/hire' from='/hire/gcp'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>GCP Consulting and Training</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          I provide comprehensive Google Cloud Platform consulting services with expertise in cloud-native architecture, AI/ML platforms, and data analytics solutions:
        </Paragraph>

        <div className='space-y-4'>
          <div>
            <Paragraph className='font-semibold text-lg'>Infrastructure as Code & DevOps</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🏗️ <strong>Infrastructure Management</strong> with{' '}
                <GCPLink to='https://cloud.google.com/infrastructure-manager' external>
                  Infrastructure Manager
                </GCPLink>
                ,{' '}
                <GCPLink to='https://www.terraform.io/' external>
                  Terraform
                </GCPLink>
                , and{' '}
                <GCPLink to='https://developer.hashicorp.com/terraform/cdktf' external>
                  CDKTF
                </GCPLink>{' '}
                for declarative infrastructure
              </li>
              <li>
                🚀 <strong>Cloud Build & CI/CD</strong> with{' '}
                <GCPLink to='https://cloud.google.com/build' external>
                  Cloud Build
                </GCPLink>
                ,{' '}
                <GCPLink to='https://cloud.google.com/source-repositories' external>
                  Cloud Source Repositories
                </GCPLink>
                ,{' '}
                <GCPLink to='https://aws.amazon.com/codepipeline/' external>
                  TektonCD
                </GCPLink>
                ,{' '}
                <GCPLink to='https://argoproj.github.io/cd/' external>
                  ArgoCD
                </GCPLink>{' '}
                and{' '}
                <GCPLink to='https://github.com/features/actions' external>
                  GitHub Actions
                </GCPLink>{' '}
                integration
              </li>
              <li>
                ⚡ <strong>GitOps & Automation</strong> with policy-as-code, and automated deployments
              </li>
              <li>
                📊 Multi-project architecture with IAM and organization policies, following existing{' '}
                <GCPLink to='https://cloud.google.com/architecture/framework/security' external>
                  security architecture
                </GCPLink>
              </li>
            </ul>

            <Paragraph className='mt-4 lg:mt-8'>
              Additional Kubernetes-specific design details are detailed in the <GCPLink to='/hire/architecture'>Architecture</GCPLink> and{' '}
              <GCPLink to='/hire/kubernetes'>Kubernetes</GCPLink> sections.
            </Paragraph>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/gcp')({
  component: HireGCP
})
