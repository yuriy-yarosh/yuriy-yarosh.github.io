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

const SecurityLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  ContentLink({ ...params, from: '/hire/security', underline: true })

export const HireSecurity = () => {
  return (
    <ContentCard catchBoundary='security' to='/hire' from='/hire/security'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Cybersecurity & Information Security</Heading>
        <Paragraph className='mt-4 lg:mt-8'>I do not compromise on security.</Paragraph>
        <Paragraph className='mt-4'>
          Solid experience in comprehensive security frameworks and automated compliance systems. Following reference security architecture designs and prescriptive guidance,
          existing regulatory compliance frameworks.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Security Architecture & Design</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🛡️ <strong>Zero Trust Architecture</strong> - continuous verification and automated compliance systems with{' '}
                <SecurityLink to='https://www.nist.gov/publications/zero-trust-architecture' external>
                  NIST 800-207
                </SecurityLink>{' '}
                <SecurityLink to='https://aws.amazon.com/security/zero-trust/' external>
                  AWS Zero-trust
                </SecurityLink>{' '}
                and{' '}
                <SecurityLink to='https://docs.aws.amazon.com/prescriptive-guidance/latest/privacy-reference-architecture/introduction.html' external>
                  AWS PRA
                </SecurityLink>{' '}
                frameworks
              </li>
              <li>
                🔐 <strong>Identity & Access Management</strong> - Federated authentication with{' '}
                <SecurityLink to='https://aws-samples.github.io/iam-identity-center-team/' external>
                  AWS TEAM
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.okta.com/' external>
                  Okta
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://auth0.com/' external>
                  Auth0
                </SecurityLink>
                , and{' '}
                <SecurityLink to='https://dexidp.io/' external>
                  Dex IdP
                </SecurityLink>{' '}
                platforms. <br /> Optional{' '}
                <SecurityLink to='https://en.wikipedia.org/wiki/Relationship-based_access_control' external>
                  ReBAC
                </SecurityLink>{' '}
                deployments with{' '}
                <SecurityLink to='https://openfga.dev/' external>
                  OpenFGA
                </SecurityLink>{' '}
                and{' '}
                <SecurityLink to='https://ory.sh/' external>
                  Ory
                </SecurityLink>
              </li>
              <li>
                🔑 <strong>Cryptographic Systems</strong> - containerized apps integration with{' '}
                <SecurityLink to='https://cert-manager.io/' external>
                  CertManager
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.sigstore.dev/' external>
                  Sigstore Keyless PKI
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://openbao.org/' external>
                  OpenBAO
                </SecurityLink>
                , and hardware security modules (HSM)
              </li>
              <li>
                🏢 <strong>Secure Software Development Lifecycle</strong> - containers{' '}
                <SecurityLink to='https://slsa.dev/' external>
                  SLSA provenance
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://in-toto.io/' external>
                  in-toto
                </SecurityLink>{' '}
                attestation, supply chain security hardening practices
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Threat Detection & Response</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>Threat Intelligence</strong> - integrations with{' '}
                <SecurityLink to='https://www.misp-project.org/' external>
                  MISP
                </SecurityLink>
                , and{' '}
                <SecurityLink to='https://attack.mitre.org/' external>
                  MITRE ATT&CK
                </SecurityLink>{' '}
                platforms
              </li>
              <li>
                📊 <strong>Behavioral Analytics</strong> - user and entity behavior analytics (UEBA) for anomaly detection and threat identification
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Vulnerability Management & Testing</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔎 <strong>Vulnerability Scanning</strong> - Comprehensive security assessment with{' '}
                <SecurityLink to='https://github.com/aquasecurity/trivy' external>
                  Trivy
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://github.com/quay/clair' external>
                  Clair
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://github.com/anchore/grype' external>
                  Grype
                </SecurityLink>
                , and{' '}
                <SecurityLink to='https://github.com/anchore/syft' external>
                  Syft
                </SecurityLink>{' '}
                tools
              </li>
              <li>
                📝 <strong>Code Security Analysis</strong> - Agent-driven code reviews with{' '}
                <SecurityLink to='https://sonarqube.org/' external>
                  SonarQube
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://github.com/features/security' external>
                  GitHub Security
                </SecurityLink>{' '}
                and automated security scanning
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Cloud Security & DevSecOps</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ☁️ <strong>Cloud Security</strong> - Multi-cloud security management with{' '}
                <SecurityLink to='https://aws.amazon.com/security/' external>
                  AWS Security Hub
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://cloud.google.com/security' external>
                  Google Cloud Security
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://azure.microsoft.com/en-us/products/defender-for-cloud/' external>
                  Azure Defender
                </SecurityLink>
                , and{' '}
                <SecurityLink to='https://learn.microsoft.com/en-us/azure/sentinel/overview?tabs=defender-portal' external>
                  Microsoft Sentinel
                </SecurityLink>{' '}
                platforms
              </li>
              <li>
                🔒 <strong>Container Security</strong> - Runtime security and policy enforcement with{' '}
                <SecurityLink to='https://anchore.com/' external>
                  Anchore
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.falco.org/' external>
                  Falco
                </SecurityLink>
                , and{' '}
                <SecurityLink to='https://kyverno.io/' external>
                  Kyverno
                </SecurityLink>{' '}
                and{' '}
                <SecurityLink to='https://kubescape.io/' external>
                  Kubescape
                </SecurityLink>{' '}
                (occasionally use{' '}
                <SecurityLink to='https://tetragon.io/' external>
                  Tetragon
                </SecurityLink>{' '}
                and{' '}
                <SecurityLink to='https://kubearmor.io/' external>
                  KubeArmor
                </SecurityLink>
                )
              </li>
              <li>
                🔄 <strong>DevSecOps</strong> -{' '}
                <SecurityLink to='https://tekton.dev/docs/chains/' external>
                  TektonCD
                </SecurityLink>{' '}
                delivery pipeline hardening with{' '}
                <SecurityLink to='https://tekton.dev/docs/chains/' external>
                  Tekton Chains
                </SecurityLink>{' '}
              </li>
              <li>
                🌐 <strong>Network Security</strong> - IDS/IPS with{' '}
                <SecurityLink to='https://www.paloaltonetworks.com/' external>
                  Palo Alto Networks
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.fortinet.com/products/next-generation-firewall' external>
                  FortiGate
                </SecurityLink>
                , and{' '}
                <SecurityLink to='https://suricata.io/' external>
                  Suricata
                </SecurityLink>{' '}
                solutions
              </li>
            </ul>
          </div>
          <div>
            <Paragraph className='font-semibold text-lg'>Compliance & Governance</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📋 <strong>Regulatory Compliance</strong> - Standards adherence with{' '}
                <SecurityLink to='https://www.iso.org/isoiec-27001-information-security.html' external>
                  ISO 27001
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.iso.org/standard/85819.html' external>
                  ISO 27701
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.iso.org/standard/85938.html' external>
                  ISO 29100
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.nist.gov/cyberframework' external>
                  NIST Cybersecurity Framework
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.pcisecuritystandards.org/' external>
                  PCI DSS
                </SecurityLink>
                , and{' '}
                <SecurityLink to='https://www.hhs.gov/hipaa/index.html' external>
                  HIPAA
                </SecurityLink>{' '}
                frameworks
              </li>
              <li>
                📏 <strong>Risk Management</strong> - Quantitative risk analysis with{' '}
                <SecurityLink to='https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final' external>
                  NIST 800-30
                </SecurityLink>
                ,{' '}
                <SecurityLink to='https://www.iso.org/standard/65694.html' external>
                  ISO 31000
                </SecurityLink>{' '}
                risk assessment methodology and comprehensive risk analysis
              </li>
              <li>
                📊 <strong>Audit Support</strong> - Evidence collection and control testing with remediation tracking systems and compliance reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/security')({
  component: HireSecurity
})
