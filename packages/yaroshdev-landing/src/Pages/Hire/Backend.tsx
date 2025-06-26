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

export const BackendLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/backend' })

export const HireBackend = () => {
  return (
    <ContentCard catchBoundary='backend' to='/hire' from='/hire/backend'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Backend</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Comprehensive backend development solutions, delivering robust and scalable systems. Built with modern languages and frameworks to handle complex business logic, data
          processing, and API integrations with reliability and performance.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Tech Stack</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🐹 <strong>Go</strong> with{' '}
                <BackendLink to='https://gofiber.io/' external>
                  Fiber
                </BackendLink>{' '}
                framework, as a balanced option for performant and maintainable applications
              </li>
              <li>
                🦀 <strong>Rust</strong> with{' '}
                <BackendLink to='https://github.com/tokio-rs/axum' external>
                  Axum
                </BackendLink>{' '}
                framework, especially for more code-gen demanding applications using{' '}
                <BackendLink to='https://grpc.io/' external>
                  GRPC API's
                </BackendLink>{' '}
                with{' '}
                <BackendLink to='https://github.com/tokio-rs/prost' external>
                  Prost
                </BackendLink>
              </li>
              <li>
                🔥 <strong>Scala 3</strong> with{' '}
                <BackendLink to='https://typelevel.org/' external>
                  Typelevel
                </BackendLink>{' '}
                and{' '}
                <BackendLink to='https://http4s.org/' external>
                  Http4S
                </BackendLink>{' '}
                as a functional, and more ergonomic, but less performant, alternative to Rust
              </li>
              <li>
                🐍 <strong>Python</strong> with{' '}
                <BackendLink to='https://fastapi.tiangolo.com/' external>
                  FastAPI
                </BackendLink>{' '}
                for common ML inference applications.
                <span className='ml-1 inline-block'>
                  Using cost-effective xPU inference in{' '}
                  <BackendLink to='https://aws.amazon.com/ai/machine-learning/inferentia/' external>
                    AWS Inferentia
                  </BackendLink>{' '}
                  and{' '}
                  <BackendLink to='https://aws.amazon.com/ai/machine-learning/trainium/' external>
                    AWS Trainium
                  </BackendLink>
                  ,{' '}
                  <BackendLink to='https://cloud.google.com/tpu' external>
                    GCP TPU
                  </BackendLink>
                  (about twice cheaper than GPU's)
                </span>
              </li>
              <li>
                ⚡ <strong>TypeScript</strong> with{' '}
                <BackendLink to='https://hono.dev/' external>
                  Hono
                </BackendLink>{' '}
                and{' '}
                <BackendLink to='https://nitro.build/' external>
                  Nitro
                </BackendLink>{' '}
                for both{' '}
                <BackendLink to='https://bun.sh/' external>
                  Bun
                </BackendLink>{' '}
                and{' '}
                <BackendLink to='https://nodejs.org/' external>
                  Node.js
                </BackendLink>{' '}
                runtimes.
                <span className='ml-1 inline-block'>
                  Targeting various execution environments including{' '}
                  <BackendLink to='https://developers.cloudflare.com/workers/' className='ml-1 text-wrap' external>
                    CloudFlare Workers
                  </BackendLink>
                  ,{' '}
                  <BackendLink to='https://aws.amazon.com/lambda/edge/' className='ml-1 text-wrap' external>
                    AWS Lambda@Edge
                  </BackendLink>
                  , and traditional containerized deployments.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Databases & Streaming</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🗄️{' '}
                <BackendLink to='https://www.postgresql.org/' external>
                  PostgreSQL
                </BackendLink>{' '}
                (
                <BackendLink to='https://cloudnative-pg.io/' external>
                  CNPG
                </BackendLink>{' '}
                or{' '}
                <BackendLink to='https://stackgres.io/' external>
                  Stackgres
                </BackendLink>
                ) as a primary read CP database,{' '}
                <BackendLink to='https://cassandra.apache.org/' external>
                  Cassandra
                </BackendLink>{' '}
                or{' '}
                <BackendLink to='https://www.scylladb.com/' external>
                  ScyllaDB
                </BackendLink>{' '}
                for high-throughput write AP stores
              </li>
              <li>
                🌊 Event streaming with{' '}
                <BackendLink to='https://kafka.apache.org/' external>
                  Kafka
                </BackendLink>{' '}
                <BackendLink to='https://strimzi.io/' external>
                  (Strimzi)
                </BackendLink>
                , or{' '}
                <BackendLink to='https://redpanda.com/' external>
                  RedPanda
                </BackendLink>{' '}
                for event-driven architectures
              </li>
              <li>🗺️ Prefer Kubernetes cloud-native persistence solutions for operational efficiency and cost optimization</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Architecture & Practices</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ⚙️ Event-driven architecture, coupled with opinionated{' '}
                <BackendLink to='https://martinfowler.com/bliki/CQRS.html' external>
                  CQRS-ES
                </BackendLink>{' '}
                and{' '}
                <BackendLink to='https://en.wikipedia.org/wiki/Actor_model' external>
                  Actor Models
                </BackendLink>
              </li>
              <li>
                🐳 Distroless Containerization with modern{' '}
                <BackendLink to='https://slsa.dev/' external>
                  SLSA
                </BackendLink>{' '}
                provenance,{' '}
                <BackendLink to='https://www.sigstore.dev/' external>
                  SigStore
                </BackendLink>{' '}
                keyless signing and attestation
              </li>
              <li>
                🔄 Zero-downtime <BackendLink to='/hire/databases'>database migrations</BackendLink> with query routers
              </li>
              <li>
                🗃️ Managed <BackendLink to='/hire/databases'>database schema denormalization</BackendLink> - where only the active user data is denormalized
              </li>
              <li>📦 Storage Segregation - where database data is partitioned on different storage types (Archive, HDD, NVMe, etc.)</li>
              <li>
                🤖 <BackendLink to='/hire/ml'>ML-driven</BackendLink> personal-information filtering and testing fixtures population
              </li>
              <li>
                📊 Prefer{' '}
                <BackendLink to='https://grafana.com/oss/' external>
                  Grafana Labs OSS
                </BackendLink>{' '}
                solutions, -{' '}
                <BackendLink to='https://opentelemetry.io/' external>
                  OTel
                </BackendLink>{' '}
                with{' '}
                <BackendLink to='https://grafana.com/go/webinar/getting-started-with-grafana-lgtm-stack/' external>
                  LGTM
                </BackendLink>{' '}
                stack
              </li>
              <li>
                🔍 Profiling apps in production, and <BackendLink to='/hire/highload'>under load</BackendLink>
              </li>
              <li>
                🏥 Establishing{' '}
                <BackendLink to='https://k6.io/' external>
                  k6
                </BackendLink>{' '}
                driven service liveness and readiness probes
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Development Methodology</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🧪 Practice test-driven development (TDD) and component-driven development (CDD)</li>
              <li>
                📋{' '}
                <BackendLink to='https://go.dev/wiki/TableDrivenTests' external>
                  Table-driven testing
                </BackendLink>{' '}
                with distributed test runners
              </li>
              <li>
                🔬{' '}
                <BackendLink to='https://en.wikipedia.org/wiki/Mutation_testing' external>
                  Mutational testing
                </BackendLink>{' '}
                for any language
              </li>
              <li>🏗️ Prefer structured functional programming for maintainability, lower support costs and better time-to-market</li>
              <li>
                🔄 Agile works great for mature teams, and{' '}
                <BackendLink to='https://en.wikipedia.org/wiki/V-model' external>
                  V-Model
                </BackendLink>{' '}
                for less organized environments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/backend')({
  component: HireBackend
})
