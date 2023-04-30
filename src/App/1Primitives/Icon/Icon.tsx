import React from 'react'
import { getIcon, getViewBox } from '../../../../Assets/icons'
import { fixedIcons } from '../../../../Util/RenderHelper'
import './Icon.scss'

interface props {
    iconName : string,
    className? : string,
}

export const Icon = ({className='Icon-basic', iconName=''} : props) => {

    return (
        <div className='Icon-cont'>
            <svg className={className} viewBox={getViewBox(iconName)} xmlns='http://www.w3.org/2000/svg'>
                {getIcon(iconName)}
            </svg>
        </div>
    )
}
