import { Button } from '../Common/Button/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'
import "./Home.scss"

export const Home = () => {

	const { variable } = useSelector(state => state.Slice)
	const buttonText = "gotoDetial"
	const titleText = "this is the home page"

	return (
		<div className='homeCont'>
			<Link to={"/Detail"}>
				<Button
					text = { buttonText }
				/>
			</Link>
			<div className='homeBody'>
				<div className='homeTitle'>
					{ titleText }
				</div>
				<div className='homeData'>
					{ variable }
				</div>
			</div>
		</div>
	)
}
