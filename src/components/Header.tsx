import * as React from 'react';
import Separator from './Separator';
import '../styles/GlitchAnimation.css'
import Myname from './MyName';

const Header = ({ ref1, ref2, ref3, ref4 }: { ref1: any, ref2: any, ref3: any, ref4: any }) => {
    const executeScroll = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    //sticky top-0 z-50
    return (
        <header className="bg-yellow  pt-3 mb-10 flex flex-col items-center">
            <div className='flex flex-col justify-between md:flex-row md:items-center sm:px-10 lg:px-20  lg:max-w-7xl w-full pb-1'>
                <div className='flex  ml-5 sm:ml-0'>
                    <Myname />
                </div>
                <div className='flex overflow-x-auto py-4 sm:justify-center gap-5 sm:gap-10'>
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref1)}>
                        <span className="btnGlitch" />
                        <span className=" ml-5">About me_</span>
                    </button>
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref4)}>
                        <span className="btnGlitch" />
                        <span>Portfolio_</span>
                    </button>
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref2)}>
                        <span className="btnGlitch" />
                        <span className="">Hard skills_</span>
                    </button>
                    <button className="btnContainer btnText mr-2" onClick={() => executeScroll(ref3)}>
                        <span className="btnGlitch" />
                        <span >Contact_</span>
                    </button>
                </div>
            </div>
            <Separator />
        </header>
    );
}

export default Header;
