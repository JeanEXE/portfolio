import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import arrow from '../assets/svg/icon-arrow.svg'
import coffe from '../assets/svg/icon-coffe.svg'
import heart from '../assets/svg/icon-heart.svg'
import tailwind from '../assets/svg/icon-tailwind.svg'
import react from '../assets/svg/icon-react.svg'
import useDimensions from '../hooks/useDimensions';
import Separator from './Separator'

const Footer = () => {
    const { width } = useDimensions()
    const [animate, setAnimate] = useState('opacity-0')
    const myRef = useRef()
    const { inViewport } = useInViewport(myRef)

    useEffect(() => {
        if (inViewport && animate == 'opacity-0') {
            setTimeout(() => {
                setAnimate('animate-fade-in-up')
            }, 100)
        }
    }, [inViewport])

    const renderMobile = () => (
        <div className={`${animate} py-14 transition-all px-5 grid grid-row-2 gap-16 justify-center`}>
            <div className='flex-col justify-center items-center text-black font-bold'>
                <p className='flex justify-center'>Coded by me, made by <img src={heart} className='w-4 ml-1' />.</p>
                <p className='text-center'>Especially to practice </p>
                <p className='flex items-center h-8 justify-center'>my <img src={react} className='h-10 mb-[2px]' /> skills</p>
                <p className='flex items-center  h-7 justify-center'>and learn
                    <img src={tailwind} className='w-32' />
                </p>
            </div>
            <div className='text-center text-black font-bold'>
                Todo trabalho que faço
                <p>sempre terá muito</p>
                <p> esforço dedicação,</p>
                <p className='flex  justify-center'>proatividade e <img src={coffe} className='w-5 h-5 ml-1' /></p>
            </div>
        </div>
    )

    const renderWeb = () => (
        <div className={`${animate} py-20 transition-all flex gap-24 xl:gap-80 justify-center items-center text-black font-bold`}>
            <div>
                <p className='flex'>Coded by me, made by <img src={heart} className='h-5 ml-1' />.  Especially</p>
                <p className='flex items-center h-10 justify-center'>to practice my <img src={react} className='h-12 mb-[3px]' /> skills </p>
                <p className='flex items-center h-8 justify-center'>and learn <img src={tailwind} className='w-36 h-20' /></p>
            </div>
            <div className='text-center text-black font-bold'>
                Todo trabalho que faço sempre terá muito<p className='flex justify-center'>esforço, dedicação, proatividade e <img src={coffe} className='w-5 h-5 ml-1' /></p>
            </div>
        </div>
    )

    return (
        <div className='pb-5 absolute w-full left-0 bg-black'>
            <div className=' bg-yellow '>
                <Separator inverted />
                {width > 768 ? renderWeb() : renderMobile()}
                <Separator />
            </div>
            <div className=' w-full flex h-20 justify-center items-center' ref={myRef}>
                <button
                    onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
                    className='mt-6 mb-5 flex align-center justify-center  animate-bounce'
                >
                    <img src={arrow} className='w-6 h-6 mr-3' />
                    <p className='text-[17px] text-blue hover:font-semibold'>Back to top</p>
                </button>
            </div>
            <div className='bg-blackSec w-full flex h-16 justify-center items-center'>
                <p>© 2022 Jean Reis</p>
            </div>
        </div >
    );
}

export default Footer
