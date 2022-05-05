import * as React from 'react'
import '../styles/CyberpunkGlitch.css'
import profilePic from '../assets/img/profile.png'
import useDimensions from '../hooks/useDimensions';
import Tag from './Tag';

const Profile = () => {
    const { width } = useDimensions()

    const renderMobile = () => (
        <div className='flex flex-col  items-center'>
            <img className='w-40 h-40 rounded-full sm:h-60 sm:w-60' src={profilePic} />
            <div className='flex flex-col items-center mt-3'>
                <p className='text-[16px] sm:text-[22px] font-semibold mb-3'>Jean Reis <span className='text-[13px] sm:text-[18px] font-semibold'>- Brazil, SP</span></p>
                <p className='text-[33px] sm:text-[55px] font-semibold tracking-[5px] hero glitch layers leading-none' data-text="Fullstack"><span>Fullstack</span></p>
                <p className='text-[33px] sm:text-[55px] font-semibold tracking-[5px] hero glitch layers' data-text="Developer"><span>Developer</span></p>
                <div className='flex flex-wrap mt-3 justify-center gap-4 '>
                    <Tag text='React Native' />
                    <Tag text='Node.js' width='w-[90px] sm:w-[130px]' />
                </div>
            </div>
        </div>
    )

    const renderWeb = () => (
        <div className='flex'>
            <img className='mr-10 h-72 w-72' src={profilePic} />
            <div>
                <p className='text-[26px] font-semibold'>Jean Reis <span className='text-[22px] font-semibold'>- Brazil, SP</span></p>
                <p className='text-[70px] font-semibold leading-none tracking-[10px] hero glitch layers' data-text="Fullstack"><span>Fullstack</span></p>
                <p className='text-[70px] font-semibold leading-none tracking-[10px] hero glitch layers' data-text="Developer"><span>Developer</span></p>
                <div className='flex flex-wrap mt-8 gap-5'>
                    <Tag text='React Native' />
                    <Tag text='Node.js' width='w-[130px] lg:w-[140px]' />
                </div>
            </div>
        </div>
    )

    return width > 940 ? renderWeb() : renderMobile()
}

export default Profile
