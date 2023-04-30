import { SubTitle } from '../../1Primitives/SubTitle/SubTitle';
import { Icon } from '../../1Primitives/Icon/Icon';
import { motion } from 'framer-motion';
import './IconButton.scss';
import React from 'react';

interface props {
	className? : string,
	iconName? : string,
	text? : string,
}

export const IconButton = ( { iconName='', text='', className=''} : props ) => {
  return (
    <motion.div
			whileHover={ { scale : 1.05 } }
			className='IconButton-cont'
    >
			<Icon
				iconName={ iconName }
				className={ 'Icon-basic' }
			/>
			<SubTitle
				text={ text }
				className=''
			/>
    </motion.div>
  )
}
