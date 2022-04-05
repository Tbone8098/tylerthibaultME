import { cx } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

import Utils from '@/styles/utils.module.css'
import Style from './style.module.css'

import GitHubWhite from '../../public/img/tech/GitHubWhite.png'
import LinkedIn from '../../public/img/tech/linkedIn.png'


export default function Index() {
    return (
        <div className='bg-me-secondary sm:h-screen sm:flex sm:items-center sm:justify-center'>
            <div className='bg-me-primary p-2 rounded-lg shadow-lg shadow-black sm:w-9/12 sm:h-5/6 sm:rounded-3xl relative'>
                <div className='flex flex-col'>
                    <div className={cx(Style.line_one)}>
                    </div>
                    <div className={cx(Style.line_one_icons, 'flex flex-col gap-3')}>
                        <Image src={GitHubWhite} alt="" width="35" height="35" />
                        <Image src={LinkedIn} alt="" width="35" height="35" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center py-5 sm:items-center sm:justify-center sm:h-full'>
                    <div className='text-white mb-3 md:flex md:flex-col md:items-end'>
                        <div className='flex gap-3 md:flex-col'>
                            <h1 className={cx(Utils.me_saira, 'text-4xl sm:text-6xl pb-3 md:text-right')}>Tyler</h1>
                            <h1 className={cx(Utils.me_saira, 'text-4xl sm:text-6xl pb-3 md:text-right')}>Thibault</h1>
                        </div>
                        <div className={cx(Utils.me_sawarabi, 'sm:text-xl flex flex-col items-center')}>
                            <p>Full Stack Developer</p>
                            <p>Tech Educator</p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='border-2 border-black rounded-lg shadow-lg shadow-black' src="img/thinkingMe.jpg" alt="" />
                        </div>
                        <div className='flex justify-center gap-3 mt-3'>
                            <a href="#contact_me" className={cx(Utils.btn, 'bg-me-accent font-bold')}>Let&apos;s Talk</a>
                            <a href='https://docs.google.com/document/d/1ZRIBsqjAE5r1NFZkgL2sc_7lBOcqxr7mUmlHU4M3H3Y/edit?usp=sharing' target="_blank" rel="noreferrer" className={cx(Utils.btn, 'bg-white font-bold')}>Resume</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className={cx(Style.line_two_icons, 'flex flex-col gap-3')}>
                        <span className='text-white'>tyler.thibault@protonmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}