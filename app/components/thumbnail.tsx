import { motion } from 'framer-motion'
import { useState, type FC } from 'react'
import ShimmerButton from './subcomponents/shimmerButton'
import ImageData from '~/components/enums/imageData'

interface ThumbnailProps {
  imageData?: ImageData
  loadingIndex?: number
}

const layoutTransition = {
  type: 'spring',
  stiffness: 150,
  damping: 15
} as const

const Thumbnail: FC<ThumbnailProps> = ({
  imageData = new ImageData("", "", "", '', ''),
  loadingIndex = 0
}) => {
  const [stateOpen, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!stateOpen)
  }

  var tileContent = (
    <div>
      <motion.img
        layoutId={`image-${imageData.webpSrc}`}
        className='mx-auto object-contain'
        src={imageData.webpSrc}
        alt={imageData.webpSrc}
        style={{ height: "40vh" }}
      />
      {/* <motion.p
        layoutId={`desc-${imageSrc}`}
        className='text-center text-sm text-gray-600 dark:text-gray-300'
      >
        {description}
      </motion.p> */}
    </div>
  )

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation()

  return stateOpen ? (
    <div
      className='overlay fixed inset-0 w-full flex items-center'
      onClick={handleToggle}
      style={{ zIndex: 1000 }}
    >
      <motion.div
        className='absolute inset-0 bg-black'
        initial={{ opacity: 0, backdropFilter: 'blur(20px)' }}
        animate={{ opacity: 0.8, backdropFilter: 'blur(20px)' }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className='flex flex-row overflow-hidden items-center'
        style={{
          padding: '5%',
          maxHeight: '100vh',
          margin: 'auto'
        }}
      >
        <div style={{
          zIndex: 1001,
          marginRight: '30px',
          position: 'relative',
          width: '50vw',
          height: '75vh'
        }}>
          <motion.img
            layoutId={`image-${imageData.webpSrc}`}
            className='object-contain'
            animate={{ borderRadius: '0px' }}
            src={imageData.webpSrc}
            alt={imageData.webpSrc}
            style={{
              maxHeight: '75vh',
              maxWidth: '50vw',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <motion.img
            className='object-contain'
            initial={{ opacity: 0 }}
            animate={{ borderRadius: '0px', opacity: 1 }}
            src={imageData.jpgSrc}
            alt={imageData.webpSrc}
            style={{
              maxHeight: '75vh',
              maxWidth: '50vw',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2,
            }}
            transition={{ duration: 0.2, delay: 1 }}
          />
        </div>
        <motion.div
          // layoutId={imageSrc}
          className='modal w-xl fixed top-1/2 left-1/2 -translate-x-1 -translate-y-1/2 overflow-hidden'
          onClick={stopPropagation}
          // onMouseMove={handleMouseMove}
          initial={{
            borderRadius: '40px',
            marginLeft: '-40vw',
            opacity: 0
          }}
          animate={{
            marginLeft: '0vw',
            opacity: 1
          }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
          style={{
            position: 'sticky',
            margin: 'auto'
            // marginTop: '120px'
          }}
        >
          <motion.div
            className='p-6 shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col md:flex-row items-center gap-6'
            layoutId={`card-${imageData.webpSrc}`}
          >
            <div className='text-left w-full'>
              <motion.h3
                layoutId={`desc-${imageData.webpSrc}`}
                className='text-3xl font-bold mb-1'
              >
                {imageData.description}
              </motion.h3>
              <motion.p layoutId={`desc-u${imageData.webpSrc}`} className='text-base'>
                {imageData.location}
              </motion.p>
              <div className='flex flex-row md:flex-row items-start md:items-center gap-2 mt-4'>
                <ShimmerButton
                  content={<p>Buy</p>}
                  handleClick={() => window.open(imageData.webpSrc, '_blank')}
                  loadingIndex={0}
                  tile={false}
                  title='buy'
                />
              </div>
            </div>
            <div
              style={{
                marginLeft: 'auto',
                marginBottom: 'auto'
              }}
            >
              <ShimmerButton
                handleClick={() => handleToggle()}
                borderless={true}
                content={
                  <motion.img
                    src='https://www.svgrepo.com/show/499592/close-x.svg'
                    style={{
                      height: '30px',
                      margin: '5px 10px',
                      marginLeft: '5px',
                      filter: 'grayscale(1) invert(1)'
                    }}
                  />
                }
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  ) : (
    <motion.div
      layoutId={imageData.webpSrc}
      transition={layoutTransition}
      className='card cursor-pointer overflow-visible'
    >
      <ShimmerButton
        content={tileContent}
        title={imageData.webpSrc}
        handleClick={handleToggle}
        tile={true}
        loadingIndex={loadingIndex}
        borderless={true}
        description={imageData.description}
      />
    </motion.div>
  )
}

export default Thumbnail
