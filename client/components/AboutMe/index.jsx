import { cx } from '@/lib/utils'
import React, { useState } from 'react'

import Utils from '@/styles/utils.module.css'
import { Modal } from '../../components'
import { historyText, aboutMe } from './data'

export default function Index() {
    const [historyModalView, setHistoryModalView] = useState(false)

    const mobileView = () => {
        return (
            <div>
                <div>
                    <h2 className={cx(Utils.me_saira, 'bg-me-primary p-3 text-center text-3xl text-white')}>About Me</h2>
                </div>
                <div className='bg-white flex flex-col gap-3 p-3'>
                    {aboutMe}
                    <div className='flex justify-center'>
                        <button className={cx(Utils.btn, 'w-fit bg-me-accent')} onClick={() => setHistoryModalView(true)}>My History</button>
                    </div>
                </div>
            </div>
        )
    }

    const desktopView = () => {
        return (
            <div className='bg-me-primary text-white flex flex-col items-center py-8'>
                <h2 className='text-4xl font-me-saira py-3'>About Me</h2>
                <div className='w-6/12 flex flex-col gap-3'>
                    {aboutMe}
                    <div className='flex justify-center'>
                        <button className={cx(Utils.btn, 'w-fit bg-me-accent')} onClick={() => setHistoryModalView(true)}>My History</button>
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

            <div className='sm:hidden'>
                {mobileView()}
            </div>
            <div className='hidden sm:block'>
                {desktopView()}
            </div>
        </div>
    )
}
