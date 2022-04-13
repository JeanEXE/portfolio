import './../App.css';
import * as React from 'react';
// import { classnames } from "classnames";

const SkillBar = ({ stack, width }: { stack: string, width: string }) => {
    return (
        <div className='flex  w-full  mb-5 items-center sm:w-full'>
            <p className=' w-28  pr-2 text-[12px] text-right font-semibold sm:w-2/4'>{stack}</p>
            <div className=' border w-full h-[1.1rem] sm:w-3/4'>
                <div className={`bg-blue h-[1.0rem] ${width}`} />
            </div>
        </div>

    )
}
export default SkillBar;
