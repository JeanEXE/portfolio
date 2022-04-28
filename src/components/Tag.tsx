import * as React from 'react';

const Tag = ({ text }: { text: string }) => {
    return (
        <div className='flex border rounded-md border-yellow justify-center max-w-fit mr-2'>
            <p className='text-yellow font-semibold whitespace-nowrap text-[11px] sm:text-[12px] md:text-[16px] py-1 px-3'>{text}</p>
        </div>
    )
}
export default Tag;
