import * as React from 'react'
import AnimatedBadge from './AnimatedBadge'
import linkedin from '../assets/svg/icon-linkedin.svg'
import gmail from '../assets/svg/icon-gmail.svg'
import github from '../assets/svg/icon-github.svg'
import whatsapp from '../assets/svg/icon-whatsapp.svg'
import telegram from '../assets/svg/icon-telegram.svg'
import arrow from '../assets/svg/icon-arrow.svg'
// import cafe from '../assets/svg/coffee-cup-colored.svg'
// import cafe from '../assets/svg/coffee-cup.svg'
// import tailwind from '../assets/svg/icon-tailwind.svg'
// import react from '../assets/svg/icon-react.svg'

const Footer = () => {
    return (
        <div className='pb-5'>
            <div className="flex justify-between pt-10 bg-blackSec pb-10">
                <AnimatedBadge />
                <div className='ml-5 sm:ml-0 flex-col  w-full  sm:w-7/12'>
                    <div className=' flex w-full'>
                        <p className='sm:text-[32px] text-[15px] pr-4 sm:pr-20 min-w-fit  font-semibold'>Contact Me!</p>
                        <div className="bg-yellow w-full h-4 mt-1 sm:mt-4" />
                    </div>
                    <div className='flex items-center mt-5'>
                        <img src={gmail} className='w-6 h-6 mr-4' />
                        <p>jeansreiss@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <img src={linkedin} className='w-6 h-6 mr-4' color='#FFF' />
                        <p>/jean-reis</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <img src={github} className='w-6 h-6 mr-4' color='#FFF' />
                        <p>/jean-reis</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <img src={whatsapp} className='w-6 h-6 mr-4' color='#FFF' />
                        <p>+55 (35) 99242-9970</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <img src={telegram} className='w-6 h-6 mr-4' color='#FFF' />
                        <p>@jean_exe</p>
                    </div>
                </div>
            </div>
            <div onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} className='mt-5 mb-5 flex align-center justify-center sm:justify-start sm:ml-16 animate-bounce'>
                <img src={arrow} className='w-6 h-6 mr-3' />
                <p className=' text-blue'>Back to top</p>
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
