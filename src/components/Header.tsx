import * as React from 'react';
import Separator from './Separator';

const Header = ({ ref1, ref2, ref3 }: { ref1: any, ref2: any, ref3: any }) => {
    const executeScroll = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return (
        <header className="bg-yellow  pt-4 mb-10 flex flex-col items-center">
            <div className='flex flex-col justify-between md:flex-row md:items-center sm:px-10 lg:px-20 xx:px-0 lg:max-w-7xl w-full pb-2'>
                <div className='flex  ml-5 sm:ml-0'>
                    <p className='font-mono font-bold text-black'>jeanreis</p>
                    <div className="bg-blue w-3 mt-4 ml-1 h-1" />
                </div>
                <div className='flex overflow-x-auto scrollbar-hide scrollbar py-4 sm:justify-center text-black'>
                    <button className='hover:animate-pulse' onClick={() => executeScroll(ref1)}>
                        <p className='font-mono font-bold whitespace-nowrap mr-12  ml-5' >About me</p>
                    </button>
                    <button className='hover:animate-pulse' onClick={() => executeScroll(ref2)}>
                        <p className='font-mono font-bold whitespace-nowrap mr-12'>Hard skills</p>
                    </button>
                    <button className='hover:animate-pulse' onClick={() => executeScroll(ref3)}>
                        <p className=' font-mono font-bold mr-5 sm:mr-0'>Contact</p>
                    </button>
                </div>
            </div>
            <Separator />
        </header>
    );
}

export default Header;
