import NewReleases from '~/sections/newReleases'
import HomeHero from '~/sections/homeHero'
import AboutMe from '~/sections/aboutMe'
import ContactMe from '~/sections/contactMe'
import type { Route } from '../+types/root'
import { useEffect, useState } from 'react'
import CustomImageData from '~/components/enums/imageData'
import Gallery from '~/sections/gallery'
import NavBar from '~/components/navBar'


export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Photos - Sharma Photography' },
    { name: 'description', content: 'Browse our photography collection' }
  ]
}

export default function Paintings() {

  return (
    <div className='text-gray-900 dark:text-white'>

      <NavBar />

      <Gallery imageTypeFilter={"painting"} />

      <ContactMe />

    </div>
  )
}
