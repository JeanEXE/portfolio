import * as React from 'react';
import { Fragment } from 'react';
import Footer from '../../components/Footer';
import HeaderProject from '../../components/Project/HeaderProject';
import Tag from '../../components/Tag/Tag';
import github from '../../assets/svg/icon-github.svg'
import gingo from '../../assets/img/gingo.png'
import ging from '../../assets/img/Gingo/gingo1.jpg'
import ging2 from '../../assets/img/Gingo/gingo2.jpg'
import arrow from '../../assets/svg/icon-arrow.svg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../../styles/Dale.css'
import Feature from '../../components/Project/Feature';
import useDimensions from '../../hooks/useDimensions';

const images = [
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
]

const descProjeto = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum
`

const desafio = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum
`
const aprendizado = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum
`

const Gingo = () => {
    const { width } = useDimensions()


    const renderWeb = () => {
        const IndicatorWeb = () => (
            <div className='indicator  p-[8px] cursor-pointer' />
        )

        const ArrowWeb = (left = true) => (
            <img src={arrow} className={`${left ? 'left-2 -rotate-90' : 'right-2 rotate-90'} h-7 absolute cursor-pointer`} />
        )

        return (
            <Fragment>
                <div className='flex justify-between  pt-40'>
                    <div className=' w-1/2 '>
                        <img src={gingo} className=' h-[180px] ' />
                        <div className='flex flex-wrap mt-3 mb-7  gap-4 '>
                            <Tag text='React Native' />
                            <Tag text='Node.js' width='w-[90px] sm:w-[130px]' />
                        </div>
                        <p>{descProjeto}</p>
                    </div>
                    <div className=' w-[500px] flex justify-center'>
                        <div className='w-full  relative '>
                            <Slide
                                transitionDuration={250}
                                autoplay={false}
                                indicators={IndicatorWeb}
                                prevArrow={ArrowWeb()}
                                nextArrow={ArrowWeb(false)}
                                canSwipe={false}
                            >
                                {images.map((element, index) => (
                                    <div className="flex justify-center max-h-full " key={index} >
                                        <img src={element} className='w-[350px] ' />
                                    </div>
                                ))}
                            </Slide>
                        </div>

                    </div>
                </div>

                <div className='py-20 flex gap-20 justify-between'>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Desafios</h1>
                        {desafio}
                    </div>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Aprendizados</h1>
                        {aprendizado}
                    </div>
                </div>


                <h1 className='mt-16'>Features</h1>

                <div className='w-full relative '>
                    <Slide
                        transitionDuration={250}
                        autoplay={false}
                        indicators={IndicatorWeb}
                        prevArrow={ArrowWeb()}
                        nextArrow={ArrowWeb(false)}
                        canSwipe={false}
                    >
                        <Feature
                            title={'Push Notification'}
                            tags={[
                                { text: 'Firebase', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'Socket.io', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },

                            ]}
                        />
                        <Feature
                            title={'Chat: Video'}
                            tags={[
                                { text: 'Firebase', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'Socket.io', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },

                            ]}
                        />
                    </Slide>
                </div>
            </Fragment>
        )
    }


    const renderMobile = () => {

        const IndicatorMob = (position = 'bottom-[640px]') => (
            <div className={`indicator p-[8px] cursor-pointer ${position} relative`} />
        )

        const ArrowMob = (left = true) => (
            <img src={arrow} className={`${left ? '-left-5 -rotate-90' : '-right-5 rotate-90'} h-5 absolute cursor-pointer`} />
        )

        return (
            <Fragment>
                <div className='flex  flex-col items-center pt-28 gap-6'>
                    <img src={gingo} className=' h-[180px]' />
                    <div className='flex flex-wrap gap-4 '>
                        <Tag text='React Native' />
                        <Tag text='Node.js' width='w-[90px] sm:w-[130px]' />
                    </div>

                    <p className=' text-center  max-w-md'>{descProjeto}</p>

                    <div className=' max-w-md w-full  flex mt-10  justify-center '>
                        <div className='w-full  relative '>
                            <Slide
                                transitionDuration={250}
                                autoplay={false}
                                indicators={() => IndicatorMob()}
                                prevArrow={ArrowMob()}
                                nextArrow={ArrowMob(false)}
                                infinite={false}
                                scale={10}
                            >
                                {images.map((element, index) => (
                                    <div className="flex justify-center max-h-full" key={index} >
                                        <img src={element} className='w-[280px]' />
                                    </div>
                                ))}
                            </Slide>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-16 justify-between'>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Desafios</h1>
                        {desafio}
                    </div>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Aprendizados</h1>
                        {aprendizado}
                    </div>
                </div>

                <h1 className='mt-16'>Features</h1>

                <div className='w-full relative '>
                    <Slide
                        transitionDuration={250}
                        autoplay={false}
                        indicators={() => IndicatorMob('bottom-[1000px]')}
                        prevArrow={ArrowMob()}
                        nextArrow={ArrowMob(false)}
                        infinite={false}
                    >
                        <Feature
                            title={'Push Notification'}
                            mobile
                            tags={[
                                { text: 'Firebase', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'Socket.io', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },

                            ]}
                        />
                        <Feature
                            title={'Chat: Video'}
                            mobile
                            tags={[
                                { text: 'Firebase', width: 'w-[90px]' },
                                { text: 'APNS', width: 'w-[90px]' },
                            ]}
                        />
                    </Slide>
                </div>
            </Fragment>
        )
    }

    return (
        <div className=" flex-1 min-h-screen bg-black">
            <HeaderProject name={'Gingo'} />
            <div className='flex flex-col justify-center items-center pb-20'>
                <div className=' px-5 sm:px-10 md:px-10 lg:px-20 max-w-full  xx:max-w-7xl animate-fade-in-up border-red-500'>
                    {width > 868 ? renderWeb() : renderMobile()}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Gingo