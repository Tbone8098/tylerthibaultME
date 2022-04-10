import React, { useState, useEffect } from 'react'
import { cx } from '@/lib/utils'
import Image from 'next/image'
import { getEgg, setEgg } from 'helpers/egg'

import Utils from '@/styles/utils.module.css'

import { Modal } from '../'

import { data } from './data'

export default function Index(props) {
    const [activeEdu, setActiveEdu] = useState(data[0])
    const [easterEgg, setEasterEgg] = useState()

    useEffect(() => {
        let egg = getEgg()
        setEasterEgg(egg)
    })

    const mobileView = () => {
        return (
            <div>
                <h2 className={cx(Utils.me_saira, 'text-white text-center text-3xl')}>Education</h2>
                <div className='flex justify-evenly bg-me-primary py-3'>
                    {
                        data.map((edu, key) => {
                            return (
                                <div key={key}>
                                    {
                                        edu.icon.map((item, key2) => {
                                            return (
                                                <div key={key2} className='flex items-center' onClick={() => setActiveEdu(edu)}>
                                                    <img src={item} alt='' style={{ 'maxheight': '250px' }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='p-3 bg-white '>
                    <div className='float-left mr-3'>
                        {
                            activeEdu.icon.map((item, key) => {
                                return (
                                    <div key={key} className='flex items-center'>
                                        <img src={item} alt='' style={{ 'maxheight': '100px' }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    {activeEdu.description}
                </div>
            </div>
        )
    }

    const something = () => {
        console.log("seomthing");
    }

    const desktopView = () => {
        return (
            <div className='bg-me-secondary grid grid-cols-12 justify-center'>
                <div className='col-span-1'>
                    {easterEgg && easterEgg.eg1 &&
                        <>
                            <p className='text-2xl text-yellow-400'>Life</p>
                        </>
                    }
                    {
                        easterEgg && easterEgg.eg2 &&
                        <>
                            <p className='text-2xl text-yellow-400'>Long</p>
                        </>
                    }
                    {
                        easterEgg && easterEgg.eg3 &&
                        <>
                            <p className='text-2xl text-yellow-400'>Learner</p>
                        </>
                    }
                </div>
                <div className='bg-white col-span-10 flex flex-col w-full text-me-secondary text-xl border-me-primary border-8 rounded-3xl shadow-lg shadow-black'>
                    <h2 className='text-4xl  text-center'>Education</h2>
                    <ul className='flex justify-center gap-5  cursor-pointer'>
                        {
                            data.map((edu, key) => {
                                return (
                                    <li className={edu.name === activeEdu.name ? 'text-me-accent' : 'hover:text-white hover:border-gray-400 hover:rounded-xl px-2 hover:border-2 hover:bg-me-primary'} key={key} onClick={() => setActiveEdu(edu)}>{edu.name}</li>
                                )
                            })
                        }
                    </ul>
                    <div className='grid grid-cols-2 my-5'>
                        <div className='justify-self-center flex'>
                            {
                                activeEdu.icon.map((item, key) => {
                                    return (
                                        <div key={key} className='flex items-center'>
                                            <div>
                                                <Image src={item} width="250" height="250" alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='self-center  px-3'>
                            {activeEdu.description}
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
