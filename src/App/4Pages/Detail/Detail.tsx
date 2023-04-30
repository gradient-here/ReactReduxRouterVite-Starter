import { IconButton } from '../../2Components/IconButton/IconButton';
import { Centered } from '../../3Layouts/Centered/Centered';
import { Title } from '../../1Primitives/Title/Title';
import { Link } from 'react-router-dom';
import React from 'react';
import './Detail.scss';

export const Detail = () => {

  const bodyText = 'Detail Page';
  const buttonText = 'back';

  return (
    <div className='detailCont'>
      <Centered>
        <Link to={'/'}>
          <IconButton
            iconName = 'backArrow'
            text = { buttonText }
          />
        </Link>
        <Title
          text={ bodyText }
          className=''
        />
      </Centered>
    </div>
  );
};
