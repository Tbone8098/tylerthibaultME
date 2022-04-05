import { cx } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

import Utils from '@/styles/utils.module.css'


export default function Index() {
    return (
        <div className='bg-me-secondary sm:h-screen sm:flex sm:items-center sm:justify-center'>
            <div className='bg-me-primary p-2 rounded-lg shadow-lg shadow-black sm:w-9/12 sm:h-5/6 m-2 sm:m-0 sm:rounded-3xl'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center py-5 sm:items-center sm:justify-center sm:h-full'>
                    <div className='text-white mb-3 justify-self-end'>
                        <h1 className={cx(Utils.me_saira, 'text-3xl sm:text-6xl pb-3')}>Tyler Thibault</h1>
                        <div className={cx(Utils.me_sawarabi, ' sm:text-xl')}>
                            <p>Full Stack Developer</p>
                            <p>Tech Educator</p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='border-2 border-black rounded-lg shadow-lg shadow-black' src="img/thinkingMe.jpg" alt="" />
                        </div>
                        <div className='flex justify-center gap-3 mt-3'>
                            <button className={cx(Utils.btn, 'bg-me-accent')}>Let's Talk</button>
                            <button className={cx(Utils.btn, 'bg-white')}>Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
