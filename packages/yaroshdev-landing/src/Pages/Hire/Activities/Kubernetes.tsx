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

const KubernetesLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  ContentLink({ ...params, from: '/hire/kubernetes', underline: true })

export const HireKubernetes = () => {
  return (
    <ContentCard catchBoundary='kubernetes' to='/hire' from='/hire/kubernetes'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Kubernetes Consulting and Training</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          I provide comprehensive Kubernetes consulting and development services, delivering cloud-native architecture, container orchestration, and production-ready cluster
          management. Solutions are built on proven{' '}
          <KubernetesLink to='https://github.com/yuriy-yarosh/architecture' external>
            Reference Cloud Native Architecture (RCNA)
          </KubernetesLink>{' '}
          framework that standardizes enterprise-grade Kubernetes deployments across multi-cloud environments.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Reference Cloud Native Architecture (RCNA)</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🦀 <strong>kube-rs Framework</strong> - Rust-based framework using{' '}
                <KubernetesLink to='https://kube.rs/' external>
                  kube-rs
                </KubernetesLink>{' '}
                for custom controllers and operators, providing type-safe Kubernetes API interactions
              </li>
              <li>
                ☁️ <strong>Cross-Cloud Deployment</strong> - Unified infrastructure management supporting AWS EKS, Azure AKS, and GCP GKE
              </li>
              <li>
                🛒 <strong>Multi-Cloud Marketplace Integration</strong> - Automated provisioning with Terraform-to-CloudFormation/ARM template conversion
              </li>
              <li>
                💰 <strong>FinOps Integration</strong> - Comprehensive cost tracking and optimization using{' '}
                <KubernetesLink to='https://github.com/opencost/opencost' external>
                  OpenCost
                </KubernetesLink>{' '}
                across all cluster components
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Compute & Scaling Solutions</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📈 <strong>Event-Driven Autoscaling</strong> with{' '}
                <KubernetesLink to='https://github.com/kedacore/keda' external>
                  KEDA
                </KubernetesLink>{' '}
                for scaling based on external metrics, queues, and custom triggers
              </li>
              <li>
                🚀 <strong>Node Provisioning</strong> with{' '}
                <KubernetesLink to='https://github.com/awslabs/karpenter' external>
                  Karpenter
                </KubernetesLink>{' '}
                for fast, efficient, and cost-optimized node scaling
              </li>
              <li>
                ⚖️ <strong>Workload Optimization</strong> with{' '}
                <KubernetesLink to='https://github.com/kubernetes-sigs/descheduler' external>
                  Descheduler
                </KubernetesLink>{' '}
                for rebalancing and{' '}
                <KubernetesLink to='https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler' external>
                  Vertical Pod Autoscaler
                </KubernetesLink>{' '}
                for resource rightsizing
              </li>
              <li>🎯 Custom resource management and cluster capacity planning</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Storage & Data Management</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                💾 <strong>Dynamic Volume Management</strong> with{' '}
                <KubernetesLink to='https://github.com/topolvm/topolvm' external>
                  TopoLVM
                </KubernetesLink>{' '}
                for high-performance local storage and{' '}
                <KubernetesLink to='https://github.com/topolvm/pvc-autoresizer' external>
                  PVC Autoresizer
                </KubernetesLink>{' '}
                for automatic volume expansion
              </li>
              <li>
                🗄️ <strong>Cloud-Native Databases</strong> with{' '}
                <KubernetesLink to='https://github.com/cloudnative-pg/cloudnative-pg' external>
                  CloudNativePG
                </KubernetesLink>{' '}
                and{' '}
                <KubernetesLink to='https://github.com/ongres/stackgres' external>
                  StackGres
                </KubernetesLink>{' '}
                for PostgreSQL, plus{' '}
                <KubernetesLink to='https://github.com/scylladb/scylla-operator' external>
                  ScyllaDB Operator
                </KubernetesLink>
              </li>
              <li>
                📦 <strong>Object Storage</strong> with{' '}
                <KubernetesLink to='https://github.com/minio/operator' external>
                  MinIO Operator
                </KubernetesLink>{' '}
                for S3-compatible storage and multi-cloud data management
              </li>
              <li>
                🔄 <strong>Backup & Disaster Recovery</strong> with{' '}
                <KubernetesLink to='https://github.com/vmware-tanzu/velero' external>
                  Velero
                </KubernetesLink>{' '}
                for cluster and application backup strategies
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Security & Governance</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔒 <strong>Network Security</strong> with{' '}
                <KubernetesLink to='https://github.com/cilium/cilium' external>
                  Cilium CNI
                </KubernetesLink>{' '}
                for eBPF-based networking, load balancing, and security policies
              </li>
              <li>
                🛡️ <strong>Policy Management</strong> with{' '}
                <KubernetesLink to='https://github.com/kyverno/kyverno' external>
                  Kyverno
                </KubernetesLink>{' '}
                for YAML-based policy enforcement and{' '}
                <KubernetesLink to='https://github.com/corazawaf/coraza-proxy-wasm' external>
                  Coraza
                </KubernetesLink>{' '}
                for WAF protection
              </li>
              <li>
                🔐 <strong>Secrets Management</strong> with{' '}
                <KubernetesLink to='https://github.com/external-secrets/external-secrets' external>
                  External Secrets Operator
                </KubernetesLink>{' '}
                for secure credential injection from cloud providers
              </li>
              <li>
                👁️ <strong>Runtime Security</strong> with{' '}
                <KubernetesLink to='https://github.com/falcosecurity/falco' external>
                  Falco
                </KubernetesLink>{' '}
                for threat detection and{' '}
                <KubernetesLink to='https://github.com/kubescape/kubescape' external>
                  Kubescape
                </KubernetesLink>{' '}
                for compliance scanning
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Development & Collaboration Infrastructure</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                👤 <strong>Identity Provider</strong> with{' '}
                <KubernetesLink to='https://github.com/dexidp/dex' external>
                  Dex
                </KubernetesLink>{' '}
                for OIDC identity federation and SSO integration
              </li>
              <li>
                🛠️ <strong>Self-Hosted DevOps</strong> with{' '}
                <KubernetesLink to='https://github.com/go-gitea/gitea' external>
                  Gitea
                </KubernetesLink>{' '}
                for Git hosting and{' '}
                <KubernetesLink to='https://github.com/eclipse-theia/theia' external>
                  Theia IDE
                </KubernetesLink>{' '}
                for cloud-native development environments
              </li>
              <li>
                🔄 <strong>Configuration Management</strong> with{' '}
                <KubernetesLink to='https://github.com/stakater/Reloader' external>
                  Reloader
                </KubernetesLink>{' '}
                for automatic resource restart on configuration changes
              </li>
              <li>🔗 Cross-cluster identity federation and workload identity patterns</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>GitOps & CI/CD</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔄 <strong>GitOps Workflow</strong> with{' '}
                <KubernetesLink to='https://github.com/argoproj/argo-cd' external>
                  ArgoCD
                </KubernetesLink>{' '}
                for declarative continuous deployment and{' '}
                <KubernetesLink to='https://github.com/argoproj/argo-rollouts' external>
                  Argo Rollouts
                </KubernetesLink>{' '}
                for progressive delivery
              </li>
              <li>
                🏗️ <strong>Cloud-Native CI/CD</strong> with{' '}
                <KubernetesLink to='https://github.com/tektoncd/pipeline' external>
                  TektonCD
                </KubernetesLink>{' '}
                for Kubernetes-native pipelines and container builds
              </li>
              <li>
                📦 <strong>Container Registry</strong> strategies with multi-cloud image distribution and vulnerability scanning
              </li>
              <li>🚀 Blue-green, canary, and rolling deployment strategies with automated rollback</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>MLOps & AI Infrastructure</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>Distributed AI Processing</strong> with{' '}
                <KubernetesLink to='https://github.com/ray-project/kuberay' external>
                  KubeRay
                </KubernetesLink>{' '}
                for Ray clusters and machine learning workloads
              </li>
              <li>
                📊 <strong>Batch Processing</strong> with{' '}
                <KubernetesLink to='https://github.com/volcano-sh/volcano' external>
                  Volcano
                </KubernetesLink>{' '}
                for high-performance computing and batch job scheduling
              </li>
              <li>🎯 Model serving, A/B testing, and automated model deployment strategies</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Networking & Service Mesh</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌐 <strong>DNS & Ingress</strong> with{' '}
                <KubernetesLink to='https://github.com/kubernetes-sigs/external-dns' external>
                  External DNS
                </KubernetesLink>{' '}
                for automated DNS management and multi-cloud ingress strategies
              </li>
              <li>
                🕸️ <strong>Service Mesh</strong> with{' '}
                <KubernetesLink to='https://istio.io/' external>
                  Istio
                </KubernetesLink>
                ,{' '}
                <KubernetesLink to='https://linkerd.io/' external>
                  Linkerd
                </KubernetesLink>
                , and{' '}
                <KubernetesLink to='https://docs.cilium.io/en/stable/network/servicemesh/' external>
                  Cilium Service Mesh
                </KubernetesLink>
              </li>
              <li>
                🔒 <strong>Zero Trust Networking</strong> with mutual TLS, network policies, and micro-segmentation
              </li>
              <li>⚡ High-performance networking, load balancing, and traffic management</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Observability & Monitoring</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📊 <strong>GrafanaLabs OSS Stack</strong> with{' '}
                <KubernetesLink to='https://grafana.com/oss/' external>
                  GrafanaLabs OSS
                </KubernetesLink>{' '}
                including Grafana, Prometheus, Loki, and Tempo for complete observability
              </li>
              <li>
                💰 <strong>FinOps Integration</strong> with{' '}
                <KubernetesLink to='https://github.com/opencost/opencost' external>
                  OpenCost
                </KubernetesLink>{' '}
                for real-time cost allocation and optimization recommendations
              </li>
              <li>
                🔍 <strong>Distributed Tracing</strong> with{' '}
                <KubernetesLink to='https://opentelemetry.io/' external>
                  OpenTelemetry
                </KubernetesLink>{' '}
                and service dependency mapping
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Multi-Cloud & Enterprise Integration</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌍 <strong>Cross-Cloud Management</strong> - Cluster federation, workload portability, and unified policy management
              </li>
              <li>
                🔗 <strong>Hybrid Cloud Connectivity</strong> - VPN mesh, private link integration, and edge computing strategies
              </li>
              <li>
                📊 <strong>Enterprise Integration</strong> - IdP integrations, SSO, compliance frameworks, and comprehensive audit logging
              </li>
              <li>
                🚀 <strong>Migration Strategies</strong> - Traditional infrastructure to cloud-native architectures with minimal downtime
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Cluster Operations & Best Practices</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📋 <strong>Operational Excellence</strong> - Cluster lifecycle management, upgrade strategies, and operational runbooks
              </li>
              <li>
                🔧 <strong>Troubleshooting & Diagnostics</strong> - Advanced debugging techniques, performance tuning, and issue resolution
              </li>
              <li>
                📊 <strong>Capacity Planning</strong> - Resource optimization, cost management, and performance forecasting
              </li>
              <li>
                🎯 <strong>Production Readiness</strong> - High availability, disaster recovery, and business continuity planning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/kubernetes')({
  component: HireKubernetes
})
