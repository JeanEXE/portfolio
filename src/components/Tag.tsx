import './../App.css';
import * as React from 'react';

const Tag = ({ text }: { text: string }) => {
    return (
        <div className='flex border rounded-md border-yellow mb-2 justify-center max-w-fit mr-2 sm:mt-4'>
            <p className='text-yellow whitespace-nowrap text-[12px] px-2 sm:text-xs sm:py-1 sm:px-3  '>{text}</p>
        </div>
    )
}
export default Tag;
