import * as React from 'react';
import circle from '../assets/img/circle.png'
import circle_name from '../assets/img/circle_name.png'

const AnimatedBadge = () => {
    return (
        <div className='hidden sm:block w-56 h-56 relative top-[-0px] left-16'>
            <img
                className=' rounded-full absolute ml-[33px] mt-[33px] z-10'
                src={circle}
            />
            <img
                className=' rounded-full border animate-spin-slow bg-black'
                src={circle_name}
            />
        </div>
    )
}

export default AnimatedBadge
