import NewReleases from '~/sections/newReleases'
import HomeHero from '~/sections/homeHero'
import AboutMe from '~/sections/aboutMe'
import ContactMe from '~/sections/contactMe'
import type { Route } from '../+types/root'


export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Sharma Photography' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home() {
  return (
    <div className='text-gray-900 dark:text-white scroll-smooth'>

      <HomeHero />

      <AboutMe />

      <NewReleases />

      <ContactMe />

    </div>
  )
}
