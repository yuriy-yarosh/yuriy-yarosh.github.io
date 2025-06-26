export type Event = {
  id: string
  title: string
  href: string
  description: string
  dateScheduled: Date | null
  status: 'scheduled' | 'hold' | 'canceled' | 're-scheduled'
}

export default [
  {
    id: 'thenplan',
    title: 'ThenPlan',
    href: '/events/thenplan',
    description: 'Universal FinOps service.',
    dateScheduled: null,
    status: 'scheduled'
  },
  {
    id: 'bitsnap',
    title: 'Bitsnap',
    href: '/events/bitsnap',
    description: 'Evolution of modern agent-driven business intelligence.',
    dateScheduled: null,
    status: 'scheduled'
  },
  {
    id: 'rcna',
    title: 'RCNA',
    href: '/events/rcna',
    description: `Affordable and "Simple" Kubernetes.`,
    dateScheduled: null,
    status: 'scheduled'
  }
] as Event[]
