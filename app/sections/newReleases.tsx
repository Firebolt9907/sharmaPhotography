import { LayoutGroup, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Thumbnail from '~/components/thumbnail'
import ImageData from '~/components/enums/imageData'
import Carousel from '~/components/carousel'

const NewReleases: React.FC = () => {
  const [images, updateImages] = useState<ImageData[]>([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Firebolt9907/sharmaPhotographyData/refs/heads/main/images.json')
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
              const imageObject = new ImageData(image.jpgUrl, image.webpUrl, image.description, image.uploadedAt, image.location ?? "")
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
      <Carousel title={"New Releases"} content={images.map((image, index) => (
        <div
          key={index}
          style={{
            flex: "0 0 auto",
            marginTop: "50px",
          }}
        >
          <Thumbnail imageData={image} />
        </div>
      ))} />
    </LayoutGroup>
  )
}
export default NewReleases
