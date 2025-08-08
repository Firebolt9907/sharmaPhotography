import { LayoutGroup, motion, type StatsRecording } from 'motion/react'
import { useEffect, useState, type FC } from 'react'
import Thumbnail from '~/components/thumbnail'
import ImageData from '~/components/enums/imageData'
import Carousel from '~/components/carousel'
import isMobile, { widthThreshold } from '~/components/scripts/isMobile'
interface GalleryProps {
    imageTypeFilter: string
}

const Gallery: FC<GalleryProps> = ({ imageTypeFilter = ""
}) => {
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
                            const imageObject = new ImageData(image.jpgUrl, image.webpUrl, image.description, image.uploadedAt, image.location ?? "", image.imageType)
                            tempImages.push(imageObject)
                        }
                        tempImages = tempImages.filter((tempImage) => tempImage.type === imageTypeFilter)
                        updateImages(tempImages)
                    }
                })
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            })
    }, [imageTypeFilter])

    return (
        <LayoutGroup>
            <motion.div
                className='columns-1 md:columns-3 sm:columns-2'
                style={{
                    columnGap: "24px",
                    margin: "40px"
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            breakInside: "avoid",
                            marginBottom: "24px",
                            display: "inline-block",
                            width: "100%"
                        }}
                    >
                        <Thumbnail imageData={image} unbounded={true} />
                    </div>
                ))}
                {images.length == 0 ? <h3>Check back later for {imageTypeFilter}s</h3> : <div></div>}
            </motion.div>
        </LayoutGroup>
    )
}
export default Gallery
