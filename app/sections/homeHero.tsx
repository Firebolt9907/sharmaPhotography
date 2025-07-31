import { LayoutGroup, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const HomeHero: React.FC = () => {
  const maxBorderRadius = 30
  const maxScale = 0.9
  const maxTopMargin = 180
  const scrollModifier = 0.006
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrollpos' + window.scrollY)
      console.log('index: ' + Math.min(window.scrollY * scrollModifier))
      setScrollY(Math.min(window.scrollY * scrollModifier, 1))
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <LayoutGroup>
      <div className='h-screen w-screen relative'>
        <motion.div
          animate={{
            borderRadius: `${scrollY * maxBorderRadius}px`,
            scale: maxScale + (1 - scrollY) * (1 - maxScale),
            marginTop: Math.min(scrollY / scrollModifier, maxTopMargin)
          }}
          style={{ overflow: 'hidden' }}
          transition={{ duration: 0 }}
        >
          <motion.img
            className='h-screen w-screen object-cover'
            src='https://github.com/Firebolt9907/sharmaPhotography/blob/master/photos/PXL_20250728_215412293.MP.jpg?raw=true'
            initial={{ opacity: 0, borderRadius: '20px', scale: 0.9 }}
            animate={{
              opacity: 1,
              borderRadius: '0px',
              scale: 1
            }}
          />
          <motion.div
            className='h-screen w-screen absolute top-0'
            style={{
              backdropFilter: `blur(${scrollY * 20}px)`,
              WebkitTransform: 'translate3d(0, 0, 0);'
            }}
          ></motion.div>
        </motion.div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col'>
          <motion.h1
            className='text-white'
            style={{
              fontSize: '10vw',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Bebas Neue'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: 'spring', delay: 0.3 }}
          >
            Sharma Photography
          </motion.h1>
          <motion.h2
            className='text-white w-screen'
            style={{ fontSize: '5vw', fontWeight: 'bold', textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: 'spring', delay: 0.4 }}
          ></motion.h2>
        </div>
        <motion.div animate={{ opacity: 1 - scrollY }}>
          <motion.p
            className='absolute left-1/2 transform -translate-x-1/2 '
            style={{
              rotateX: 180,
              textAlign: 'center',
              fontSize: '80px'
            }}
            initial={{ bottom: '10px' }}
            animate={{ bottom: '40px' }}
            transition={{
              repeatType: 'reverse',
              repeat: Infinity,
              duration: 1
            }}
          >
            ^
          </motion.p>
        </motion.div>
      </div>
    </LayoutGroup>
  )
}
export default HomeHero
