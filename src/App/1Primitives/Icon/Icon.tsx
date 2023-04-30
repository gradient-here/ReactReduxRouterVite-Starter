import { getIcon, getViewBox } from '../../../Assets/icons';
import React from 'react';
import './Icon.scss';

interface props {
	className? : string,
	iconName : string,
}

export const Icon = ( { className='Icon-basic', iconName='' } : props ) => {

    return (
			<div className='Icon-cont'>
				<svg 
					className={ className } 
					viewBox={ getViewBox(iconName) } 
					xmlns='http://www.w3.org/2000/svg'
				>
					{ getIcon(iconName) }
				</svg>
			</div>
    )
}
