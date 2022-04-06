import { cx } from '@/lib/utils'
import React, { useState } from 'react'
import Image from 'next/image'

import Utils from '@/styles/utils.module.css'
import { Modal } from '../../components'
import { historyText, aboutMe } from './data'

import armsCrossedMe from '../../public/img/armsCrossedMe.png'

export default function Index() {
    const [historyModalView, setHistoryModalView] = useState(false)

    const view = () => {
        return (
            <div className='bg-me-primary flex flex-col items-center relative'>
                <div className='md:w-6/12 w-full'>
                    <div>
                        <h2 className={cx(Utils.me_saira, 'bg-me-primary p-3 text-center text-3xl text-white')}>About Me</h2>
                    </div>
                    <div className='bg-white md:bg-me-primary md:text-white flex flex-col gap-3 p-3'>
                        {aboutMe}
                        <div className='flex justify-center gap-5'>
                            <button className={cx(Utils.btn, 'w-fit bg-white text-black')} onClick={() => setHistoryModalView(true)}>My History</button>
                            <a className={cx(Utils.btn, 'bg-me-secondary text-white')} href="http://theadventureawaits.live/" rel="noreferrer" target="_blank">Our Blog</a>
                        </div>
                    </div>
                    <div className='absolute bottom-0 md:left-4 lg:left-20 hidden md:inline-block'>
                        <Image src={armsCrossedMe} alt="" height="300" width="150" />
                    </div>
                </div>
            </div>
        )
    }

    const historyModal = () => {
        return (
            <>
                {historyText}
            </>
        )
    }

    return (
        <div className='mt-8'>
            {historyModalView && <Modal content={historyModal()} onClose={() => setHistoryModalView(false)} title="My History" />}

            <div className=''>
                {view()}
            </div>
        </div>
    )
}
