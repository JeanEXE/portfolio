import * as React from 'react';
import { Link } from 'react-router-dom';
import useDimensions from '../../hooks/useDimensions';


const HeaderProject = ({ name }: { name: string }) => {
    const { width } = useDimensions()

    const renderMobile = () => (
        <div>
            <div className=' bg-yellow w-full border-b border-black '>
                <div className='flex h-[80px]   items-center  ml-5'>
                    <Link to="/">
                        <p className='btnText text-[20px]'>jeanreis</p>
                    </Link>
                    <div className="bg-blue w-3 mt-5  ml-[2px] h-1" />
                </div>
            </div>
            <div className='flex overflow-hidden  animate-slide-left'>
                <div className='w-[230px] bg-[#202020] h-20'>
                    <div className='flex h-[80px]   items-center  ml-5'>
                        <h1>Project:&nbsp;&nbsp;&nbsp;{name}</h1>
                    </div>
                </div>
                <div className='relative  border-r-transparent bottom-[-0px]  left-[-1px] border-[#202020] border-r-[80px] border-t-[80px]' />
            </div>
        </div>
    )


    const renderWeb = () => (
        <div className='flex  animate-slide-left'>
            <div className='w-[300px] bg-yellow h-20'>
                <div className='flex h-[80px]   items-center  ml-5'>
                    <Link to="/">
                        <div className="btnContainer flex" >
                            <p className='btnText text-[20px]'>jeanreis</p>
                            <div className="bg-blue w-3 mt-5  ml-[2px] h-1" />
                            <span className="glitchFull" />
                        </div>
                    </Link>
                </div>
            </div>

            <div className='relative  bg-[#202020] border-r-transparent  border-yellow border-r-[80px] border-t-[80px]' />

            <div className='w-[500px] bg-[#202020] h-20'>
                <div className='flex h-[80px]   items-center  ml-5 '>
                    <h1>Project:&nbsp;&nbsp;Gingo</h1>
                </div>
            </div>
            <div className='relative  border-r-transparent  border-[#202020] border-r-[80px] border-t-[80px]' />
        </div>
    )


    return (
        <div className='fixed w-full z-10'>
            {width > 650 ? renderWeb() : renderMobile()}
        </div>
    )
}

export default HeaderProject