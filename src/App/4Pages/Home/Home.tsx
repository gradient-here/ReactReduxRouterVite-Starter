import { IconButton } from '../../2Components/IconButton/IconButton';
import { SubTitle } from '../../1Primitives/SubTitle/SubTitle';
import { Title } from '../../1Primitives/Title/Title';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.scss';
import { RootState } from '../../../Store/Store';

export const Home = () => {

	const { variable } = useSelector((state: RootState) => state.slice);
	const buttonText = 'Detail Page';
	const titleText = 'Home Page';

	return (
		<div className='homeCont'>
			
			<Link to={ '/Detail' }>
				<IconButton
					iconName = 'dashboard'
					text = { buttonText }
				/>
			</Link>

			<div className='homeBody'>
				<Title
					text={ titleText }
					className='Bold'
				/>
				<SubTitle
					text={ variable }
					className=''
				/>
			</div>

		</div>
	)
};
