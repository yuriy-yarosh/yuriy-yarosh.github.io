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

const ArchitectureLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/architecture' })

export const HireArchitecture = () => {
  return (
    <ContentCard catchBoundary='architecture' to='/hire' from='/hire/architecture'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Solution Architecture</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Comprehensive solution architecture services focused on designing enterprise-grade systems that balance scalability, resilience, and performance. This approach combines
          modern cloud-native patterns, microservices design, and event-driven architectures to deliver robust solutions that scale with business growth and adapt to changing
          requirements.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Reference Cloud Native Architecture (RCNA)</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🦀 <strong>kube-rs Based Framework</strong> - Authored comprehensive{' '}
                <ArchitectureLink to='https://github.com/yuriy-yarosh/rcna' external>
                  RCNA project
                </ArchitectureLink>{' '}
                as an opinionated Kubernetes application deployment solution that standardizes cloud-native architecture patterns
              </li>
              <li>
                🏗️ <strong>Cross-Cloud Deployment</strong> - Framework for generating Kubernetes resource definitions targeting standardized Cloud Native Architecture across
                multiple cloud providers
              </li>
              <li>
                🌍 <strong>Multi-Cloud Marketplace</strong> - Capable deployments targeting reference Well-Architected frameworks and related prescriptive guidance from AWS, Azure,
                and GCP
              </li>
              <li>
                💰 <strong>Comprehensive FinOps</strong> - Integrated cost management and optimization strategies with real-time monitoring and automated cost control
              </li>
            </ul>
          </div>
          <div>
            <Paragraph className='font-semibold text-lg'>Distributed Systems Architecture</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🏗️ <strong>Microservices Design</strong> with domain-driven design (DDD), bounded contexts, and service decomposition strategies
              </li>
              <li>
                🔗 <strong>Event-Driven Architecture</strong> with{' '}
                <ArchitectureLink to='https://kafka.apache.org/' external>
                  Apache Kafka
                </ArchitectureLink>
                , event sourcing, and CQRS patterns for scalable, loosely-coupled data flows
              </li>
              <li>
                📡 <strong>API Gateway Patterns</strong> with{' '}
                <ArchitectureLink to='https://cilium.io/' external>
                  Cilium
                </ArchitectureLink>{' '}
                and{' '}
                <ArchitectureLink to='https://github.com/envoyproxy/envoy' external>
                  Envoy Proxy
                </ArchitectureLink>{' '}
                for intelligent traffic management, security, and observability
              </li>
              <li>⚖️ Load balancing, circuit breakers, and resilience patterns for fault-tolerant systems</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Cloud-Native Architecture</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ☁️ <strong>Multi-Cloud Strategy</strong> with{' '}
                <ArchitectureLink to='https://aws.amazon.com/' external>
                  AWS
                </ArchitectureLink>
                ,{' '}
                <ArchitectureLink to='https://azure.microsoft.com/' external>
                  Azure
                </ArchitectureLink>
                ,{' '}
                <ArchitectureLink to='https://cloud.google.com/' external>
                  GCP
                </ArchitectureLink>{' '}
                platform-agnostic deployment patterns (terraform modules)
              </li>
              <li>
                🐳 <strong>Container Orchestration</strong> with{' '}
                <ArchitectureLink to='https://github.com/kedacore/keda' external>
                  KEDA
                </ArchitectureLink>{' '}
                for event-driven autoscaling based on custom metrics, and{' '}
                <ArchitectureLink to='https://github.com/awslabs/karpenter' external>
                  Karpenter
                </ArchitectureLink>{' '}
                for automatic node provisioning and right-sizing
              </li>
              <li>
                📊 <strong>Infrastructure as Code (IaC)</strong> with{' '}
                <ArchitectureLink to='https://www.terraform.io/' external>
                  Terraform
                </ArchitectureLink>
                ,{' '}
                <ArchitectureLink to='https://aws.amazon.com/cdk/' external>
                  CDK
                </ArchitectureLink>
                , and GitOps deployment patterns using{' '}
                <ArchitectureLink to='https://www.runatlantis.io/' external>
                  Atlantis
                </ArchitectureLink>{' '}
                for automated infrastructure management
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Database Architecture & Data Management</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🗃️ <strong>PostgreSQL Management</strong> with{' '}
                <ArchitectureLink to='https://github.com/cloudnative-pg/cloudnative-pg' external>
                  CNPG
                </ArchitectureLink>{' '}
                to manage PostgreSQL clusters and{' '}
                <ArchitectureLink to='https://github.com/stackgres/stackgres' external>
                  StackGres
                </ArchitectureLink>{' '}
                as fallback PostgreSQL cluster operator
              </li>
              <li>
                🪣 <strong>Object Storage</strong> with{' '}
                <ArchitectureLink to='https://min.io' external>
                  MinIO
                </ArchitectureLink>{' '}
                S3-compatible object store and{' '}
                <ArchitectureLink to='https://github.com/scylladb/scylla-manager' external>
                  ScyllaDB
                </ArchitectureLink>{' '}
                cluster management
              </li>
              <li>
                🌊 <strong>Stream Processing Architecture</strong> with{' '}
                <ArchitectureLink to='https://kafka.apache.org/documentation/streams/' external>
                  Kafka Streams
                </ArchitectureLink>
                ,{' '}
                <ArchitectureLink to='https://flink.apache.org/' external>
                  Apache Flink
                </ArchitectureLink>
                , and real-time analytics pipelines
              </li>
              <li>
                🗄️ <strong>Volume Management</strong> with{' '}
                <ArchitectureLink to='https://github.com/topolvm/topolvm' external>
                  TopoLVM
                </ArchitectureLink>{' '}
                for dynamic local LVM volumes and snapshotting support, and{' '}
                <ArchitectureLink to='https://github.com/vmware-tanzu/velero' external>
                  Velero
                </ArchitectureLink>{' '}
                backup and restore solution
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Security Architecture</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔐 <strong>Zero Trust Architecture</strong> with{' '}
                <ArchitectureLink to='https://github.com/cilium/cilium' external>
                  Cilium CNI
                </ArchitectureLink>
                , identity-based access controls, and micro-segmentation
              </li>
              <li>
                🛡️ <strong>Security by Design</strong> with{' '}
                <ArchitectureLink to='https://kyverno.io/' external>
                  Kyverno policy engine
                </ArchitectureLink>
                ,{' '}
                <ArchitectureLink to='https://github.com/falcosecurity/falco' external>
                  Falco runtime security
                </ArchitectureLink>
                , and{' '}
                <ArchitectureLink to='https://github.com/kubescape/kubescape' external>
                  Kubescape pre-deployment scanning
                </ArchitectureLink>
              </li>
              <li>
                🔑 <strong>Identity & Access Management</strong> with{' '}
                <ArchitectureLink to='https://github.com/dexidp/dex' external>
                  Dex identity provider
                </ArchitectureLink>
                ,{' '}
                <ArchitectureLink to='https://oauth.net/2/' external>
                  OAuth 2.0
                </ArchitectureLink>
                , and{' '}
                <ArchitectureLink to='https://openid.net/connect/' external>
                  OpenID Connect
                </ArchitectureLink>
              </li>
              <li>
                🔒 <strong>Secrets Management</strong> with{' '}
                <ArchitectureLink to='https://github.com/external-secrets/external-secrets' external>
                  External Secrets Operator
                </ArchitectureLink>
                , end-to-end encryption, and compliance framework integration
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>DevOps & CI/CD Architecture</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🚀 <strong>GitOps Solution</strong> with{' '}
                <ArchitectureLink to='https://argoproj.github.io/cd/' external>
                  ArgoCD
                </ArchitectureLink>{' '}
                GitOps solution,{' '}
                <ArchitectureLink to='https://github.com/argoproj/argo-rollouts' external>
                  Argo Rollouts
                </ArchitectureLink>{' '}
                canary deployments, and{' '}
                <ArchitectureLink to='https://tekton.dev/' external>
                  TektonCD
                </ArchitectureLink>{' '}
                CI/CD solution with{' '}
                <ArchitectureLink to='https://tekton.dev/docs/chains/' external>
                  Tekton Chains
                </ArchitectureLink>{' '}
                hardening
              </li>
              <li>
                📦 <strong>Container Registry Strategy</strong> with{' '}
                <ArchitectureLink to='https://goharbor.io/' external>
                  Harbor
                </ArchitectureLink>
                , image scanning, and artifact management
              </li>
              <li>
                🔄 <strong>Blue-Green & Canary Deployments</strong> with automated rollback strategies and feature flagging
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Integration & API Architecture</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔗 <strong>RESTful & GraphQL APIs</strong> with{' '}
                <ArchitectureLink to='https://spec.openapis.org/oas/latest.html' external>
                  OpenAPI
                </ArchitectureLink>{' '}
                and{' '}
                <ArchitectureLink to='https://graphql.org/' external>
                  GraphQL
                </ArchitectureLink>{' '}
                gRPC federation patterns, custom operators and gateways
              </li>
              <li>
                ⚡ <strong>gRPC Gateways</strong> to tRPC based frontend APIs and other external clients
              </li>
              <li>
                🔄 <strong>Type-safe API versioning strategies</strong>, backward compatibility, and deprecation management
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Observability & Monitoring Architecture</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📊 <strong>Distributed Observability</strong> with optional{' '}
                <ArchitectureLink to='https://grafana.com/docs/alloy/latest/reference/components/pyroscope/pyroscope.ebpf/' external>
                  profiling
                </ArchitectureLink>
                , using{' '}
                <ArchitectureLink to='https://opentelemetry.io/' external>
                  OpenTelemetry
                </ArchitectureLink>
                ,{' '}
                <ArchitectureLink to='https://grafana.com/docs/alloy/latest/' external>
                  Grafana Alloy
                </ArchitectureLink>{' '}
                agents collection,{' '}
                <ArchitectureLink to='https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/routingconnector/README.md' external>
                  OTLP routing
                </ArchitectureLink>
                , opt-in{' '}
                <ArchitectureLink to='https://grafana.com/docs/loki/latest/send-data/alloy/examples/alloy-kafka-logs/' external>
                  kafka collection
                </ArchitectureLink>
              </li>
              <li>
                📈 <strong>Observability Platform</strong> with{' '}
                <ArchitectureLink to='https://grafana.com/oss/' external>
                  GrafanaLabs OSS
                </ArchitectureLink>
              </li>
              <li>
                🔍 <strong>Centralized Logging</strong> with{' '}
                <ArchitectureLink to='https://grafana.com/oss/loki/' external>
                  Loki
                </ArchitectureLink>
                , and structured logging patterns
              </li>
              <li>
                🚨 <strong>Chaos engineering</strong> with{' '}
                <ArchitectureLink to='https://litmuschaos.io/' external>
                  Litmus
                </ArchitectureLink>
                , and{' '}
                <ArchitectureLink to='https://chaos-mesh.org/' external>
                  ChaosMesh
                </ArchitectureLink>
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Networking & Service Mesh</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌐 <strong>Service Mesh Architecture</strong> with{' '}
                <ArchitectureLink to='https://github.com/cilium/cilium' external>
                  Cilium CNI
                </ArchitectureLink>{' '}
                for eBPF-based networking and security
              </li>
              <li>
                🛡️ <strong>Network Security</strong> with{' '}
                <ArchitectureLink to='https://github.com/corazaweb/coraza' external>
                  Coraza
                </ArchitectureLink>{' '}
                web application firewall and Layer 7 security policies
              </li>
              <li>
                🔗 <strong>DNS Management</strong> with{' '}
                <ArchitectureLink to='https://github.com/kubernetes-sigs/external-dns' external>
                  External DNS
                </ArchitectureLink>{' '}
                for automated DNS record management across cloud providers
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>MLOps & AI Infrastructure</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>ML Orchestration</strong> with{' '}
                <ArchitectureLink to='https://github.com/ray-project/kuberay' external>
                  KubeRay
                </ArchitectureLink>{' '}
                Ray cluster operator for distributed ML workloads
              </li>
              <li>
                📊 <strong>Batch Processing</strong> with{' '}
                <ArchitectureLink to='https://volcano.sh/' external>
                  Volcano
                </ArchitectureLink>{' '}
                Kubernetes batch job scheduler for high-performance computing
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Development & Collaboration Infrastructure</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🐙 <strong>Development Infrastructure</strong> with{' '}
                <ArchitectureLink to='https://github.com/dexidp/dex' external>
                  Dex
                </ArchitectureLink>{' '}
                cluster identity provider,{' '}
                <ArchitectureLink to='https://github.com/go-gitea/gitea' external>
                  Gitea
                </ArchitectureLink>{' '}
                cost-effective GitLab alternative, and{' '}
                <ArchitectureLink to='https://github.com/theia-ide/theia' external>
                  Theia
                </ArchitectureLink>{' '}
                managed IDE
              </li>
              <li>
                🔁 <strong>Configuration Management</strong> with{' '}
                <ArchitectureLink to='https://github.com/stakater/Reloader' external>
                  Reloader
                </ArchitectureLink>{' '}
                for automated resource reloading on configuration changes
              </li>
              <li>
                📊 <strong>Integrated FinOps</strong> - Comprehensive cost management dashboard with{' '}
                <ArchitectureLink to='https://github.com/opencost/opencost' external>
                  OpenCost
                </ArchitectureLink>{' '}
                and automated cost optimization workflows
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Architecture Governance & Best Practices</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📋 <strong>Architecture Decision Records (ADRs)</strong> - Systematic documentation of architectural decisions and their rationale
              </li>
              <li>
                🔄 <strong>Evolutionary Architecture</strong> - Fitness functions and automated architecture testing to ensure system evolution
              </li>
              <li>
                📊 <strong>Performance Optimization</strong> - Continuous performance monitoring, bottleneck identification, and optimization strategies
              </li>
              <li>
                🔄 <strong>Disaster Recovery</strong> - Multi-region failover strategies, backup automation, and business continuity planning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/architecture')({
  component: HireArchitecture
})
