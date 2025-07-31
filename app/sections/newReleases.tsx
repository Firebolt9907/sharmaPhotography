import { LayoutGroup, motion } from 'motion/react'
import Thumbnail from '~/components/thumbnail'

const NewReleases: React.FC = () => {
  return (
    <LayoutGroup>
      <motion.div className='grid p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        <Thumbnail
          imageSrc='https://github.com/Firebolt9907/sharmaPhotography/blob/master/photos/PXL_20241219_162739125.MP.jpg?raw=true'
          description='grrrrr'
        ></Thumbnail>
      </motion.div>
      <div style={{ height: '4000px' }}></div>
    </LayoutGroup>
  )
}
export default NewReleases
