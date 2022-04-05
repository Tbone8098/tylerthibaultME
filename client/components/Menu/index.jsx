import { cx } from '@/lib/utils'
import React, {useState} from 'react'

import Utils from '@/styles/utils.module.css'
import Style from './style.module.css'

export default function Index() {
    const [showing, setShowing] = useState(false)

    const menuArea = () => {
        return (
            <div className={cx(Style.wrapper)} onClick={() => setShowing(false)}>
                <div className={cx(Style.container)} onClick={(e) => e.stopPropagation()}>
                    <h2 className='text-2xl'>Menu</h2>
                <ul>
                    <li>About Me</li>
                    <li>Technology</li>
                    <li>Work History</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
                </div>
            </div>
        )
    }
    return (
        <div className='flex justify-between items-center p-2 bg-white'>
            <button className={cx(Utils.btn, 'bg-me-accent')}>Let's Talk</button>
            <span onClick={() => setShowing(true)}>Menu</span>
            {
                showing ?
                menuArea()
                :
                ''
            }
        </div>
    )
}
