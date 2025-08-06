import { LayoutGroup, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Thumbnail from '~/components/thumbnail'
import ImageData from '~/components/enums/imageData'

const NewReleases: React.FC = () => {
  const [images, updateImages] = useState<ImageData[]>([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Firebolt9907/sharmaPhotography/refs/heads/master/data/images.json')
      .then(response => {
        console.log('Fetched data:', response.status)
        console.log("data: ", response.body)
        if (!response.ok) {
          return
        }
        response.json().then(data => {
          console.log("data: ", data)
          if (data && data.images && data.images.length > 0) {
            console.log("image 0: ", data.images[0])
            var tempImages = []
            for (const image of data.images) {
              const imageObject = new ImageData(image.url, image.description, image.uploadedAt, image.location ?? "")
              tempImages.push(imageObject)
            }
            updateImages(tempImages)
          }
        })
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  })

  return (
    <LayoutGroup>
      <motion.h3
        className='text-white m-10'
        style={{
          fontSize: '50px',
          fontWeight: 'bold',
          fontFamily: 'Bebas Neue',
          marginBottom: '-40px',
          marginTop: '-10px',
          position: 'sticky'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: 'spring', delay: 0.3 }}
      >
        New Releases
      </motion.h3>
      <motion.div className='grid p-10 gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {images.map((image, index) => (<Thumbnail imageData={image} />
        ))}
      </motion.div>
      <div style={{ height: '4000px' }}></div>
    </LayoutGroup>
  )
}
export default NewReleases
