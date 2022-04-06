import { cx, motion } from '@/lib/utils'
import React, { useState } from 'react'
import Image from 'next/image'
import { SvgIcon, Modal } from '..'

import Utils from '@/styles/utils.module.css'
import Style from './style.module.css'

import GitHubWhite from '../../public/img/tech/GitHubWhite.png'
import LinkedIn from '../../public/img/tech/linkedIn.png'


export default function Index() {
    const [showingPicture, setShowingPicture] = useState('visible')
    const [showingHint, setShowingHint] = useState('hidden')
    const [easterEggZindex, setEasterEggZindex] = useState('-z-10')
    const [easterEggPhrase, setEasterEggPhrase] = useState('Bummer that you cannot click on me...I am protected, find somewhere else to click in order to get to me.')
    const [easterEggSheild, setEasterEggSheild] = useState('bg-blue-500 rounded-full p-1')
    const [easterEggModal, setEasterEggModal] = useState(false)

    const easterEggTrigger = () => {
        setEasterEggZindex('')
        setEasterEggSheild('')
        setEasterEggPhrase("Congrats! you found me!")
    }

    const phaseOne = () => {
        setShowingPicture('invisible')
        setShowingHint('')
    }

    return (
        <motion.div
            className='bg-me-secondary sm:h-screen sm:flex sm:items-center sm:justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
        >
            <div className='bg-me-primary p-2 rounded-lg shadow-lg shadow-black sm:w-9/12 sm:h-5/6 sm:rounded-3xl relative z-20'>
                <div className='flex flex-col'>
                    <div className={cx(Style.line_one)}>
                    </div>
                    <div className={cx(Style.line_one_icons, 'flex flex-col gap-3')}>
                        <a href="https://github.com/Tbone8098" target='_blank' rel="noreferrer">
                            <Image src={GitHubWhite} alt="" width="35" height="35" />
                        </a>
                        <a href="https://www.linkedin.com/in/tyler-thibault-a4404178/" target='_blank' rel="noreferrer">
                            <Image src={LinkedIn} alt="" width="35" height="35" />
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center py-5 sm:items-center sm:justify-center sm:h-full'>
                    <div className='text-white mb-3 md:flex md:flex-col md:items-end'>
                        <div className='flex gap-3 md:flex-col'>
                            <h1 className={cx(Utils.me_saira, 'text-4xl sm:text-6xl pb-3 md:text-right')}><span onClick={() => easterEggTrigger()}>T</span>yler</h1>
                            <h1 className={cx(Utils.me_saira, 'text-4xl sm:text-6xl pb-3 md:text-right')}>Thibault</h1>
                        </div>
                        <div className={cx(Utils.me_sawarabi, 'sm:text-xl flex flex-col items-center')}>
                            <p>Full Stack Developer</p>
                            <p>Tech Educator</p>
                        </div>
                    </div>
                    {
                        easterEggModal &&
                        <Modal
                            content="Protected by a force field that is unbreakable. Find the trigger and turn it off to free the egg. I will give you but one hint. Instead of getting hit on I get hit off, I am not a tall drink of water, yet people still drink me. What am I?"
                            onClose={() => setEasterEggModal(false)}
                            title="Easter Egg"
                        />
                    }
                    <div className=''>
                        <div className='relative' >
                                    <div className={cx('lg:hover:animate-bounce z-10', showingPicture)} onClick={() => phaseOne()}>
                                        <img className='border-2 border-black rounded-lg shadow-lg shadow-black' src="img/thinkingMe.jpg" alt="" />
                                    </div>
                                    { easterEggSheild ?
                                        <div className={cx('flex justify-center', showingHint)}>
                                            <span className='cursor-pointer underline underline-offset-2' onClick={() => setEasterEggModal(true)}>HINT</span>
                                        </div>
                                        :
                                        <span>Congrats <span className='font-bold underline'>YOU</span> have freed the EGG</span>
                                    }
                            <div className={cx('absolute bottom-8 cursor-pointer left-20', easterEggZindex)}>
                                <a href="https://www.google.com" target='_blank' rel='noreferrer'> 
                                    <SvgIcon
                                        icon="mdi:egg-easter"
                                        iconStyle={cx("text-violet-700 float-left", easterEggSheild)}
                                        iconHeight="50"
                                    />
                                </a>
                            </div>
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
        </motion.div>
    )
}