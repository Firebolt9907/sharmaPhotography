import Button from '~/components/button'
import type { Route } from './+types/home'
import { LayoutGroup, motion } from 'framer-motion'
import Thumbnail from '~/components/thumbnail'
import fetchPhotoList from '~/scripts/fetchPhotoList'
import loadPhotos from '~/scripts/loadPhotos'
import { useEffect, useState } from 'react'
import LoadPhotos from '~/scripts/loadPhotos'
import NewReleases from '~/sections/newReleases'
import HomeHero from '~/sections/homeHero'

export function meta ({}: Route.MetaArgs) {
  return [
    { title: 'Sharma Photography' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home () {
  // const [photos, setPhotos] = useState<Element[]>([])
  // useEffect(() => {
  //   var array = loadPhotos()
  //   setPhotos(array)
  //   console.log(loadPhotos())
  // })

  return (
    <div className='text-gray-900 dark:text-white scroll-smooth'>
      <HomeHero />
      <NewReleases />
    </div>
  )
}
