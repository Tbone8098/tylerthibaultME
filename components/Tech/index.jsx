import React from 'react'
import Image from 'next/image'

import { data } from './data2'

export default function Index() {
    return (
        <div className='my-8'>
            <div className='bg-white'>
                <h2 className='font-me-saira text-4xl text-center'>Tech</h2>
            </div>
            <div className='flex flex-wrap justify-center pb-8 gap-3 bg-white'>
                {
                    data.map((icon, key) => {
                        return (
                            <div className='bg-slate-500 p-3 rounded-full border-black border-2 shadow shadow-black flex'>
                                <Image src={icon} alt="" width="45" height='45' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
