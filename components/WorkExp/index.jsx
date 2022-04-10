import React, { useState } from 'react'
import { motion } from '@/lib/utils'
import Image from 'next/image'

import { data } from './data'

export default function Index(props) {
    const { egg, changeEggState } = props
    const [activeExp, setActiveExp] = useState()
    const [easterEgg, setEasterEgg] = useState(egg)

    const view = () => {
        return (
            <div>
                <div className='bg-me-primary py-3 text-white font-me-saira text-3xl text-center mt-8'>
                    <h2>Work Experience</h2>
                </div>
                <motion.div
                    className='flex flex-col sm:grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 sm:py-8 items-center bg-white px-2'
                >
                    {
                        data.map((exp, key) => {
                            return (
                                <motion.div
                                    className='bg-white w-auto border-2 border-black rounded-xl my-2 sm:py-5 sm:m-0 shadow shadow-black h-72 overflow-y-auto flex flex-col'
                                    key={key}
                                    initial={{ y: -100, opacity: 0}}
                                    whileInView={{ y: [-100, 0], opacity: 1}}
                                    transition={{duration: 0.7, delay: key * 0.3}}
                                    viewport={{ once: true }}
                                >
                                    <h3 className='text-2xl text-center mt-0'>{exp.title}</h3>
                                    <div className='grid grid-cols-6 place-items-center mx-3 gap-3 m-auto'>
                                        <div className='col-span-2'>
                                            <Image src={exp.icon} alt="" />
                                            {/* <img src={exp.icon} alt={exp.iconAlt} /> */}
                                        </div>
                                        <div className='col-start-3 col-span-4'>
                                            {exp.description}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
        )
    }

    return (
        <div>
            <div>
                {view()}
            </div>
        </div>
    )
}
