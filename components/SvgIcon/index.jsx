import React, { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Index(props) {
    const [showing, setShowing] = useState(true)
    const { icon, text, textStyle, iconStyle } = props


    return (
        <div>
            {
                text ?
                    <div className={iconStyle} onMouseEnter={() => setShowing(false)} onMouseLeave={() => setShowing(true)}>
                        {
                            showing ?
                                <Icon icon={icon} height="50" color="white" />
                                :
                                <span className='text-white'>{text}</span>
                        }
                    </div>
                    :
                    'loading'
                }
        </div>
    )
}
