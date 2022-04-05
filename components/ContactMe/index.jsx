import { cx } from '@/lib/utils'
import React, { useState } from 'react'
import Image from 'next/image'

import Utils from '@/styles/utils.module.css'
import pointingMe from '../../public/img/pointingMe.png'

export default function Index() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })
    const [errorInfo, setErrorInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const updateUserInfo = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUserInfo({
            ...userInfo,
            [name]: value
        })

        errorHandler(e)
    }

    const errorHandler = (e) => {

        let value = e.target.value
        let name = e.target.name
        let valLen = parseInt(e.target.getAttribute('validationlen'))

        let msg = ''
        if (value.length === 0){
            msg = ""
        }
        else if (value.length < valLen){
            msg = 'field is required'
        }
        setErrorInfo({
            ...errorInfo,
            [name]: msg
        })
        
    }
    return (
        <div className='flex flex-col items-center relative' id='contact_me'>
            <p className='text-white my-3 bg-me-accent p-3 rounded-lg text-xl'>This section is currently in development. If you would like to contact me you can email me at <span className='font-bold'>tyler.thibault@protonmail.com</span></p>
            <h2 className='font-me-saira text-6xl text-white'>Contact Me</h2>
            <form className='grid grid-cols-2 gap-3 w-7/12'>
                <div className=''>
                    <input className={cx('text-center w-full')} type="text" name="firstName" id="firstName" validationlen="2" placeholder='First Name' value={userInfo['firstName']} onChange={(e) => updateUserInfo(e)} />
                    <span className='text-red-500 font-bold'>{errorInfo['firstName']}</span>
                </div>
                <div className=''>
                    <input className={cx('text-center w-full')} type="text" name="lastName" id="lastName" validationlen="2" placeholder='Last Name' value={userInfo['lastName']} onChange={(e) => updateUserInfo(e)} />
                    <span className='text-red-500 font-bold'>{errorInfo['lastName']}</span>
                </div>
                <div className='col-span-2'>
                    <input className={cx('w-full text-center')} type="text" name="email" id="email" validationlen="2" placeholder='Email' value={userInfo['email']} onChange={(e) => updateUserInfo(e)} />
                    <span className='text-red-500 font-bold'>{errorInfo['email']}</span>
                </div>
                <div className='col-span-2'>
                    <textarea className={cx('w-full')} name="message" id="message" cols="30" rows="10" validationlen="2" placeholder='Message Here'></textarea>
                    <span className='text-red-500 font-bold'>{errorInfo['message']}</span>
                </div>

                <button className={cx(Utils.btn, 'bg-me-accent col-span-2 text-white')}>Send</button>
            </form>
            <div className='hidden lg:inline-block absolute bottom-0 right-24'>
                <Image src={pointingMe} alt="" width="150" height="300" />
            </div>
        </div>
    )
}
