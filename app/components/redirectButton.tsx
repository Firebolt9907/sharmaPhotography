import { motion, spring } from 'motion/react'
import { type FC, useState } from 'react'
import ShimmerButton from './subcomponents/shimmerButton'

interface RedirectButtonProps {
  content: React.ReactNode
  title?: string
  handleClick: React.MouseEventHandler<HTMLDivElement>
  tile?: boolean
  background?: string
  backgroundHovered?: string
  loadingIndex?: number
  borderless?: boolean
  description?: string
}

const layoutTransition = {
  type: 'spring',
  stiffness: 150,
  damping: 15
} as const

const RedirectButton: FC<RedirectButtonProps> = ({
  content,
  title = undefined,
  handleClick,
  tile = false,
  background = 'rgb(32,32,32)',
  backgroundHovered = 'rgb(55,55,55)',
  loadingIndex = 0,
  borderless = false,
  description = ''
}) => {
  const [stateOpen, setOpen] = useState(false)

  function handleToggle () {
    setOpen(!stateOpen)
    setTimeout(handleClick, 200)
  }

  var tileContent = <div>{content}</div>

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation()

  return stateOpen ? (
    <div
      className='overlay fixed inset-0 w-full flex items-center overflow-x-clip'
      onClick={handleToggle}
      style={{ zIndex: 1000000 }}
    >
      <motion.div
        className='fixed inset-0 w-screen h-screen'
        initial={{ opacity: 1, scale: 1, borderRadius: '15%' }}
        animate={{ opacity: 1, scale: 2, borderRadius: '15%' }}
        transition={{ duration: 0.4 }}
        layoutId={title}
        style={{ marginTop: '-32.5vh', background: background }}
      />
    </div>
  ) : (
    <motion.div
      layoutId={title}
      transition={layoutTransition}
      className='card cursor-pointer'
    >
      <ShimmerButton
        content={tileContent}
        title={title}
        handleClick={handleToggle}
        tile={tile}
        background={background}
        backgroundHovered={backgroundHovered}
        loadingIndex={loadingIndex}
        borderless={borderless}
        description={description}
      />
    </motion.div>
  )
}

export default RedirectButton
