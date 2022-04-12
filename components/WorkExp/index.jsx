import React, { useState, useEffect } from 'react'
import { cx, motion } from '@/lib/utils'
import Image from 'next/image'

import { data } from './data'

export default function Index(props) {
    const { egg, changeEggState } = props
    const [easterEgg, setEasterEgg] = useState(egg)
    const [combo, setCombo] = useState([0,0,0])
    const [expRotate, setExpRotate] = useState([0,0,0])

    useEffect(() => {
        setEasterEgg(egg)
    }, [egg])

    useEffect(() => {
        if (expRotate[0] === 270 && expRotate[1] === 90 && expRotate[2] === 180){
            changeEggState({
                eg4: true,
                h5Active: true,
                showHint: true,
                currentHint: 'PREFACE: The last clue will be solved in the Tech section of this website. CLUE 6: If you git me so well then go to where I keep all my stuff, there if you are cleaver you will see what you are looking for.'
            })
        }
    }, [expRotate])

    const updateRotate = (idx) => {
        let num = expRotate[idx] + 90
        if (num >= 360){
            num = 0
        }
        let temp = [...expRotate]
        temp[idx] = num
        setExpRotate(temp)
    }

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
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: [-100, 0], opacity: 1 }}
                                    transition={{ duration: 0.7, delay: key * 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className='text-2xl text-center mt-0'>{exp.title}</h3>
                                    <div className='grid grid-cols-6 place-items-center mx-3 gap-5 m-auto p-3'>
                                        <div className='relative col-span-2 h-full w-full flex place-items-center m-8'>
                                            {
                                                easterEgg && easterEgg.eg3 && !easterEgg.h5Active &&
                                            <div className='absolute w-full h-full'>
                                                <span className='absolute top-0 right-1/2'>12</span>
                                                <span className='absolute top-1/2 right-0'>3</span>
                                                <span className='absolute bottom-0 right-1/2'>6</span>
                                                <span className='absolute top-1/2 left-0'>9</span>
                                            </div>
                                            }
                                            <motion.div
                                                className={cx(`p-3 rotate-${expRotate[key]}`)}
                                                animate={{ rotate: expRotate[key] }}
                                            >
                                                <Image src={exp.icon} alt="" onClick={() => updateRotate(key)} />
                                            </motion.div>
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
