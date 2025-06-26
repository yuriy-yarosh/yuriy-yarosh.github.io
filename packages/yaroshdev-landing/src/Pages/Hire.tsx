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
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const HiringLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire' })

export const TechStackLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) =>
  HiringLink({ ...params, className: twMerge(`text-secondary-accent underline hover:border-transparent hover:no-underline`, params.className) })

const ElaboratePolitics = ({ full, onClick }: { full?: boolean; onClick?: () => void }) => {
  if (!full)
    return (
      <Paragraph onClick={onClick || (() => {})} className='border-transparent border-b-1 transition duration-500 ease-in-out hover:animate-pulse hover:border-accent'>
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
  const yearNow = new Date().getFullYear()
  const age = yearNow - 1991
  const xp = yearNow - 2008


  const [techDetailsVisible, setTechDetailsVisible] = useState(false)
  const [politicsVisible, setPoliticsVisible] = useState(false)

  const toggleTechDetails = () => setTechDetailsVisible(!techDetailsVisible)

  return (
    <ContentCard backTitle='Hire' catchBoundary='hire' to='/' from='/hire'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>For Hire</Heading>
        <span className='mb-4 flex flex-col gap-2 text-xl md:mb-8 md:gap-4 lg:text-2xl'>
          <div>
            <Paragraph className='mt-4 md:mt-8'>
              I'm <span className='text-accent'>{age > 80 ? 'already dead' : `${age}-year-old`}</span> Ukrainian Engineer and Solopreneur with over{' '}
              <span className='text-accent'>{xp} years</span> of software and hardware development experience.
            </Paragraph>
            <Paragraph className='my-2 md:my-4'>I specialize in:</Paragraph>
            <ul className='m-2 space-y-1 text-sm md:m-4 md:space-y-2 md:text-lg'>
              <li>
                ⚙️ <HiringLink to='highload'>Highload Applications</HiringLink> development
              </li>
              <li>
                🗃️ <HiringLink to='databases'>Database Engines</HiringLink> and Database Architecture
              </li>
              <li>
                🧠 <HiringLink to='languages'>Programming Languages</HiringLink> and <HiringLink to='compilers'>Compilers</HiringLink> design
              </li>
            </ul>

            <Paragraph>
              🚀 Pioneered the concept of{' '}
              <HiringLink to='/shift' className='text-sm md:text-lg'>
                metaiconicity
              </HiringLink>{' '}
              for modern programming languages.
            </Paragraph>
          </div>
          <span className='text-sm md:text-lg'>I do</span>
          <ul className='space-y-2 pl-2 text-sm md:space-y-3 md:pl-6 md:text-lg lg:text-2xl'>
            <li>
              🎨 <HiringLink to='frontend'>Frontend</HiringLink>{' '}
              {techDetailsVisible && (
                <>
                  <span className='text-secondary-accent md:text-lg'>(duh) in </span>
                  <span className='md:text-lg'>
                    <TechStackLink to='https://react.dev/' external>
                      React
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, </span>
                    <TechStackLink to='https://tailwindcss.com/' external>
                      TailwindCSS
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, </span>
                    <TechStackLink to='https://trpc.io/' external>
                      tRPC
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'> and </span>
                    <TechStackLink to='https://tanstack.com/' external>
                      TanStack
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'> libraries.</span>
                  </span>
                  <p className='mt-2 text-sm'>Well versed in Angular, Vue, Svelte, Astro and other frameworks, as well, but prefer React</p>
                  <p className='mt-2 text-sm'>
                    Practicing component-driven development with{' '}
                    <TechStackLink to='https://storybook.js.org/' external>
                      Storybook.js
                    </TechStackLink>
                  </p>
                </>
              )}
            </li>
            <li>
              🏗️ <HiringLink to='backend'>Backend</HiringLink>
              {techDetailsVisible && (
                <>
                  <span className='text-secondary-accent md:text-lg'> in </span>
                  <span className='md:text-lg'>
                    <span className='text-secondary-accent md:text-lg'>Go </span>
                    <TechStackLink to='https://gofiber.io/' external>
                      Fiber
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, Rust </span>
                    <TechStackLink to='https://github.com/tokio-rs/axum' external>
                      Axum
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>
                      ,{' '}
                      <TechStackLink to='https://typelevel.org/' external>
                        Typelevel
                      </TechStackLink>{' '}
                      Scala 3{' '}
                    </span>
                    <TechStackLink to='https://http4s.org/' external>
                      Http4S
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, Python </span>
                    <TechStackLink to='https://fastapi.tiangolo.com/' external>
                      FastAPI
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'> and TypeScript </span>
                    <TechStackLink to='https://hono.dev/' external>
                      Hono
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, </span>
                    <TechStackLink to='https://nitro.build/' external>
                      Nitro
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>.</span>
                  </span>
                  <p className='mt-2 text-sm'>Had some XP with almost every popular language, stack and framework.</p>
                  <p className='mt-1 text-sm'>Prefer TypeScript Node.js and Bun, Rust and Go, occasional Python for ML inference.</p>
                  <p className='mt-1 text-sm'>
                    Practice test-driven development (TDD),{' '}
                    <TechStackLink to='https://go.dev/wiki/TableDrivenTests' external>
                      table-driven testing
                    </TechStackLink>{' '}
                    and{' '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/Mutation_testing' external>
                      mutational testing
                    </TechStackLink>{' '}
                    , for any language.
                  </p>
                  <p className='mt-1 text-sm'>Prefer structured functional programming for maintainability, lower support costs and better time-to-market.</p>
                </>
              )}
            </li>
            <li>
              ⚙️ <HiringLink to='devops'>DevOps</HiringLink>
              {techDetailsVisible && (
                <>
                  <span className='text-secondary-accent md:text-lg'> with </span>
                  <TechStackLink to='https://www.terraform.io/' className='text-sm md:text-lg' external>
                    Terraform
                  </TechStackLink>
                  <span className='text-secondary-accent md:text-lg'> / </span>
                  <TechStackLink to='https://opentofu.org/' className='text-sm md:text-lg' external>
                    OpenTofu
                  </TechStackLink>
                  <span className='text-secondary-accent md:text-lg'>, </span>
                  <TechStackLink to='https://github.com/Azure/bicep' className='text-sm md:text-lg' external>
                    Azure Bicep
                  </TechStackLink>
                  <span className='text-secondary-accent md:text-lg'>, </span>
                  <TechStackLink to='https://github.com/aws/aws-cdk' className='text-sm md:text-lg' external>
                    AWS CDK
                  </TechStackLink>
                  <span className='text-secondary-accent md:text-lg'>, </span>
                  <TechStackLink to='https://cdk8s.io/' className='text-sm md:text-lg' external>
                    CDK8S
                  </TechStackLink>
                  <span className='text-secondary-accent md:text-lg'>, </span>
                  <TechStackLink to='https://github.com/hashicorp/terraform-cdk' className='text-sm md:text-lg' external>
                    CDKTF
                  </TechStackLink>
                  <p className='mt-2 text-sm'>Prefer Terraform/OpenTofu due to solid planning capabilities, better forensics, compliance and security audit.</p>
                  <p className='mt-2 text-sm'>Use AWS CDK to build cross-functional teams in TypeScript, Python and Kotlin.</p>
                </>
              )}
            </li>
            <li>
              🤖 <HiringLink to='ml'>Machine Learning</HiringLink>
              {techDetailsVisible && (
                <>
                  <span className='text-secondary-accent md:text-lg'> in </span>
                  <span className='md:text-lg'>
                    <TechStackLink to='https://www.ray.io/' external>
                      Ray
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, </span>
                    <TechStackLink to='https://jax.readthedocs.io/en/latest/' external>
                      Google Jax
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, </span>
                    <TechStackLink to='https://pytorch.org/' external>
                      PyTorch
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'> and </span>
                    <TechStackLink to='https://developer.nvidia.com/warp-python' external>
                      Nvidia Warp
                    </TechStackLink>
                  </span>
                  <br />
                  <p className='mt-2 text-sm'>practice multi-kernel development in Jax + Warp as PyTorch backends</p>
                </>
              )}
            </li>
            <li>
              📈 <HiringLink to='highload'>Highload</HiringLink>
              {techDetailsVisible && (
                <>
                  <span className='md:text-lg'>
                    <span className='text-secondary-accent md:text-lg'> in </span>
                    <TechStackLink to='https://prototype-kernel.readthedocs.io/en/latest/networking/XDP/' external>
                      XDP
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'> or </span>
                    <TechStackLink to='https://www.dpdk.org/' external>
                      DPDK
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>/</span>
                    <TechStackLink to='https://www.spdk.io/' external>
                      SPDK
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'>, C++17 </span>
                    <TechStackLink to='https://seastar.io/' external>
                      Seastar
                    </TechStackLink>
                    <span className='text-secondary-accent md:text-lg'> or Rust </span>
                    <TechStackLink to='https://libos-nuse.github.io/' external>
                      libos
                    </TechStackLink>
                    <TechStackLink to='https://github.com/microsoft/demikernel' external>
                      {' '}
                      demikernels
                    </TechStackLink>
                  </span>
                  <br />
                  <p className='mt-2 text-sm'>
                    occasionally offload to GPUs with{' '}
                    <TechStackLink to='https://developer.nvidia.com/aerial' external>
                      Nvidia Aerial
                    </TechStackLink>
                    ,{' '}
                    <TechStackLink to='https://developer.nvidia.com/nccl' external>
                      NCCL
                    </TechStackLink>{' '}
                    and FPGA{' '}
                    <TechStackLink to='https://aws.amazon.com/ec2/instance-types/f2/' external>
                      AWS F1/F2
                    </TechStackLink>{' '}
                    instances
                  </p>
                </>
              )}
            </li>
            <li>
              🧩 <HiringLink to='embedded'>Embedded</HiringLink>
              <span className='text-lg text-secondary-accent'> and </span>
              <HiringLink to='drivers'>Device Drivers</HiringLink>
              {techDetailsVisible && (
                <>
                  <p className='mt-2 text-sm'>
                    Nowadays prefer{' '}
                    <TechStackLink to='https://www.rust-lang.org/' external>
                      Rust
                    </TechStackLink>{' '}
                    with{' '}
                    <TechStackLink to='https://embassy.dev/' external>
                      Embassy
                    </TechStackLink>
                    , and considering{' '}
                    <TechStackLink to='https://github.com/Azure/azure-iot-middleware-freertos' external>
                      Azure
                    </TechStackLink>{' '}
                    and{' '}
                    <TechStackLink to='https://aws.amazon.com/freertos/' external>
                      AWS FreeRTOS
                    </TechStackLink>{' '}
                    distros too bloated.
                  </p>
                  <p className='mt-2 text-sm'>
                    Can mix-in rust for{' '}
                    <TechStackLink to='https://www.zephyrproject.org/' external>
                      Zephyr
                    </TechStackLink>
                    ,{' '}
                    <TechStackLink to='https://nuttx.apache.org/' external>
                      Apache NuttX
                    </TechStackLink>
                    , or bare-metal.
                  </p>
                  <p className='mt-2 text-sm'>
                    Prefer{' '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/Constrained_Application_Protocol' external>
                      CoAP
                    </TechStackLink>{' '}
                    or{' '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/MQTT-SN' external>
                      MQTT-SN
                    </TechStackLink>{' '}
                    with HTTP/3 transports and{' '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/Lightweight_Machine_to_Machine' external>
                      LWM2M
                    </TechStackLink>
                    {', '}
                    over{' '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/MQTT' external>
                      MQTT
                    </TechStackLink>
                    .
                  </p>
                </>
              )}
            </li>
            <li>
              🧪 <HiringLink to='simulation'>Simulation Intelligence</HiringLink>
              {techDetailsVisible && (
                <>
                  <span className='text-lg text-secondary-accent'> in </span>
                  <HiringLink to='cae'>Computer Aided Engineering</HiringLink>
                  <span className='text-lg text-secondary-accent'> (CAE)</span>
                  <p className='mt-2 text-sm'>Have some basic understanding in statistical physics and thermodynamics.</p>
                  <p className='mt-2 text-sm'>
                    Applied trendy methods, like{' '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/Lattice_Boltzmann_methods' external>
                      LBM
                    </TechStackLink>
                    {', and '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics' external>
                      SPH
                    </TechStackLink>{' '}
                    for tensor flight models validation and optimization.
                  </p>
                  <p className='mt-2 text-sm'>
                    Performed AI-aided simulation with physics-informed{' '}
                    <TechStackLink to='https://arxiv.org/abs/2406.02496' external>
                      T-KAN
                    </TechStackLink>{' '}
                    based methods, and{' '}
                    <TechStackLink to='https://en.wikipedia.org/wiki/Neural_differential_equation' external>
                      Neural ODEs
                    </TechStackLink>
                    {', '}
                    <br />
                    using commodity generative AI inference hardware, like{' '}
                    <TechStackLink to='https://aws.amazon.com/inferentia/' external>
                      AWS Inferentia
                    </TechStackLink>{' '}
                    and{' '}
                    <TechStackLink to='https://cloud.google.com/tpu' external>
                      GCP TPU
                    </TechStackLink>
                    .
                  </p>
                </>
              )}
            </li>
            <button
              type='button'
              onClick={toggleTechDetails}
              className='border-b-1 text-sm transition duration-500 ease-in-out hover:animate-pulse hover:border-accent hover:text-accent'>
              {techDetailsVisible ? 'hide' : 'show'} tech details
            </button>
          </ul>

          <div className='flex flex-wrap items-center text-sm md:text-lg'>
            <span className='flex flex-wrap'>Across various domains: </span>
            <ul className='flex flex-wrap'>
              <li className='flex items-center pl-1'>
                🚚{' '}
                <HiringLink className='px-1' to='logistics'>
                  Logistics
                </HiringLink>
                <span>,</span>
              </li>
              <li className='flex items-center pl-1'>
                📡{' '}
                <HiringLink className='px-1' to='telecom'>
                  Telecommunications
                </HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                💰{' '}
                <HiringLink className='px-1' to='fintech'>
                  Fin-Tech
                </HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                🎓{' '}
                <HiringLink className='px-1' to='edtech'>
                  Ed-Tech
                </HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                🛡️{' '}
                <HiringLink className='px-1' to='security'>
                  Security
                </HiringLink>
                <span>, </span>
              </li>
              <li className='flex items-center pl-1'>
                🧬{' '}
                <HiringLink className='pl-1' to='research'>
                  Private R&D
                </HiringLink>
                <span>.</span>
              </li>
            </ul>
          </div>

          <Paragraph>
            Building 🧱 <HiringLink to='career'>career frameworks</HiringLink>, participating in 💼 <HiringLink to='sales'>pre-sales</HiringLink>, performing 🧭{' '}
            <HiringLink to='discovery'>solution discovery</HiringLink> and 🏗️ <HiringLink to='architecture'>solution architecture</HiringLink>.
          </Paragraph>
          <Paragraph>
            📚 Training personnel in <HiringLink to='aws'>AWS</HiringLink>, <HiringLink to='gcp'>GCP</HiringLink>, <HiringLink to='azure'>Azure</HiringLink>,{' '}
            <HiringLink to='kubernetes'>Kubernetes</HiringLink> application development and operations.
          </Paragraph>
          <Paragraph>
            <span className='text-secondary-accent'>⚡ In short:</span> I&#39;m significantly overqualified for most positions currently advertised in the market.
          </Paragraph>
          <Paragraph>
            {' ❌ '}
            <HiringLink to='https://en.wikipedia.org/wiki/Non-compete_clause' external>
              Non-compete clauses
            </HiringLink>
            ,{' 🧨 '}
            <HiringLink to='https://en.wikipedia.org/wiki/Workplace_deviance' external>
              workplace deviance
            </HiringLink>{' '}
            and{' 🔒 '}
            <HiringLink to='https://www.alphabetworkersunion.org/our-wins' external>
              engineering slavery
            </HiringLink>
            , are the three most common <span className='font-bold text-red-700'>deal breakers</span> for me.
          </Paragraph>

          <ElaboratePolitics full={politicsVisible} onClick={() => setPoliticsVisible(true)} />

          <Paragraph className='mt-2 md:mt-4'>
            Mail for inquiries:
            <HiringLink to='mailto:yuriy@yarosh.dev' className='ml-2' external>
              yuriy@yarosh.dev
            </HiringLink>
          </Paragraph>
        </span>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/')({
  component: Hire
})
