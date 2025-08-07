import type { Route } from './+types/home'
import NewReleases from '~/sections/newReleases'
import HomeHero from '~/sections/homeHero'
import AboutMe from '~/sections/aboutMe'
import ContactMe from '~/sections/contactMe'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Sharma Photography' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home() {
  // const [photos, setPhotos] = useState<Element[]>([])
  // useEffect(() => {
  //   var array = loadPhotos()
  //   setPhotos(array)
  //   console.log(loadPhotos())
  // })

  return (
    <div className='text-gray-900 dark:text-white scroll-smooth'>

      <HomeHero />

      <AboutMe />

      <NewReleases />

      <ContactMe />

    </div>
  )
}
