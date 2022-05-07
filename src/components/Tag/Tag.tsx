import * as React from 'react';
import './Tag.css'

const Tag = ({ text, width = 'w-[110px] sm:w-[150px] lg:w-[160px]', small }: { text: string, width?: string, small?: boolean }) => {
    if (small) {
        return (
            <div className={`btn h-[30px] ${width}`}>
                <span className="btn__content  text-[10px]">{text}</span>
                <span className="btn__glitch"></span>
            </div>
        )
    }

    return (
        <div className={`btn h-[35px] sm:h-[45px] ${width}`}>
            <span className="btn__content">{text}</span>
            <span className="btn__glitch"></span>
            <span className="btn__label">r{Math.floor(Math.random() * 99)}</span>
        </div>
    )

    // return (
    //     <div className='flex border rounded-md border-yellow justify-center max-w-fit mr-2'>
    //         <p className='text-yellow font-semibold whitespace-nowrap text-[11px] sm:text-[12px] md:text-[16px] py-1 px-3'>{text}</p>
    //     </div>
    // )
}
export default Tag;
