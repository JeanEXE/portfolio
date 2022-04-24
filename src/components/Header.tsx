import './../App.css';
import * as React from 'react';

const Header = () => {
    return (
        <header className="bg-black flex py-5 flex-col md:flex-row justify-between">
            <div className='flex pl-10'>
                <p className='font-mono font-bold'>jeanreis</p>
                <div className="bg-yellow w-3 mt-4 ml-1 h-1" />
            </div>
            <div className='flex overflow-x-auto scrollbar-hide scrollbar py-4 sm:justify-center'>
                <p className='font-mono font-bold whitespace-nowrap mx-6'>hard skills</p>
                <p className='font-mono font-bold whitespace-nowrap mx-6'>about me</p>
                <p className='font-mono font-bold mx-6'>features</p>
                <p className='font-mono font-bold mx-6'>contact</p>
            </div>
        </header>
    );
}

export default Header;
