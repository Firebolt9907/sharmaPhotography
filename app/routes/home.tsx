import type { Route } from './+types/home'

export function meta ({}: Route.MetaArgs) {
  return [
    { title: 'Sharma Photography' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home () {
  return <h1>Hello World</h1>
}
