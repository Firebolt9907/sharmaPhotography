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
        if (!response.ok) {
          return
        }
        response.json().then(data => {
          if (data && data.images && data.images.length > 0) {
            var tempImages = []
            for (const image of data.images) {
              console.log("image type" + image.imageType)
              const imageObject = new ImageData(image.jpgUrl, image.webpUrl, image.description, image.uploadedAt, image.location ?? "", image.imageType)
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
          <Thumbnail imageData={image} unbounded={false} />
        </div>
      ))} />
    </LayoutGroup>
  )
}
export default NewReleases
