import { Link } from 'react-router-dom'
import React from 'react'
import './Detail.scss'
import { Button } from '../../1Primitives/Button/Button'

export const Detail = () => {

	const bodyText = 'this is the detail page'
	const buttonText = 'back'

	return (
		<div className='detailCont'>
			<Link to={'/'}>
				<Button
					text = { buttonText }
				/>
			</Link>
			<div className='detailBody'>
				{ bodyText }
			</div>
		</div>
	)
}
