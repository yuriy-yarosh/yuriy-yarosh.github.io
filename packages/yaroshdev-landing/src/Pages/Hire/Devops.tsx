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

export const DevOpsLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/devops' })

export const HireDevOps = () => {
  return (
    <ContentCard catchBoundary='devops' to='/hire' from='/hire/devops'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>DevOps</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Expert DevOps consulting services focused on automating infrastructure, streamlining deployments, and building reliable CI/CD pipelines. I help organizations modernize
          their development workflows using Infrastructure as Code, hardened container technologies, and comprehensive monitoring to deliver software faster and more securely.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>🏗️ Infrastructure as Code & Automation</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌍 <strong>Multi-Cloud Infrastructure</strong> with{' '}
                <DevOpsLink to='https://www.terraform.io/' external>
                  Terraform
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://aws.amazon.com/cdk/' external>
                  AWS CDK
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/' external>
                  Azure Bicep
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://cloud.google.com/infrastructure-manager' external>
                  Google Infrastructure Manager
                </DevOpsLink>{' '}
                for consistent infrastructure provisioning
              </li>
              <li>
                🎯 <strong>GitOps Workflows</strong> with{' '}
                <DevOpsLink to='https://argoproj.github.io/cd/' external>
                  ArgoCD
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://tekton.dev/' external>
                  TektonCD
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://runatlantis.io/' external>
                  Atlantis
                </DevOpsLink>{' '}
                for declarative continuous deployment
              </li>
              <li>
                🚀 <strong>Immutable Infrastructure</strong> - Golden image creation with{' '}
                <DevOpsLink to='https://www.packer.io/' external>
                  Packer
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://aws.amazon.com/bottlerocket/' external>
                  AWS Bottlerocket
                </DevOpsLink>{' '}
                and{' '}
                <DevOpsLink to='https://aws.amazon.com/eks/anywhere/' external>
                  EKS Anywhere
                </DevOpsLink>{' '}
                container-based deployments
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>🔄 CI/CD & Pipeline Automation</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🏭 <strong>Pipeline Orchestration</strong> with{' '}
                <DevOpsLink to='https://github.com/tektoncd/pipeline' external>
                  Tekton Pipelines
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/actions' external>
                  GitHub Actions
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://docs.gitlab.com/ee/ci/' external>
                  GitLab CI/CD
                </DevOpsLink>
              </li>
              <li>
                🐳 <strong>Container Build & Registry</strong> with{' '}
                <DevOpsLink to='https://buildah.io/' external>
                  Buildah
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/GoogleContainerTools/kaniko' external>
                  Kaniko
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/containers/skopeo' external>
                  Skopeo
                </DevOpsLink>
                , and multi-registry strategies
              </li>
              <li>
                🔐 <strong>Supply Chain Security</strong> with{' '}
                <DevOpsLink to='https://github.com/tektoncd/chains' external>
                  Tekton Chains
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://slsa.dev/' external>
                  SLSA provenance
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://in-toto.io/' external>
                  in-toto attestation
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://www.sigstore.dev/' external>
                  Sigstore
                </DevOpsLink>{' '}
                keyless signing
              </li>
              <li>
                🎭 <strong>Deployment Strategies</strong> - Blue-green, canary, rolling updates, and feature flags with{' '}
                <DevOpsLink to='https://github.com/argoproj/argo-rollouts' external>
                  Argo Rollouts
                </DevOpsLink>{' '}
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>📊 Observability & Monitoring</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📈 <strong>Metrics & Alerting</strong> with{' '}
                <DevOpsLink to='https://grafana.com/oss' external>
                  Grafana OSS
                </DevOpsLink>{' '}
                solutions
              </li>
              <li>
                📝 <strong>Centralized Logging</strong> with{' '}
                <DevOpsLink to='https://grafana.com/oss/loki/' external>
                  Loki
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://grafana.com/oss/alloy/' external>
                  Grafana Alloy
                </DevOpsLink>{' '}
                for observability data aggregation and analysis
              </li>
              <li>
                🔍 <strong>Distributed Tracing</strong> with{' '}
                <DevOpsLink to='https://opentelemetry.io/' external>
                  OpenTelemetry
                </DevOpsLink>{' '}
                and{' '}
                <DevOpsLink to='https://grafana.com/oss/tempo/' external>
                  Tempo
                </DevOpsLink>{' '}
                for end-to-end request tracking
              </li>
              <li>
                🎯 <strong>Application Performance Monitoring</strong> with{' '}
                <DevOpsLink to='https://k6.io/' external>
                  k6
                </DevOpsLink>{' '}
                for live API testing and performance monitoring
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>🔒 Security & Compliance</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🛡️ <strong>Security Scanning</strong> with{' '}
                <DevOpsLink to='https://github.com/aquasecurity/trivy' external>
                  Trivy
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/quay/clair' external>
                  Clair
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/anchore/grype' external>
                  Grype
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://github.com/anchore/syft' external>
                  Syft
                </DevOpsLink>{' '}
                for vulnerability assessment
              </li>
              <li>
                🔐 <strong>Secrets Management</strong> with{' '}
                <DevOpsLink to='https://github.com/external-secrets/external-secrets' external>
                  External Secrets Operator
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://github.com/openbao/openbao' external>
                  OpenBAO
                </DevOpsLink>
              </li>
              <li>
                📋 <strong>Policy as Code</strong> with{' '}
                <DevOpsLink to='https://kyverno.io/' external>
                  Kyverno
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/falcosecurity/falco' external>
                  Falco
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://github.com/kubescape/kubescape' external>
                  Kubescape
                </DevOpsLink>
              </li>
              <li>
                🏛️ <strong>Compliance Frameworks</strong> - SOC 2, ISO 27001, PCI DSS, HIPAA compliance automation and audit trail management
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>☁️ Cloud-Native & Container Orchestration</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🎛️ <strong>Kubernetes Management</strong> with{' '}
                <DevOpsLink to='/hire/kubernetes' external={false}>
                  comprehensive K8s expertise
                </DevOpsLink>
              </li>
              <li>
                🐳 <strong>Container Platforms</strong> with{' '}
                <DevOpsLink to='https://www.docker.com/' external>
                  Docker
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://podman.io/' external>
                  Podman
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://containerd.io/' external>
                  containerd
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://cri-o.io/' external>
                  CRI-O
                </DevOpsLink>{' '}
                runtime management
              </li>
              <li>
                🌐 <strong>Service Mesh</strong> with{' '}
                <DevOpsLink to='https://cilium.io/use-cases/service-mesh/' external>
                  Cilium Service Mesh
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://github.com/envoyproxy/envoy' external>
                  Envoy Proxy
                </DevOpsLink>
              </li>
              <li>
                📦 <strong>Serverless & Functions</strong> with{' '}
                <DevOpsLink to='https://knative.dev/' external>
                  Knative
                </DevOpsLink>{' '}
                and custom cloud-native function platforms
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>💰 FinOps & Cost Optimization</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📊 <strong>Cost Monitoring</strong> with{' '}
                <DevOpsLink to='https://github.com/opencost/opencost' external>
                  OpenCost
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://www.kubecost.com/' external>
                  Kubecost
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://infracost.io/' external>
                  InfraCost
                </DevOpsLink>{' '}
                for real-time cost visibility
              </li>
              <li>
                🎯 <strong>Resource Optimization</strong> with{' '}
                <DevOpsLink to='https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler' external>
                  Vertical Pod Autoscaler
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/kubernetes-sigs/descheduler' external>
                  Descheduler
                </DevOpsLink>
                , and automated rightsizing
              </li>
              <li>
                💡 <strong>Cost Governance</strong> - Budget alerts, resource quotas, and automated cost optimization policies
              </li>
              <li>
                📈 <strong>Multi-Cloud Cost Management</strong> - Cross-cloud cost analysis, reserved instance optimization, and spot instance strategies
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>🚀 Performance & Scalability</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ⚡ <strong>Load Testing</strong> with{' '}
                <DevOpsLink to='https://k6.io/' external>
                  k6
                </DevOpsLink>
              </li>
              <li>
                🔄 <strong>Chaos Engineering</strong> with{' '}
                <DevOpsLink to='https://litmuschaos.io/' external>
                  Litmus
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://github.com/chaos-mesh/chaos-mesh' external>
                  Chaos Mesh
                </DevOpsLink>{' '}
                for resilience testing
              </li>
              <li>
                📊 <strong>Performance Profiling</strong> with{' '}
                <DevOpsLink to='https://github.com/pyroscope-io/pyroscope' external>
                  Pyroscope
                </DevOpsLink>{' '}
                continuous profiling
              </li>
              <li>
                🎯 <strong>Auto-scaling Strategies</strong>{' '}
                <DevOpsLink to='https://github.com/kedacore/keda' external>
                  KEDA
                </DevOpsLink>{' '}
                custom metrics autoscaling, and{' '}
                <DevOpsLink to='https://github.com/awslabs/karpenter' external>
                  Karpenter
                </DevOpsLink>{' '}
                cluster autoscaling
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>🔧 Development & Collaboration Tools</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔀 <strong>Version Control & GitOps</strong> with{' '}
                <DevOpsLink to='https://github.com/' external>
                  GitHub
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://about.gitlab.com/' external>
                  GitLab
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://gitea.io/' external>
                  Gitea
                </DevOpsLink>{' '}
                self-hosted solutions
              </li>
              <li>
                🎨 <strong>Development Environments</strong> with{' '}
                <DevOpsLink to='https://code.visualstudio.com/' external>
                  VS Code
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://theia-ide.org/' external>
                  Theia IDE
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/devcontainers/spec' external>
                  Dev Containers
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://devpod.sh/' external>
                  DevPod
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://github.com/coder/coder' external>
                  Coder
                </DevOpsLink>
              </li>
              <li>
                📋 <strong>Project Management</strong> with{' '}
                <DevOpsLink to='https://www.atlassian.com/software/jira' external>
                  Jira
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://github.com/features/issues' external>
                  GitHub Issues
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://linear.app/' external>
                  Linear
                </DevOpsLink>
              </li>
              <li>
                🤖 <strong>Automation & Workflows</strong> - Custom automation scripts, webhook integrations, and workflow orchestration
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>🌍 Multi-Cloud & Hybrid Infrastructure</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ☁️ <strong>Cloud Platforms</strong> - <DevOpsLink to='/hire/aws'>AWS</DevOpsLink>, <DevOpsLink to='/hire/azure'>Azure</DevOpsLink>,{' '}
                <DevOpsLink to='/hire/gcp'>GCP</DevOpsLink>,{' '}
                <DevOpsLink to='https://www.ovhcloud.com' external>
                  OVH
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://hetzner.com' external>
                  Hetzner
                </DevOpsLink>
                ,{' '}
                <DevOpsLink to='https://vultr.com' external>
                  Vultr
                </DevOpsLink>
                , and{' '}
                <DevOpsLink to='https://www.digitalocean.com/' external>
                  DigitalOcean
                </DevOpsLink>{' '}
                expertise
              </li>

              <li>
                🔄 <strong>Migration & Modernization</strong> - Legacy system migration, containerization strategies, and cloud-native transformation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/devops')({
  component: HireDevOps
})
