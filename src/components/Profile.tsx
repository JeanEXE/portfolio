import * as React from 'react'
import profilePic from '../assets/img/profile.png'
import useDimensions from '../hooks/useDimensions';
import Tag from './Tag';


const Profile = () => {
    const { width } = useDimensions()

    const renderMobile = () => (
        <div className='flex flex-col  items-center'>
            <img className='w-40 h-40 rounded-full sm:h-60 sm:w-60' src={profilePic} />
            <div className='flex flex-col items-center mt-3'>
                <p className='text-[16px] sm:text-[22px] font-semibold'>Jean Reis <span className='text-[13px] sm:text-[18px] font-semibold'>- Brazil, SP</span></p>
                <p className='text-[35px] sm:text-[55px] font-semibold leading-none mt-3'>Fullstack</p>
                <p className='text-[35px] sm:text-[55px] font-semibold'>Developer</p>
                <div className='flex flex-wrap mt-1'>
                    <Tag text='React Native' />
                    <Tag text='Node.js' />
                </div>
            </div>
        </div>
    )

    const renderWeb = () => (
        <div className='flex'>
            <img className='mr-10 h-72 w-72' src={profilePic} />
            <div>
                <p className='text-[26px] font-semibold'>Jean Reis <span className='text-[22px] font-semibold'>- Brazil, SP</span></p>
                <p className='text-[72px] font-semibold leading-none'>Fullstack</p>
                <p className='text-[72px] font-semibold leading-none'>Developer</p>
                <div className='flex flex-wrap'>
                    <Tag text='React Native' />
                    <Tag text='Node.js' />
                </div>
            </div>
        </div>
    )

    return width > 768 ? renderWeb() : renderMobile()
}

export default Profile