import { createLazyFileRoute } from '@tanstack/react-router'
import AppLayout from '../components/functional/AppLayout'

export const Route = createLazyFileRoute('/shifumi')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppLayout />
}
