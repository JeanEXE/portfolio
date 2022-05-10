import * as React from 'react';
import { useEffect, useState, useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import linkedin from '../assets/svg/icon-linkedin.svg'
import gmail from '../assets/svg/icon-gmail.svg'
import github from '../assets/svg/icon-github.svg'
import whatsapp from '../assets/svg/icon-whatsapp.svg'
import telegram from '../assets/svg/icon-telegram.svg'

const Contact = () => {
    const [widthAnim, setWidthAnim] = useState('w-0')
    const myRef = useRef()
    const { inViewport } = useInViewport(myRef)

    useEffect(() => {
        if (inViewport && widthAnim == 'w-0') {
            setTimeout(() => {
                setWidthAnim('w-11/12 sm:w-7/12')
            }, 400)
        }
    }, [inViewport])

    return (
        <div className={`flex-col  transition-width duration-1000 ease-in-out ${widthAnim}`}>
            <div className='whitespace-nowrap overflow-hidden gap-5'>
                <div className=' flex w-full'>
                    <h1 className='text-[18px] sm:text-[32px] pr-4 sm:pr-20 min-w-fit h-6 sm:h-12 overflow-hidden'>Contact Me!</h1>
                    <div className="bg-yellow w-full h-4 mt-1 sm:mt-4" />
                </div>
                <div className='flex flex-col gap-2 mt-5'>
                    <a className='flex items-center' target="_blank" href="https://linkedin.com/in/jean-reis-91505a1b2/">
                        <img src={linkedin} className='w-6 h-6 mr-4' />
                        <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]  font-bold'>Linkedin</p>
                    </a>
                    <a className='flex items-center' target="_blank" href="https://github.com/JeanEXE">
                        <img src={github} className='w-6 h-6 mr-4' />
                        <p className='h-6 overflow-hidden text-[14px] sm:text-[16px] font-bold'>GitHub</p>
                    </a>
                    <div className='flex items-center'>
                        <img src={gmail} className='w-6 h-6 mr-4' />
                        <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>jeansreiss@gmail.com</p>
                    </div>
                    <div className='flex items-center'>
                        <img src={whatsapp} className='w-6 h-6 mr-4' />
                        <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>+55 (35) 99242-9970</p>
                    </div>
                    <div className='flex items-center' ref={myRef}>
                        <img src={telegram} className='w-6 h-6 mr-4' />
                        <p className='h-6 overflow-hidden text-[14px] sm:text-[16px]'>@jean_exe</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
