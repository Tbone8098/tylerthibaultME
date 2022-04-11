import React, { useState, useEffect } from 'react'
import { cx } from '@/lib/utils'
import Image from 'next/image'
import { getEgg } from 'helpers/egg'

import Utils from '@/styles/utils.module.css'

import { Modal } from '../'

import { data } from './data'
import UW from '../../img/UWIcon.png'
import Dojo from '../../img/dojoIcon.png'
import Corban from '../../img/corbanIcon.png'
import SPH from '../../img/sphIcon.png'


export default function Index(props) {
    const { changeEggState, egg } = props
    const [activeEdu, setActiveEdu] = useState('University of Washington')
    const [easterEgg, setEasterEgg] = useState()

    useEffect(() => {
        setEasterEgg(egg)
    }, [egg])

    const hints = [
        'CLUE 2: Life if this when you are young and it is not when you are old.',
        'CLUE 3: "The more I know, the more I know I do not know." ~ Socrates',
        'PREFACE: The next clue will be answered in the work experience section. CLUE 3: In scripture the Eagle is used for for metaphorical flight. I am a number that holds great significans within the scriptures. CLUE 4:  When in a ship you do not want to be this direction. CLUE 5: You only have one clue left.'
    ]

    const eggUpdate = (num) => {
        let egg = getEgg()
        if (egg.hasOwnProperty(`h${num}Active`)) {
            let key = `eg${num}`
            let next = `h${num + 1}Active`
            changeEggState({
                [key]: true,
                [next]: true,
                showHint: true,
                currentHint: hints[num - 1]
            })
        }
    }

    const mobileView1 = () => {
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

    const mobileView = () => {
        return (
            <div>
                <h2 className={cx(Utils.me_saira, 'text-white text-center text-3xl')}>Education</h2>
                <div className='flex justify-evenly bg-me-primary py-3'>
                    <ul>
                        <li>
                            <div className={cx('inline-block', activeEdu === 'University of Washington' && 'border-b-2 border-white')}>
                                <Image src={UW} alt="" width="75" height="75" onClick={() => setActiveEdu('University of Washington')} />
                            </div>
                            <div className={cx('inline-block', activeEdu === 'Coding Dojo' && 'border-b-2 border-white')}>
                                <Image src={Dojo} alt="" width="75" height="75" onClick={() => setActiveEdu('Coding Dojo')} />
                            </div>
                            <div className={cx('inline-block', activeEdu === 'Corban University & Universitas Pelita Harapan' && 'border-b-2 border-white')} onClick={() => setActiveEdu('Corban University & Universitas Pelita Harapan')} >
                                <Image src={Corban} alt="" width="75" height="75" />
                                <Image src={SPH} alt="" width="75" height="75" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-3 bg-white '>
                    <div className=''>
                        {
                            activeEdu === 'University of Washington' &&
                            <div>
                                <div>
                                    <p>I attended UW after I finished my first bootcamp at Coding Dojo. UW was a great experience because it allowed me to focus on the REACT framework which quickly became my favorite frontend framework after my MERN stack experience. It was a slower paced bootcamp compared to the hyper fast timeline the Coding Dojo offers. This slower pace really allowed for more exploration into the REACT suite. React, like python, has found a special place in my <span onClick={() => eggUpdate(1)}>life</span>.</p>
                                </div>
                            </div>
                        }
                        {
                            activeEdu === 'Coding Dojo' &&
                            <div>
                                <div>
                                    <p>I attened Coding Dojo in order to perform a career change, this only partially worked (as I am now teching, my old job, at Coding Dojo). The Dojo was an amazing experience, it was intense and made for some long days even though I came into it with some self-learned knowlege. In just three and a half short months, which felt <span onClick={() => eggUpdate(2)} >long</span>, we covered Web Fundamentals (2 weeks), Python using the Django framework (4 weeks), MERN which stands for Mongo, Express, React, and Nodejs (4 weeks), and C# with ASP.NET as framework (4 weeks).</p>
                                </div>
                            </div>
                        }
                        {
                            activeEdu === 'Corban University & Universitas Pelita Harapan' &&
                            <div>
                                <div>
                                    <p>I attended UPH while living in Indonesia. The program I went through was in conjunction with Corban University and therefor my degree actually came from Corban. UPH was a tough experience due to a multitude of factors. Living in a different culture being a huge challenge which brought many rewarding learning experiences. Aside from the cultural differences the schooling itself was challenging. These challenges provided many opportunities for me to grow as a person and as an educator, giving me a worldview that diverse and helping me be a <span onClick={() => eggUpdate(3)}>learner</span> at every turn.</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='flex gap-5 justify-center'>
                {easterEgg && easterEgg.eg1 &&
                    <span className='text-2xl text-center text-yellow-400'>Life</span>
                }
                {
                    easterEgg && easterEgg.eg2 &&
                    <span className='text-2xl text-center text-yellow-400'>Long</span>
                }
                {
                    easterEgg && easterEgg.eg3 &&
                    <span className='text-2xl text-center text-yellow-400'>Learner</span>
                }
                </div>
            </div>
        )
    }

    const desktopView = () => {
        return (
            <div className='bg-me-secondary grid grid-cols-12 justify-center items-center'>
                <div className='col-span-1'>
                    {easterEgg && easterEgg.eg1 &&
                        <>
                            <p className='text-2xl text-center text-yellow-400'>Life</p>
                        </>
                    }
                    {
                        easterEgg && easterEgg.eg2 &&
                        <>
                            <p className='text-2xl text-center text-yellow-400'>Long</p>
                        </>
                    }
                    {
                        easterEgg && easterEgg.eg3 &&
                        <>
                            <p className='text-2xl text-center text-yellow-400'>Learner</p>
                        </>
                    }
                </div>
                <div className='bg-white col-span-10 flex flex-col w-full text-me-secondary text-xl border-me-primary border-8 rounded-3xl shadow-lg shadow-black'>
                    <h2 className='text-4xl  text-center'>Education</h2>
                    <ul className='flex justify-center gap-5  cursor-pointer'>
                        {/* {
                            data.map((edu, key) => {
                                return (
                                    <li className={edu.name === activeEdu.name ? 'text-me-accent' : 'hover:text-white hover:border-gray-400 hover:rounded-xl px-2 hover:border-2 hover:bg-me-primary'} key={key} onClick={() => setActiveEdu(edu)}>{edu.name}</li>
                                    )
                                })
                            } */}
                        <ul className='flex gap-5'>
                            <li className={activeEdu === 'University of Washington' ? 'text-me-accent' : 'hover:text-white hover:border-gray-400 hover:rounded-xl px-2 hover:border-2 hover:bg-me-primary'} onClick={() => setActiveEdu('University of Washington')}>University of Washington</li>
                            <li className={activeEdu === 'Coding Dojo' ? 'text-me-accent' : 'hover:text-white hover:border-gray-400 hover:rounded-xl px-2 hover:border-2 hover:bg-me-primary'} onClick={() => setActiveEdu('Coding Dojo')}>Coding Dojo</li>
                            <li className={activeEdu === 'Corban University & Universitas Pelita Harapan' ? 'text-me-accent' : 'hover:text-white hover:border-gray-400 hover:rounded-xl px-2 hover:border-2 hover:bg-me-primary'} onClick={() => setActiveEdu('Corban University & Universitas Pelita Harapan')}>Corban University & Universitas Pelita Harapan</li>
                        </ul>
                    </ul>
                    <div className='grid grid-cols-2 my-5'>
                        <div className='justify-self-center flex'>
                            {/* {
                                activeEdu.icon.map((item, key) => {
                                    return (
                                        <div key={key} className='flex items-center'>
                                            <div>
                                                <Image src={item} width="250" height="250" alt="" />
                                                </div>
                                                </div>
                                                )
                                            })
                                        } */}
                            {
                                activeEdu === 'University of Washington' &&
                                <>
                                    <Image src={UW} width="250" height="250" alt="" />
                                </>
                            }
                            {
                                activeEdu === 'Coding Dojo' &&
                                <>
                                    <Image src={Dojo} width="250" height="250" alt="" />
                                </>
                            }
                            {
                                activeEdu === 'Corban University & Universitas Pelita Harapan' &&
                                <>
                                    <Image src={Corban} width="250" height="250" alt="" />
                                    <Image src={SPH} width="250" height="250" alt="" />
                                </>
                            }
                        </div>
                        <div className='self-center  px-3'>
                            {/* {activeEdu.description} */}
                            {
                                activeEdu === 'University of Washington' &&
                                <p>I attended UW after I finished my first bootcamp at Coding Dojo. UW was a great experience because it allowed me to focus on the REACT framework which quickly became my favorite frontend framework after my MERN stack experience. It was a slower paced bootcamp compared to the hyper fast timeline the Coding Dojo offers. This slower pace really allowed for more exploration into the REACT suite. React, like python, has found a special place in my <span onClick={() => eggUpdate(1)}>life</span>.</p>
                            }
                            {
                                activeEdu === 'Coding Dojo' &&
                                <p>I attened Coding Dojo in order to perform a career change, this only partially worked (as I am now teching, my old job, at Coding Dojo). The Dojo was an amazing experience, it was intense and made for some long days even though I came into it with some self-learned knowlege. In just three and a half short months, which felt <span onClick={() => eggUpdate(2)} >long</span>, we covered Web Fundamentals (2 weeks), Python using the Django framework (4 weeks), MERN which stands for Mongo, Express, React, and Nodejs (4 weeks), and C# with ASP.NET as framework (4 weeks).</p>
                            }
                            {
                                activeEdu === 'Corban University & Universitas Pelita Harapan' &&
                                <p>I attended UPH while living in Indonesia. The program I went through was in conjunction with Corban University and therefor my degree actually came from Corban. UPH was a tough experience due to a multitude of factors. Living in a different culture being a huge challenge which brought many rewarding learning experiences. Aside from the cultural differences the schooling itself was challenging. These challenges provided many opportunities for me to grow as a person and as an educator, giving me a worldview that diverse and helping me be a <span onClick={() => eggUpdate(3)}>learner</span> at every turn.</p>
                            }
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
