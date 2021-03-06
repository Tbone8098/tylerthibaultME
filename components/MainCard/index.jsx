import { cx, motion } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { SvgIcon } from '..'


import Utils from '@/styles/utils.module.css'
import Style from './style.module.css'

import GitHubWhite from '../../public/img/tech/GitHubWhite.png'
import LinkedIn from '../../public/img/tech/linkedIn.png'


export default function Index(props) {
    const { changeEggState, egg } = props
    const [easterEgg, setEasterEgg] = useState(egg)

    useEffect(() => {
        setEasterEgg(egg)
    }, [egg])
    
    useEffect(() => {
        if (egg.eg1 && egg.eg2 && egg.eg3 && egg.eg4 && egg.eg5){
            changeEggState({
                Zindex: '',
                sheild: '',
            })
        }
    }, [easterEgg.eg5])


    return (
        <>
            {
                easterEgg ?
                    !easterEgg['eggClick'] ?
                        <motion.div
                            className='bg-me-secondary sm:h-screen sm:flex sm:items-center sm:justify-center'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeIn", duration: 2 }}
                        >
                            <div className={cx('bg-me-primary p-2 rounded-lg shadow-lg shadow-black sm:w-9/12 sm:h-5/6 sm:rounded-3xl relative', Style.main)}>
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
                                    
                                    <div className=''>
                                        <div className='relative' >
                                            <div className={cx('lg:hover:animate-bounce z-10', easterEgg['showingPicture'])} onClick={() => changeEggState({
                                                showingPicture: 'invisible',
                                                eggHunt: true,
                                                showHint: true,
                                                h1Active: true,
                                                currentHint: "Protected by a force field that is unbreakable the golden egg lays. Follow the clues crack the code and you will know more about me and recieve a suprise. The current hint will in the top left corner if you need to look at it again. PREFACE: The next series of clues will be found in the Education section of this site. Click on the word that answers the riddle. CLUE 1: Everybody has it until they do not, and when they do not, they do not care."
                                            })}>
                                                <img className='border-2 border-black rounded-lg shadow-lg shadow-black' src="img/thinkingMe.jpg" alt="" />
                                            </div>
                                            {/* {easterEgg['sheild'] ?
                                                <div className={cx('flex justify-center', easterEgg['showingHint'])}>
                                                    <span className='cursor-pointer underline underline-offset-2' onClick={() => changeEggState({
                                                        h1Modal: true,
                                                        h1Active: true,
                                                    })}>HINT</span>
                                                </div>
                                                :
                                                <div className='flex justify-center'>
                                                    <span>Congrats <span className='font-bold underline'>YOU</span> have freed the EGG</span>
                                                </div>
                                            } */}
                                            <div className={cx('absolute bottom-8 cursor-pointer left-0', easterEgg['Zindex'])}>
                                                <div onClick={() => changeEggState({ eggClick: true })}>
                                                    <SvgIcon
                                                        icon="mdi:egg-easter"
                                                        iconStyle={cx("text-yellow-200 float-left", easterEgg['sheild'])}
                                                        iconHeight="200"
                                                    />
                                                </div>
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
                        :
                        <motion.div
                            className='bg-me-secondary sm:h-screen sm:flex sm:items-center sm:justify-center relative'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeIn", duration: 2 }}
                        >   
                            <motion.div
                                className={cx('bg-me-primary p-2 rounded-lg shadow-lg shadow-black sm:w-9/12 sm:h-5/6 sm:rounded-3xl relative', Style.main)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: "easeIn", duration: 2 }}
                            >
                                <img className='w-full h-full rounded-xl' src="https://th.bing.com/th/id/R.392affaa01eb23ae734f75eff05be055?rik=lq5QgAteknwUXQ&riu=http%3a%2f%2fedit911.com%2fwp-content%2fuploads%2f2015%2f03%2fI-Am-Invincible-GoldenEye.gif%3f4dbbde&ehk=fhHJw2mQ4T9oGlEwNwhkhkeldj8npjw86dxGXW01%2fEA%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            </motion.div>
                        </motion.div>
                    :
                    'loading'
            }
        </>
    )
}