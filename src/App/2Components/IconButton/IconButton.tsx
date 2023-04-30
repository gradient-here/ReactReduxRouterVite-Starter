import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '../Icon/Icon'
import './IconButton.scss'
import React from 'react'

interface props {
    className? : string,
    iconName : string,
}

export const IconButton = ({iconName, className=''}:props) => {
  return (
    <motion.div
        whileHover={{scale: 1.25}}
        className='IconButton-cont'
    >
        <Icon
            iconName={iconName}
            className={className}
        />
    </motion.div>
  )
}
