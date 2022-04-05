import React from 'react'
// import Image from 'next/image'

import { data } from './data'
import { SvgIcon } from '../../components'


export default function Index() {
    return (
        <div className='my-8'>
            <div className='bg-white'>
                <h2 className='font-me-saira text-4xl text-center'>Tech</h2>
            </div>
            <div className='flex flex-wrap justify-center pb-8 gap-3 bg-white'>
                {
                    data.map((svg, key) => {
                        return (
                            <SvgIcon 
                            text={svg.name}
                            icon={svg.icon}
key={key}
                            />
                            // <div className='relative'>
                            //     <div className='bg-slate-500 p-3 rounded-full border-black border-2 shadow shadow-black absolute z-10 h-20 w-20 flex justify-center items-center visible hover:invisible'>
                            //         <span className='text-sm text-white'>{svg.name}</span>
                            //     </div>
                            //     <div key={key} className='bg-slate-500 p-3 rounded-full border-black border-2 shadow shadow-black flex relative'>
                            //         <Icon icon={svg.icon} height="50" color='white' />
                            //     </div>
                            // </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
