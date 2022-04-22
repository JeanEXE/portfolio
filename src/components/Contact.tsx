import * as React from 'react';
import { useEffect, useState, useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import linkedin from '../assets/svg/icon-linkedin.svg'
import gmail from '../assets/svg/icon-gmail.svg'
import github from '../assets/svg/icon-github.svg'
import whatsapp from '../assets/svg/icon-whatsapp.svg'
import telegram from '../assets/svg/icon-telegram.svg'

const Contact = () => {
    const [widthAnim, setWidthAnim] = useState('w-0 sm:w-0')
    const myRef = useRef()
    const { inViewport } = useInViewport(myRef)

    useEffect(() => {
        if (inViewport && widthAnim == 'w-0 sm:w-0') {
            setTimeout(() => {
                setWidthAnim('w-full sm:w-7/12')
            }, 400)
        }
    }, [inViewport])

    return (
        <div className={`ml-5 sm:ml-0 flex-col  transition-width duration-1000 ease-in-out ${widthAnim}`}>
            <div className='whitespace-nowrap overflow-hidden'>
                <div className=' flex w-full'>
                    <p className='text-[18px] sm:text-[32px] pr-4 sm:pr-20 min-w-fit sm:h-12 font-semibold overflow-hidden'>Contact Me!</p>
                    <div className="bg-yellow w-full h-4 mt-1 sm:mt-4" />
                </div>
                <div className='flex items-center mt-5'>
                    <img src={gmail} className='w-6 h-6 mr-4' />
                    <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>jeansreiss@gmail.com</p>
                </div>
                <div className='flex items-center mt-2'>
                    <img src={linkedin} className='w-6 h-6 mr-4' />
                    <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>/jean-reis</p>
                </div>
                <div className='flex items-center mt-2'>
                    <img src={github} className='w-6 h-6 mr-4' />
                    <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>/jean-reis</p>
                </div>
                <div className='flex items-center mt-2'>
                    <img src={whatsapp} className='w-6 h-6 mr-4' />
                    <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>+55 (35) 99242-9970</p>
                </div>
                <div className='flex items-center mt-2' ref={myRef}>
                    <img src={telegram} className='w-6 h-6 mr-4' />
                    <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>@jean_exe</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
