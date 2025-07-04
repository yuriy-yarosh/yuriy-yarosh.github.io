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

const AWSLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/aws', underline: true })

export const HireAWS = () => {
  return (
    <ContentCard catchBoundary='aws' to='/hire' from='/hire/aws'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>AWS Consulting and Training</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          I provide comprehensive AWS consulting services with deep expertise in cloud-native architecture, Infrastructure as Code, and enterprise-scale deployments:
        </Paragraph>

        <div className='space-y-4'>
          <div>
            <Paragraph className='font-semibold text-lg'>Infrastructure as Code & DevOps</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🏗️ <strong>AWS CDK</strong> with{' '}
                <AWSLink to='https://aws.amazon.com/cdk/' external>
                  AWS CDK
                </AWSLink>
                ,{' '}
                <AWSLink to='https://cdk8s.io/' external>
                  CDK8S
                </AWSLink>
                , and{' '}
                <AWSLink to='https://github.com/hashicorp/terraform-cdk' external>
                  CDKTF
                </AWSLink>{' '}
                for cross-functional teams in TypeScript, Python and Kotlin
              </li>
              <li>
                ☁️ <strong>CloudFormation & Terraform</strong> with{' '}
                <AWSLink to='https://www.terraform.io/' external>
                  Terraform
                </AWSLink>{' '}
                and{' '}
                <AWSLink to='https://opentofu.org/' external>
                  OpenTofu
                </AWSLink>{' '}
                for planning capabilities, forensics, compliance and security audit
              </li>
              <li>
                🚀 <strong>CI/CD Pipelines</strong> with{' '}
                <AWSLink to='https://aws.amazon.com/codepipeline/' external>
                  TektonCD
                </AWSLink>
                ,{' '}
                <AWSLink to='https://argoproj.github.io/cd/' external>
                  ArgoCD
                </AWSLink>{' '}
                and{' '}
                <AWSLink to='https://github.com/features/actions' external>
                  GitHub Actions
                </AWSLink>
              </li>
              <li>
                📊 Multi-account strategies with AWS Organizations and Control Tower for{' '}
                <AWSLink to='https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html' external>
                  AWS SRA
                </AWSLink>{' '}
                and{' '}
                <AWSLink to='https://docs.aws.amazon.com/prescriptive-guidance/latest/privacy-reference-architecture/introduction.html' external>
                  AWS PRA
                </AWSLink>{' '}
                prescriptive guidance.
              </li>
              <Paragraph className='mt-4 lg:mt-8'>
                Additional Kubernetes-specific design details are detailed in the <AWSLink to='/hire/architecture'>Architecture</AWSLink> and{' '}
                <AWSLink to='/hire/kubernetes'>Kubernetes</AWSLink> sections.
              </Paragraph>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/aws')({
  component: HireAWS
})
