import * as React from 'react';

const Header = () => {
    return (
        <header className="bg-black  py-5 flex flex-row justify-center">
            <div className='flex flex-col md:flex-row md:items-center justify-between sm:mx-10 lg:mx-20 lg:max-w-7xl w-full'>
                <div className='flex  ml-5 sm:ml-0'>
                    <p className='font-mono font-bold'>jeanreis</p>
                    <div className="bg-yellow w-3 mt-4 ml-1 h-1" />
                </div>
                <div className='flex overflow-x-auto scrollbar-hide scrollbar py-4 sm:justify-center'>
                    <p className='font-mono font-bold whitespace-nowrap mr-12  ml-5'>hard skills</p>
                    <p className='font-mono font-bold whitespace-nowrap  mr-12'>about me</p>
                    <p className='font-mono font-bold  mr-12'>features</p>
                    <p className='font-mono font-bold mr-5 sm:mr-0'>contact</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
