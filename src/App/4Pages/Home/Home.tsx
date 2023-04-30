import { IconButton } from '../../2Components/IconButton/IconButton';
import { SubTitle } from '../../1Primitives/SubTitle/SubTitle';
import { Title } from '../../1Primitives/Title/Title';
import { Centered } from '../../3Layouts/Centered/Centered';
import { RootState } from '../../../Store/Store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.scss';

export const Home = () => {

  const { variable } = useSelector(( state : RootState ) => state.slice );
  const buttonText = 'Detail Page';
  const titleText = 'Home Page';

  return (
    <div className='homeCont'>

      <Centered>
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

      </Centered>
      

    </div>
  );
};
