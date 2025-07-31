import Thumbnail from '~/components/thumbnail'
import fetchPhotoList from './fetchPhotoList'

function loadPhotos (path = '') {
  var photoLinks = fetchPhotoList().then(() => {
    var elements = []
    console.log("photoLinks: " + photoLinks)

    for (var photo in photoLinks) {
      elements.push(<Thumbnail imageSrc={photo} description='test1234' />)
    }
    return elements
  })
  return []
}


const LoadPhotos: React.FC = () => {
  return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {loadPhotos().map((photo) => (
            <Thumbnail imageSrc={photo} description='test1234' />
          ))}
        </div>
  )
}
export default LoadPhotos