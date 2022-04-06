import React, { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Index(props) {
    const [showing, setShowing] = useState(true)
    const { icon, text, textStyle, iconStyle, iconHeight='50' } = props


    return (
        <div>
            {
                text ?
                    <div className={iconStyle} onMouseEnter={() => setShowing(false)} onMouseLeave={() => setShowing(true)}>
                        {
                            showing ?
                                <Icon icon={icon} height={iconHeight}  />
                                :
                                <span className='text-white'>{text}</span>
                            }
                    </div>
                    :
                    <Icon className={iconStyle} icon={icon} height={iconHeight} />
                }
        </div>
    )
}
