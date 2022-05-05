import * as React from 'react';
import Separator from './Separator';
import '../styles/GlitchAnimation.css'

const Header = ({ ref1, ref2, ref3 }: { ref1: any, ref2: any, ref3: any }) => {
    const executeScroll = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return (
        <header className="bg-yellow  pt-4 mb-10 flex flex-col items-center">
            <div className='flex flex-col justify-between md:flex-row md:items-center sm:px-10 lg:px-20 xx:px-0 lg:max-w-7xl w-full pb-2'>
                <div className='flex  ml-5 sm:ml-0'>
                    <p className='btnText text-[20px]'>jeanreis</p>
                    <div className="bg-blue w-3 mt-5  ml-[2px] h-1" />
                </div>
                <div className='flex overflow-x-auto scrollbar-hide scrollbar py-4 sm:justify-center gap-10'>
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref1)}>
                        <span className="btnGlitch" />
                        <span className=" ml-5">About me_</span>
                    </button>
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref2)}>
                        <span className="btnGlitch" />
                        <span className="">Hard skills_</span>
                    </button>
                    <button className="btnContainer btnText mr-2" onClick={() => executeScroll(ref3)}>
                        <span className="btnGlitch" />
                        <span className="">Contact_</span>
                    </button>
                </div>
            </div>
            <Separator />
        </header>
    );
}

export default Header;
