import React, { useState, useEffect } from 'react'
// import Image from 'next/image'

import { data } from './data'
import { SvgIcon } from '../../components'
import { motion } from '@/lib/utils'


export default function Index(props) {
    const { changeEggState, egg } = props
    const [code, setCode] = useState([])

    useEffect(() => {
        if (code[0] === 1 && code[1] === 7 && code[2] === 19 && code.length === 3) {
            changeEggState({
                eg5: true,
                showHint: true,
                currentHint: "CONGRATULATIONS! You have freed the egg. Click on it to see the suprise"
            })
        }
    }, [code])

    const updateCode = (num) => {
        let tempCode = [...code]
        tempCode.push(num)
        console.log(tempCode);
        setCode(tempCode)
    }

    return (
        <motion.div
            className='my-8'
        >
            <div className='bg-white'>
                <h2 className='font-me-saira text-4xl text-center'>Tech</h2>
            </div>
            <motion.div
                className='flex flex-wrap justify-center pb-8 gap-3 bg-white'
            >
                {
                    data.map((svg, key) => {
                        return (
                            <div onClick={() => updateCode(key + 1)}>
                                <SvgIcon
                                    key={key}
                                    text={svg.name}
                                    icon={svg.icon}
                                    iconStyle='text-white bg-me-primary p-2 rounded-full border-2 border-black shadow-md shadow-black h-20 w-20 flex justify-center items-center'
                                />
                            </div>
                        )
                    })
                }
                {
                    egg.eg4 &&
                    <div className='flex items-center'>
                        <span className='cursor-pointer bg-me-secondary p-2 rounded-lg text-white shadow-md shadow-black' onClick={() => setCode([])}>Clear</span>
                    </div>
                }
            </motion.div>
        </motion.div>
    )
}
