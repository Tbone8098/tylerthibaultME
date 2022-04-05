import React, { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Index(props) {
    const [showing, setShowing] = useState(true)
    const { icon, text, textStyle, iconStyle } = props


    return (
        <div>
            <div className='bg-me-primary p-2 rounded-full border-2 border-black shadow-md shadow-black h-20 w-20 flex justify-center items-center' onMouseEnter={() => setShowing(false)} onMouseLeave={() => setShowing(true)}>
                {
                    showing ? 
                    <Icon icon={icon} height="50" color="white" />
                    :
                    <span className='text-white'>{text}</span>
                }
            </div>
        </div>
    )
}
