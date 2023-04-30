import React from 'react'
import './SubTitle.scss'

interface props {
    text: string,
    className?: string,
}

export const SubTitle = ({text, className=''}:props) => {
  return (
    <div className={'SubTitle-Text' + className}>{text}</div>
  )
}
