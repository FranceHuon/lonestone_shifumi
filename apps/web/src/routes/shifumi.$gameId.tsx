import { createFileRoute } from '@tanstack/react-router'
import Layout from '../components/ui/Layout'

export const Route = createFileRoute('/shifumi/$gameId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout></Layout>
}
