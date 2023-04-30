import React from 'react'
import './Title.scss'

interface props {
    text: string,
    className?: string,
}

export const Title = ({text, className=''}:props) => {
  return (
    <div className={'Title-Text' + className}>{text}</div>
  )
}
