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

export const DatabasesLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/databases' })

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
                for ultra-low latency and high-performance NoSQL operations
              </li>
              <li>
                📊 <strong>DynamoDB</strong> with{' '}
                <DatabasesLink to='https://aws.amazon.com/dynamodb/' external>
                  AWS DynamoDB
                </DatabasesLink>{' '}
                for serverless, fully managed NoSQL at scale
              </li>
              <li>
                🔍 <strong>Elasticsearch</strong> with{' '}
                <DatabasesLink to='https://www.elastic.co/' external>
                  Elasticsearch
                </DatabasesLink>{' '}
                for full-text search, analytics, and observability
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
              <li>
                ☁️ <strong>AWS Kinesis</strong> with{' '}
                <DatabasesLink to='https://aws.amazon.com/kinesis/' external>
                  AWS Kinesis
                </DatabasesLink>{' '}
                for real-time data streaming and analytics
              </li>
              <li>📊 Stream processing with Kafka Streams, Apache Flink, and ksqlDB</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Time Series & Analytics</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📈 <strong>InfluxDB</strong> with{' '}
                <DatabasesLink to='https://www.influxdata.com/' external>
                  InfluxDB
                </DatabasesLink>{' '}
                for high-performance time series data storage
              </li>
              <li>
                📊 <strong>TimescaleDB</strong> with{' '}
                <DatabasesLink to='https://www.timescale.com/' external>
                  TimescaleDB
                </DatabasesLink>{' '}
                for PostgreSQL-based time series analytics
              </li>
              <li>
                🔍 <strong>ClickHouse</strong> with{' '}
                <DatabasesLink to='https://clickhouse.com/' external>
                  ClickHouse
                </DatabasesLink>{' '}
                for real-time analytical data processing
              </li>
              <li>📊 OLAP cubes, data warehousing, and business intelligence pipelines</li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Graph & Vector Databases</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                🔗 <strong>Neo4j</strong> with{' '}
                <DatabasesLink to='https://neo4j.com/' external>
                  Neo4j
                </DatabasesLink>{' '}
                for complex relationship modeling and graph analytics
              </li>
              <li>
                🤖 <strong>Vector Databases</strong> with{' '}
                <DatabasesLink to='https://www.pinecone.io/' external>
                  Pinecone
                </DatabasesLink>
                ,{' '}
                <DatabasesLink to='https://weaviate.io/' external>
                  Weaviate
                </DatabasesLink>
                , or{' '}
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
              <li>📊 Polyglot persistence: choosing the right database for each use case</li>
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
              <li>🔧 Schema design, normalization vs. denormalization trade-offs</li>
            </ul>
          </div>
        </div>

        <Paragraph className='mt-6 text-secondary-accent text-sm'>
          Also check out my expertise in <DatabasesLink to='/hire/backend'>Backend Development</DatabasesLink>, <DatabasesLink to='/hire/devops'>DevOps practices</DatabasesLink>,
          and <DatabasesLink to='/hire/highload'>Highload Systems</DatabasesLink>.
        </Paragraph>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/databases')({
  component: HireDatabases
})
