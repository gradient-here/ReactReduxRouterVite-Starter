import React from 'react'
import './Button.scss'

interface props {
	text : string;
}

export const Button = ({ text } : props) => {
	return (
		<div className='buttonCont'>
			{ text }
		</div>
	)
}
