import Button from '~/components/button'
import type { Route } from './+types/home'
import { motion } from 'framer-motion'
import Thumbnail from '~/components/thumbnail'

export function meta ({}: Route.MetaArgs) {
  return [
    { title: 'Sharma Photography' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home () {
  return (
    <div className='text-gray-900 dark:text-white scroll-smooth'>
      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        <Thumbnail
          imageSrc='https://github.com/Firebolt9907/sharmaPhotography/blob/master/photos/PXL_20241219_162739125.MP.jpg?raw=true'
          description='grrrrr'
        ></Thumbnail>
        <Button
          imageSrc='https://github.com/Firebolt9907/firebolt9907.github.io/blob/react-refactor/assets/langIcons/java.svg?raw=true'
          description='grrrrr'
        ></Button>
      </motion.div>
      <div style={{ height: '4000px' }}></div>
    </div>
  )
}
