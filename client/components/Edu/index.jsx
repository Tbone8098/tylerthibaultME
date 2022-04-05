import { cx } from '@/lib/utils'
import React, { useState } from 'react'

import Utils from '@/styles/utils.module.css'

import { data } from './data'

export default function Index() {
    const [activeEdu, setActiveEdu] = useState(data[0])

    const mobileView = () => {
        return (
            <div>
                <h2 className={cx(Utils.me_saira, 'text-white text-center text-3xl')}>Education</h2>
                <div className='flex justify-evenly bg-me-primary py-3'>
                    {
                        data.map((edu, key) => {
                            return (
                                <img className={cx(activeEdu.name === edu.name && 'border-b-2 border-black', 'pb-2')} key={key} src={edu.icon} alt={edu.iconAlt} width="50" onClick={() => setActiveEdu(edu)} />
                            )
                        })
                    }
                </div>
                <div className='p-3 bg-white'>
                    <img className='float-left' src={activeEdu.icon} alt={activeEdu.iconAlt} width="150px" />
                    <p>{activeEdu.description}</p>
                </div>
            </div>
        )
    }

    const desktopView = () => {
        return (
            <div className='bg-me-secondary flex items-center justify-center'>
                <div className='bg-white text-me-secondary text-xl border-me-primary border-8 w-9/12 rounded-3xl shadow-lg shadow-black'>
                    <h2 className='text-4xl  text-center'>Education</h2>
                    <ul className='flex justify-center gap-5  cursor-pointer'>
                        {
                            data.map((edu, key) => {
                                return (
                                    <li className={edu.name === activeEdu.name && 'underline'} key={key} onClick={() => setActiveEdu(edu)}>{edu.name}</li>
                                )
                            })
                        }
                    </ul>
                    <div className='grid grid-cols-2 my-5'>
                        <div className='justify-self-center flex'>
                            {
                                activeEdu.icon.map((item, key) => {
                                    return (
                                        <div className='flex items-center'>
                                            <img key={key} src={item} alt='' style={{'max-height': '250px'}} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='self-center  px-3'>
                            <p className=''>{activeEdu.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='mt-8'>
            <div className='sm:hidden'>
                {mobileView()}
            </div>
            <div className='hidden sm:block'>
                {desktopView()}
            </div>
        </div>
    )
}
