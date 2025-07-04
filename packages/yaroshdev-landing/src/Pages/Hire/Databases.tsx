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

export const DatabasesLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  ContentLink({ ...params, from: '/hire/databases', underline: true })

export const HireDatabases = () => {
  return (
    <ContentCard catchBoundary='databases' to='/hire' from='/hire/databases'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Databases</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          I specialize in modern database architectures, distributed systems, and cloud-native data solutions with expertise across SQL, NoSQL, and streaming platforms:
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Relational Databases</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🗄️ <strong>PostgreSQL</strong> with{' '}
                <DatabasesLink to='https://www.postgresql.org/' external>
                  PostgreSQL
                </DatabasesLink>{' '}
                as primary ACID-compliant database with advanced features
              </li>
              <li>
                ☁️ <strong>Cloud-Native PostgreSQL</strong> with{' '}
                <DatabasesLink to='https://cloudnative-pg.io/' external>
                  CNPG
                </DatabasesLink>{' '}
                or{' '}
                <DatabasesLink to='https://stackgres.io/' external>
                  Stackgres
                </DatabasesLink>{' '}
                for Kubernetes-native deployments
              </li>
              <li>🔄 Advanced PostgreSQL features: JSONB, full-text search, partitioning, replication</li>
              <li>📊 Performance optimization: query tuning, indexing strategies, connection pooling</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>NoSQL & Distributed Databases</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔗 <strong>Cassandra</strong> with{' '}
                <DatabasesLink to='https://cassandra.apache.org/' external>
                  Apache Cassandra
                </DatabasesLink>{' '}
                for high-throughput write workloads and AP (Availability/Partition tolerance) systems
              </li>
              <li>
                ⚡ <strong>ScyllaDB</strong> with{' '}
                <DatabasesLink to='https://www.scylladb.com/' external>
                  ScyllaDB
                </DatabasesLink>{' '}
                for ultra-low latency and high-performance NoSQL operations, as a cost-effective replacement for DynamoDB
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Event Streaming & Message Brokers</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🌊 <strong>Apache Kafka</strong> with{' '}
                <DatabasesLink to='https://kafka.apache.org/' external>
                  Kafka
                </DatabasesLink>{' '}
                and{' '}
                <DatabasesLink to='https://strimzi.io/' external>
                  Strimzi
                </DatabasesLink>{' '}
                for event-driven architectures and stream processing
              </li>
              <li>
                🐼 <strong>RedPanda</strong> with{' '}
                <DatabasesLink to='https://redpanda.com/' external>
                  RedPanda
                </DatabasesLink>{' '}
                as a high-performance Kafka-compatible streaming platform
              </li>
              <li>📊 Stream processing with Apache Flink and Apache Datafusion</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Time Series & Analytics</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📈 <strong>CitusDB</strong> - PostgreSQL-based distributed time series analytics and horizontal scaling
              </li>
              <li>
                ⚡ <strong>Stream Processing</strong> - Custom analytics pipelines with{' '}
                <DatabasesLink to='https://flink.apache.org/' external>
                  Apache Flink
                </DatabasesLink>{' '}
                and{' '}
                <DatabasesLink to='https://arrow.apache.org/datafusion/' external>
                  Apache DataFusion
                </DatabasesLink>{' '}
                for real-time data processing
              </li>
              <li>
                📊 <strong>Data Warehousing</strong> - OLAP cubes, dimensional modeling, and business intelligence pipelines
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Graph & Vector Databases</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🤖 <strong>Custom Vector Databases</strong> or just{' '}
                <DatabasesLink to='https://github.com/pgvector/pgvector' external>
                  pgvector
                </DatabasesLink>{' '}
                for AI/ML embeddings
              </li>
              <li>🔍 Knowledge graphs and semantic search implementations</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Database Architecture Patterns</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🎨 <strong>CQRS-ES</strong> with{' '}
                <DatabasesLink to='https://martinfowler.com/bliki/CQRS.html' external>
                  Command Query Responsibility Segregation
                </DatabasesLink>{' '}
                and Event Sourcing patterns
              </li>
              <li>🔄 Database per service pattern for microservices architectures</li>
              <li>⚡ Read replicas, sharding, and horizontal scaling strategies</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Cloud-Native & Operations</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🗺️ <strong>Kubernetes Operators</strong> for database lifecycle management
              </li>
              <li>🔒 Database security: encryption at rest/transit, access controls, audit logging</li>
              <li>💾 Backup and disaster recovery strategies with point-in-time recovery</li>
              <li>📊 Monitoring and observability with Prometheus, Grafana, and custom metrics</li>
              <li>⚙️ Infrastructure as Code for database provisioning and configuration</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Performance & Optimization</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🔍 Query optimization, execution plan analysis, and index tuning</li>
              <li>📊 Connection pooling, caching strategies, and read/write splitting</li>
              <li>⚡ Database profiling, slow query analysis, and performance benchmarking</li>
              <li>🔧 Scalable schema designs with managed denormalization</li>
              <li>🚀 Custom High-performance database engines with custom storage engines and FPGA acceleration</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/databases')({
  component: HireDatabases
})
