import * as React from 'react';
import '../styles/GlitchAnimation.css'

const Myname = () => {
    return (
        <div className="btnContainer flex" >
            <p className='btnText text-[19px] 2xl:text-[21px]'>jean.<span className='btnText text-[14px] 2xl:text-[16px]'>tsx</span></p>
            <div className="bg-blue w-3 mt-5  ml-[2px] h-1" />
            <span className="glitchFull" />
        </div>

    )
}

export default Myname
