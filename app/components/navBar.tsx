import React from 'react'
import ShimmerButton from '~/components/subcomponents/shimmerButton'
import { motion } from 'framer-motion'


const NavBar: React.FC = () => {
  return (
    <div className='h-20'><motion.header
      initial={{ marginTop: "-100%" }}
      animate={{ marginTop: "0%" }}
      transition={{ duration: 0.6, type: "spring" }}
      className='fixed inset-x-0 top-0 h-20 backdrop-blur z-200 flex items-center justify-between px-6' style={{ backgroundColor: "rgb(55,55,55)" }}>
      <h4 className='text-4xl' style={{ fontFamily: "Bebas Neue" }} onClick={() => { window.location.href = "/" }}>S3 - <p style={{ fontFamily: "Water Brush", display: 'inline' }}>Stroke & Snap </p><p className='text-xl inline' > by Sharma</p></h4>

      <nav className='flex row gap-3'>
        <ShimmerButton
          content={<h3>Contact Me</h3>}
          tile={false}
          title='Contact'
          handleClick={() => {
            window.location.href = '#contact'
          }}
        />
      </nav>
    </motion.header>
    </div>
  )
}

export default NavBar
