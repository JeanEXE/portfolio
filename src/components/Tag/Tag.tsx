import * as React from 'react';
import { TagType } from '../../types/Types';
import './Tag.css'

const Tag = ({ text, small, backgroundColor = 'bg-black' }: TagType) => {
    if (small) {
        return (
            <div className={`btn cursor-default p-[1px] w-fit min-w-[70px] h-fit`}>
                {text}
                <span className={`btn_content text-[9px] font-medium uppercase ${backgroundColor}`}>{text}</span>
                <span className="btn_glitch"></span>
            </div>
        )
    }

    return (
        <div className={`btn cursor-default px-[5px] py-[7px] 2xl:px-4 2xl:py-2 w-fit min-w-[100px]  h-fit`}>
            {text}
            <span className={`btn_content ${backgroundColor} font-semibold uppercase text-[10px] 2xl:text-[12px]`}>{text}</span>
            <span className="btn_glitch"></span>
            <span className="btn_label">R{Math.floor(Math.random() * 99)}</span>
        </div>
    )
}
export default Tag;
