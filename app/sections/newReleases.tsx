import { LayoutGroup, motion } from 'motion/react'
import Thumbnail from '~/components/thumbnail'

const NewReleases: React.FC = () => {
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
