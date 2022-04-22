import * as React from 'react'
import AnimatedBadge from './AnimatedBadge'
import arrow from '../assets/svg/icon-arrow.svg'
import Contact from './Contact';
// import cafe from '../assets/svg/coffee-cup-colored.svg'
// import cafe from '../assets/svg/coffee-cup.svg'
// import tailwind from '../assets/svg/icon-tailwind.svg'
// import react from '../assets/svg/icon-react.svg'

const Footer = () => {

    return (
        <div className='pb-5'>
            <div className="flex justify-between items-center bg-blackSec py-10">
                <AnimatedBadge />
                <div />
                <Contact />
            </div>
            <div onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} className='mt-6 mb-5 flex align-center justify-center sm:justify-start sm:ml-16 animate-bounce'>
                <img src={arrow} className='w-6 h-6 mr-3 ' />
                <p className='text-[17px] text-blue hover:font-semibold'>Back to top</p>
            </div>
            <div className=' bg-blackSec  w-full flex h-16 justify-center items-center'>
                <p>© 2022 Jean Reis</p>
            </div>

            {/* <div className=' mt-20 w-full flex flex-col sm:flex-row h-fit justify-center items-center'>
                <p className='mr-3'>Made with</p>
                <img src={react} className=' w-24 h-15 mr-4' color='#FFF' />
                <img src={tailwind} className='w-36 h-15 mr-4' color='#FFF' />
                <p>© 2022 Jean Reis</p>
            </div> */}
        </div >
    );
}

export default Footer
