import * as React from 'react';

const Tag = ({ text }: { text: string }) => {
    return (
        <div className='flex border rounded-md border-yellow justify-center max-w-fit mr-2 mt-2 md:mt-4'>
            <p className='text-yellow whitespace-nowrap text-[11px] sm:text-[12px] md:text-[16px] py-1 px-3'>{text}</p>
        </div>
    )
}
export default Tag;
