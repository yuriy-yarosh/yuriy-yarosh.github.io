export type Event = {
  id: string
  title: string
  href: string
  description: string
  dateScheduled: Date
  status: 'scheduled' | 'hold' | 'canceled' | 're-scheduled'
}

export default [
  {
    id: 'bitsnap-demo',
    title: 'Bitsnap Demo',
    href: '/events/bitsnap-demo',
    description: '',
    dateScheduled: new Date(Date.parse('Jul 28 2025')),
    status: 'scheduled'
  }
] as Event[]
