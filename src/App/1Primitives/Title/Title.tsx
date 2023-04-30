import React from 'react';
import './Title.scss';

interface props {
  className?: string,
  text: string,
}

export const Title = ({ text, className = '' } : props) => {
  return (
    <div className={ 'Title-Text' + className }>
      { text }
    </div>
  );
};
