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
import { getCurrentTime } from 'Landing/Hooks'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const HiringHighlight = ({ className, children, onClick }: { className?: string; children: React.ReactNode; onClick?: () => void }) => (
  <button
    className={twMerge(
      'text-nowrap border-transparent text-accent transition duration-500 ease-in-out hover:animate-pulse hover:drop-shadow-[0_1px_2px_var(--color-accent)]',
      onClick ? 'cursor-pointer' : '',
      className
    )}
    onClick={onClick}
    onKeyDown={onClick}
    type='button'>
    {children}
  </button>
)

export const TechStackLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  ContentLink({ ...params, className: twMerge(`text-accent underline hover:border-transparent hover:no-underline`, params.className), from: '/hire' })

const ElaboratePolitics = ({ full, onClick }: { full?: boolean; onClick?: () => void }) => {
  if (!full)
    return (
      <Paragraph className='border-transparent border-b-1 transition duration-500 ease-in-out hover:animate-pulse hover:border-accent' onClick={onClick || (() => {})}>
        🛑 Collaborating with any russian-affiliated entities is an absolute <span className='font-bold text-red-600'>BIG RED NO 🛑</span>.
      </Paragraph>
    )
  return (
    <Paragraph onClick={onClick || (() => {})}>
      🛑 Collaborating with any russian-affiliated entities is an absolute <span className='font-bold text-red-600'>BIG RED NO</span>. The full-scale war and ongoing genocide in
      Ukraine, carried out by a fascist russian regime, make this unequivocally unacceptable. Acknowledging the flaws of Ukraine’s own governance does not in any way justify ethnic
      cleansing or systemic genocide—whether through military aggression, war crimes, or state-sanctioned deprivation. In the end, people die for False Truth.
    </Paragraph>
  )
}

export const Hire = () => {
  const yearNow = getCurrentTime().getFullYear()
  const age = yearNow - 1991
  const xp = yearNow - 2008

  const [techDetailsVisible, setTechDetailsVisible] = useState(false)
  const [politicsVisible, setPoliticsVisible] = useState(false)

  const toggleTechDetails = () => setTechDetailsVisible(!techDetailsVisible)

  return (
    <ContentCard backTitle='Hire' catchBoundary='hire' from='/hire' to='/'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>For Hire</Heading>
        <span className='mb-4 flex flex-col gap-2 text-xl md:mb-8 md:gap-4 lg:text-2xl'>
          <div>
            <Paragraph className='mt-4 md:mt-8'>
              I'm <span className='text-accent'>{age > 80 ? 'already dead' : `${age}-year-old`}</span> Ukrainian Engineer and Solopreneur with over{' '}
              <span className='text-accent'>{xp} years</span> of software and hardware development experience.
            </Paragraph>
            <Paragraph className='my-2 md:my-4'>My areas of specialization include:</Paragraph>
            <ul className='m-2 space-y-1 text-sm md:m-4 md:space-y-2 md:text-lg'>
              <li>
                ⚙️ <HiringHighlight>Highload Applications</HiringHighlight> development
              </li>
              <li>
                🗃️ <HiringHighlight>Database Engines</HiringHighlight> and Database Architecture
              </li>
              <li>
                🧠 <HiringHighlight>Programming Languages</HiringHighlight> and <HiringHighlight>Compilers</HiringHighlight> design
              </li>
            </ul>

            <Paragraph>
              🚀 Pioneered the concept of{' '}
              <ContentLink className='text-sm md:text-lg' from='/hire' to='/shift'>
                metaiconicity
              </ContentLink>{' '}
              for modern programming languages.
            </Paragraph>
          </div>
          <span className='text-sm md:text-lg'>Technical Expertise</span>
          <ul className='space-y-2 pl-2 text-sm md:space-y-3 md:pl-6 md:text-lg lg:text-2xl'>
            <li>
              🎨 <HiringHighlight onClick={toggleTechDetails}>Frontend</HiringHighlight>{' '}
              {techDetailsVisible && (
                <>
                  <span className='text-accent md:text-lg'>(duh) in </span>
                  <span className='md:text-lg'>
                    <TechStackLink external to='https://react.dev/'>
                      React
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, </span>
                    <TechStackLink external to='https://tailwindcss.com/'>
                      TailwindCSS
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, </span>
                    <TechStackLink external to='https://trpc.io/'>
                      tRPC
                    </TechStackLink>
                    <span className='text-accent md:text-lg'> and </span>
                    <TechStackLink external to='https://tanstack.com/'>
                      TanStack
                    </TechStackLink>
                    <span className='text-accent md:text-lg'> libraries.</span>
                  </span>
                  <p className='mt-2 text-sm'>Experienced with Angular, Vue, Svelte, Astro and other frameworks, with a preference for React</p>
                  <p className='mt-2 text-sm'>
                    Practicing component-driven development with{' '}
                    <TechStackLink external to='https://storybook.js.org/'>
                      Storybook.js
                    </TechStackLink>
                  </p>
                </>
              )}
            </li>
            <li>
              🏗️ <HiringHighlight onClick={toggleTechDetails}>Backend</HiringHighlight>
              {techDetailsVisible && (
                <>
                  <span className='text-accent md:text-lg'> in </span>
                  <span className='md:text-lg'>
                    <span className='text-accent md:text-lg'>Go </span>
                    <TechStackLink external to='https://gofiber.io/'>
                      Fiber
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, Rust </span>
                    <TechStackLink external to='https://github.com/tokio-rs/axum'>
                      Axum
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>
                      ,{' '}
                      <TechStackLink external to='https://typelevel.org/'>
                        Typelevel
                      </TechStackLink>{' '}
                      Scala 3{' '}
                    </span>
                    <TechStackLink external to='https://http4s.org/'>
                      Http4S
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, Python </span>
                    <TechStackLink external to='https://fastapi.tiangolo.com/'>
                      FastAPI
                    </TechStackLink>
                    <span className='text-accent md:text-lg'> and TypeScript </span>
                    <TechStackLink external to='https://hono.dev/'>
                      Hono
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, </span>
                    <TechStackLink external to='https://nitro.build/'>
                      Nitro
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>.</span>
                  </span>
                  <p className='mt-2 text-sm'>Experienced with most popular languages, stacks and frameworks.</p>
                  <p className='mt-1 text-sm'>Primary focus on TypeScript (Node.js and Bun), Rust and Go, with Python for ML inference.</p>
                  <p className='mt-1 text-sm'>
                    Practice test-driven development (TDD),{' '}
                    <TechStackLink external to='https://go.dev/wiki/TableDrivenTests'>
                      table-driven testing
                    </TechStackLink>{' '}
                    and{' '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/Mutation_testing'>
                      mutational testing
                    </TechStackLink>{' '}
                    , for any language.
                  </p>
                  <p className='mt-1 text-sm'>Advocate for structured functional programming to ensure maintainability, reduce support costs and improve time-to-market.</p>
                </>
              )}
            </li>
            <li>
              ⚙️ <HiringHighlight onClick={toggleTechDetails}>DevOps</HiringHighlight>
              {techDetailsVisible && (
                <>
                  <span className='text-accent md:text-lg'> with </span>
                  <TechStackLink className='text-sm md:text-lg' external to='https://www.terraform.io/'>
                    Terraform
                  </TechStackLink>
                  <span className='text-accent md:text-lg'> / </span>
                  <TechStackLink className='text-sm md:text-lg' external to='https://opentofu.org/'>
                    OpenTofu
                  </TechStackLink>
                  <span className='text-accent md:text-lg'>, </span>
                  <TechStackLink className='text-sm md:text-lg' external to='https://github.com/Azure/bicep'>
                    Azure Bicep
                  </TechStackLink>
                  <span className='text-accent md:text-lg'>, </span>
                  <TechStackLink className='text-sm md:text-lg' external to='https://github.com/aws/aws-cdk'>
                    AWS CDK
                  </TechStackLink>
                  <span className='text-accent md:text-lg'>, </span>
                  <TechStackLink className='text-sm md:text-lg' external to='https://cdk8s.io/'>
                    CDK8S
                  </TechStackLink>
                  <span className='text-accent md:text-lg'>, </span>
                  <TechStackLink className='text-sm md:text-lg' external to='https://github.com/hashicorp/terraform-cdk'>
                    CDKTF
                  </TechStackLink>
                  <p className='mt-2 text-sm'>Primary choice: Terraform/OpenTofu for robust planning capabilities, forensics, compliance and security auditing.</p>
                  <p className='mt-2 text-sm'>Leverage AWS CDK to enable cross-functional teams working in TypeScript, Python and Kotlin.</p>
                </>
              )}
            </li>
            <li>
              🤖 <HiringHighlight onClick={toggleTechDetails}>Machine Learning</HiringHighlight>
              {techDetailsVisible && (
                <>
                  <span className='text-accent md:text-lg'> in </span>
                  <span className='md:text-lg'>
                    <TechStackLink external to='https://www.ray.io/'>
                      Ray
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, </span>
                    <TechStackLink external to='https://jax.readthedocs.io/en/latest/'>
                      Google Jax
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, </span>
                    <TechStackLink external to='https://pytorch.org/'>
                      PyTorch
                    </TechStackLink>
                    <span className='text-accent md:text-lg'> and </span>
                    <TechStackLink external to='https://developer.nvidia.com/warp-python'>
                      Nvidia Warp
                    </TechStackLink>
                  </span>
                  <br />
                  <p className='mt-2 text-sm'>Practice multi-kernel development using Jax + Warp as PyTorch backends</p>
                </>
              )}
            </li>
            <li>
              📈 <HiringHighlight onClick={toggleTechDetails}>Highload</HiringHighlight>
              {techDetailsVisible && (
                <>
                  <span className='md:text-lg'>
                    <span className='text-accent md:text-lg'> in </span>
                    <TechStackLink external to='https://prototype-kernel.readthedocs.io/en/latest/networking/XDP/'>
                      XDP
                    </TechStackLink>
                    <span className='text-accent md:text-lg'> or </span>
                    <TechStackLink external to='https://www.dpdk.org/'>
                      DPDK
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>/</span>
                    <TechStackLink external to='https://www.spdk.io/'>
                      SPDK
                    </TechStackLink>
                    <span className='text-accent md:text-lg'>, C++17 </span>
                    <TechStackLink external to='https://seastar.io/'>
                      Seastar
                    </TechStackLink>
                    <span className='text-accent md:text-lg'> or Rust </span>
                    <TechStackLink external to='https://libos-nuse.github.io/'>
                      libos
                    </TechStackLink>
                    <TechStackLink external to='https://github.com/microsoft/demikernel'>
                      {' '}
                      demikernels
                    </TechStackLink>
                  </span>
                  <br />
                  <p className='mt-2 text-sm'>
                    occasionally offload to GPUs with{' '}
                    <TechStackLink external to='https://developer.nvidia.com/aerial'>
                      Nvidia Aerial
                    </TechStackLink>
                    ,{' '}
                    <TechStackLink external to='https://developer.nvidia.com/nccl'>
                      NCCL
                    </TechStackLink>{' '}
                    and FPGA{' '}
                    <TechStackLink external to='https://aws.amazon.com/ec2/instance-types/f2/'>
                      AWS F1/F2
                    </TechStackLink>{' '}
                    instances
                  </p>
                </>
              )}
            </li>
            <li>
              🧩 <HiringHighlight onClick={toggleTechDetails}>Embedded</HiringHighlight>
              <span className='text-accent text-lg'> and </span>
              <HiringHighlight onClick={toggleTechDetails}>Device Drivers</HiringHighlight>
              {techDetailsVisible && (
                <>
                  <p className='mt-2 text-sm'>
                    Current preference:{' '}
                    <TechStackLink external to='https://www.rust-lang.org/'>
                      Rust
                    </TechStackLink>{' '}
                    with{' '}
                    <TechStackLink external to='https://embassy.dev/'>
                      Embassy
                    </TechStackLink>
                    . While{' '}
                    <TechStackLink external to='https://github.com/Azure/azure-iot-middleware-freertos'>
                      Azure
                    </TechStackLink>{' '}
                    and{' '}
                    <TechStackLink external to='https://aws.amazon.com/freertos/'>
                      AWS FreeRTOS
                    </TechStackLink>{' '}
                    distributions can be overly complex for certain use cases.
                  </p>
                  <p className='mt-2 text-sm'>
                    Capable of integrating Rust with{' '}
                    <TechStackLink external to='https://www.zephyrproject.org/'>
                      Zephyr
                    </TechStackLink>
                    ,{' '}
                    <TechStackLink external to='https://nuttx.apache.org/'>
                      Apache NuttX
                    </TechStackLink>
                    , or bare-metal.
                  </p>
                  <p className='mt-2 text-sm'>
                    Recommended protocols:{' '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/Constrained_Application_Protocol'>
                      CoAP
                    </TechStackLink>{' '}
                    or{' '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/MQTT-SN'>
                      MQTT-SN
                    </TechStackLink>{' '}
                    with HTTP/3 transports and{' '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/Lightweight_Machine_to_Machine'>
                      LWM2M
                    </TechStackLink>
                    {', '}
                    over{' '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/MQTT'>
                      MQTT
                    </TechStackLink>
                    .
                  </p>
                </>
              )}
            </li>
            <li>
              🧪 <HiringHighlight onClick={toggleTechDetails}>Simulation Intelligence</HiringHighlight>
              {techDetailsVisible && (
                <>
                  <span className='text-accent text-lg'> in </span>
                  <HiringHighlight onClick={toggleTechDetails}>Computer Aided Engineering</HiringHighlight>
                  <span className='text-accent text-lg'> (CAE)</span>
                  <p className='mt-2 text-sm'>Solid foundation in statistical physics and thermodynamics.</p>
                  <p className='mt-2 text-sm'>
                    Applied trendy methods, like{' '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/Lattice_Boltzmann_methods'>
                      LBM
                    </TechStackLink>
                    {', and '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics'>
                      SPH
                    </TechStackLink>{' '}
                    for tensor flight models validation and optimization.
                  </p>
                  <p className='mt-2 text-sm'>
                    Performed AI-aided simulation with physics-informed{' '}
                    <TechStackLink external to='https://arxiv.org/abs/2406.02496'>
                      T-KAN
                    </TechStackLink>{' '}
                    based methods, and{' '}
                    <TechStackLink external to='https://en.wikipedia.org/wiki/Neural_differential_equation'>
                      Neural ODEs
                    </TechStackLink>
                    {', '}
                    <br />
                    using commodity generative AI inference hardware, like{' '}
                    <TechStackLink external to='https://aws.amazon.com/inferentia/'>
                      AWS Inferentia
                    </TechStackLink>{' '}
                    and{' '}
                    <TechStackLink external to='https://cloud.google.com/tpu'>
                      GCP TPU
                    </TechStackLink>
                    .
                  </p>
                </>
              )}
            </li>
            <button
              className='border-b-1 text-sm transition duration-500 ease-in-out hover:animate-pulse hover:border-accent hover:text-accent'
              onClick={toggleTechDetails}
              type='button'>
              {techDetailsVisible ? 'hide' : 'show'} tech details
            </button>
          </ul>

          <div className='flex flex-wrap items-center text-sm md:text-lg'>
            <span className='flex flex-wrap'>Across various domains: </span>
            <ul className='flex flex-wrap'>
              <li className='flex items-center pl-1'>
                🚚 <HiringHighlight className='px-1'>Logistics</HiringHighlight>
                <span>,</span>
              </li>
              <li className='flex items-center pl-1'>
                📡 <HiringHighlight className='px-1'>Telecommunications</HiringHighlight>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                💰 <HiringHighlight className='px-1'>Fin-Tech</HiringHighlight>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                🎓 <HiringHighlight className='px-1'>Ed-Tech</HiringHighlight>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                🛡️ <HiringHighlight className='px-1'>Security</HiringHighlight>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                🧬 <HiringHighlight className='pl-1'>Private R&D</HiringHighlight>
                <span>.</span>
              </li>
            </ul>
          </div>

          <Paragraph>
            Building 🧱 <HiringHighlight>career frameworks</HiringHighlight>, participating in 💼 <HiringHighlight>pre-sales</HiringHighlight>, performing 🧭{' '}
            <HiringHighlight>solution discovery</HiringHighlight> and 🏗️ <HiringHighlight>solution architecture</HiringHighlight>.
          </Paragraph>
          <Paragraph>
            📚 Training personnel in <HiringHighlight>AWS</HiringHighlight>, <HiringHighlight>GCP</HiringHighlight>, <HiringHighlight>Azure</HiringHighlight>,{' '}
            <HiringHighlight>Kubernetes</HiringHighlight> application development and operations.
          </Paragraph>
          <Paragraph>
            <span className='text-accent'>⚡ Summary:</span> My extensive experience and diverse skill set position me well for senior and principal engineering roles.
          </Paragraph>
          <Paragraph>
            <span className='text-accent'>Important considerations:</span> I respectfully decline opportunities involving{' '}
            <ContentLink external from='/hire' to='https://en.wikipedia.org/wiki/Non-compete_clause'>
              non-compete clauses
            </ContentLink>
            ,{' '}
            <ContentLink external from='/hire' to='https://en.wikipedia.org/wiki/Workplace_deviance'>
              toxic work environments
            </ContentLink>
            , or{' '}
            <ContentLink external from='/hire' to='https://www.alphabetworkersunion.org/our-wins'>
              unfair labor practices
            </ContentLink>
            .
          </Paragraph>

          <ElaboratePolitics full={politicsVisible} onClick={() => setPoliticsVisible(true)} />

          <Paragraph className='mt-2 md:mt-4'>
            For professional inquiries, please contact:
            <ContentLink className='ml-2' external from='/hire' to='mailto:yuriy@yarosh.dev'>
              yuriy@yarosh.dev
            </ContentLink>
          </Paragraph>
        </span>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire')({
  component: Hire
})
