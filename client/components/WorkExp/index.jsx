import React, { useState } from 'react'

import { data } from './data'

export default function Index() {
    const [activeExp, setActiveExp] = useState()


    const mobileView = () => {
        return (
            <div>
                <div className='bg-me-primary py-3 text-white font-me-saira text-3xl text-center mt-8'>
                    <h2>Work Experience</h2>
                </div>
                <div className='flex flex-col sm:grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 sm:py-8 items-center bg-white px-2'>
                    {
                        data.map((exp, key) => {
                            return (
                                <div className='bg-white w-auto border-2 border-black rounded-xl my-2 sm:py-5 sm:m-0 shadow shadow-black' key={key}>
                                    <h3 className='text-2xl text-center'>{exp.title}</h3>
                                    <div className='grid grid-cols-6 place-items-center mx-3 gap-3'>
                                        <div className='col-span-2'>
                                            <img src={exp.icon} alt={exp.iconAlt} />
                                        </div>
                                        <div className='col-start-3 col-span-4'>
                                            <p>{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    const desktopView = () => {
        return (
            <div>
                <div >
                    <h2>Work Experience</h2>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className=''>
                {mobileView()}
            </div>
        </div>
    )
}
