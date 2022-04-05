import { cx, motion } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

import Style from './style.module.css'

import Close from '../../public/img/tech/close.png'

export default function Index(props) {
    const { content, onClose, title = "Title needed" } = props

    return (
        <motion.div
            className={cx(Style.wrapper)}
            onClick={() => onClose()}
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1}}
            
        >
            <div className={cx(Style.container)}>
                <div className='m-5'>
                    <div className='flex justify-between items-center sticky mb-3 border-b-2 border-black top-0 bg-white'>
                        <h2 className='text-4xl uppercase '>{title}</h2>
                        <Image className='cursor-pointer' alt='' src={Close} width="35" height='35' onClick={() => onClose()} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        {content}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
