import React from 'react'
// import Image from 'next/image'

import { data } from './data'
import { SvgIcon } from '../../components'
import { motion } from '@/lib/utils'


export default function Index() {
    return (
        <motion.div
            className='my-8'
        >
            <div className='bg-white'>
                <h2 className='font-me-saira text-4xl text-center'>Tech</h2>
            </div>
            <motion.div
                className='flex flex-wrap justify-center pb-8 gap-3 bg-white'
            >
                {
                    data.map((svg, key) => {
                        return (
                            <SvgIcon
                                key={key}
                                text={svg.name}
                                icon={svg.icon}
                                iconStyle='text-white bg-me-primary p-2 rounded-full border-2 border-black shadow-md shadow-black h-20 w-20 flex justify-center items-center'
                            />
                        )
                    })
                }
            </motion.div>
        </motion.div>
    )
}
