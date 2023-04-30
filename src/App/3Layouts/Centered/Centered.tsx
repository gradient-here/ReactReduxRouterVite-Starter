import React from 'react';
import './Centered.scss';

interface props {
	children: React.ReactNode,
}

export const Centered = ({ children } : props) => {
  return (
    <div className='Centered-page'>
      { children }
    </div>
  );
};