import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shifumi/$gameId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/shifumi/$gameId"!</div>
}
