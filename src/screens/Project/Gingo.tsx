import * as React from 'react';
import { useState, useRef } from 'react';
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
import Feature from '../../components/Project/Feature';
import useDimensions from '../../hooks/useDimensions';

const ARR_IMAGES = [
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

const ARR_FEATURES = [
    {
        title: 'Push Notification',
        tags: [
            { text: 'Firebase', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'Socket.io', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
        ]
    },
    {
        title: 'Chat: Vídeo',
        tags: [
            { text: 'Firebase', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'Socket.io', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
        ]
    },
]

const DESC_PROJETO = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum
`

const DESAFIO = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum
`
const APRENDIZADO = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum
`

const Gingo = () => {
    const { width } = useDimensions()

    const [imgSelect, setImgSelect] = useState<number>(0)
    const [featureSelect, setFeatureSelect] = useState<number>(0)
    const slideImgRef: any = useRef()
    const slideFeatureRef: any = useRef()


    const IndicatorCustom = ({ values, stateSelect, refSlide }: { values: any, stateSelect: number, refSlide: any }) => (
        <div className='flex flex-wrap gap-1 sm:gap-2 my-4  max-w-[500px] justify-center self-center'>
            {values.map((element: any, index: number) => {
                return (
                    <div className={` indicator  p-[8px] sm:p-[10px] cursor-pointer   ${stateSelect === index ? 'bg-blue' : 'bg-unselected'}`}
                        key={index}
                        onClick={() => refSlide.current.goTo(index)}
                    />
                )
            })}
        </div>
    )

    const ArrowCustom = (left = true) => (
        <img src={arrow} className={`${left ? '-left-5 sm:left-2 -rotate-90' : '-right-5 sm:right-2 rotate-90'} h-5 sm:h-7 absolute cursor-pointer`} />
    )

    const slideImgProps = {
        transitionDuration: 250,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideImgRef,
        onChange: (previous: number, next: number) => setImgSelect(next)
    }

    const slideFeatureProps = {
        transitionDuration: 250,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideFeatureRef,
        onChange: (previous: number, next: number) => setFeatureSelect(next)
    }

    const renderWeb = () => {
        return (
            <Fragment>
                <div className='flex justify-between  pt-40'>
                    <div className=' w-1/2 '>
                        <img src={gingo} className=' h-[180px] ' />
                        <div className='flex flex-wrap mt-3 mb-7  gap-4 '>
                            <Tag text='React Native' />
                            <Tag text='Node.js' width='w-[90px] sm:w-[130px]' />
                        </div>
                        <p>{DESC_PROJETO}</p>
                    </div>
                    <div className=' w-[500px] flex justify-center'>
                        <div className='w-full relative flex flex-col'>
                            <Slide
                                {...slideImgProps}
                            >
                                {ARR_IMAGES.map((element, index) => (
                                    <div className="flex justify-center max-h-full " key={index} >
                                        <img src={element} className='w-[350px] ' />
                                    </div>
                                ))}
                            </Slide>
                            <IndicatorCustom
                                values={ARR_IMAGES}
                                stateSelect={imgSelect}
                                refSlide={slideImgRef}
                            />
                        </div>

                    </div>
                </div>

                <div className='py-20 flex gap-20 justify-between'>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Desafios</h1>
                        {DESAFIO}
                    </div>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Aprendizados</h1>
                        {APRENDIZADO}
                    </div>
                </div>

                <h1 className='mt-16'>Features</h1>

                <div className='w-full relative  flex flex-col'>
                    <Slide
                        {...slideFeatureProps}
                    >
                        {ARR_FEATURES.map((element, index) => (
                            <Feature
                                key={index}
                                title={element.title}
                                tags={element.tags}
                            />
                        ))}
                    </Slide>
                    <IndicatorCustom
                        values={ARR_FEATURES}
                        stateSelect={featureSelect}
                        refSlide={slideFeatureRef}
                    />
                </div>
            </Fragment>
        )
    }


    const renderMobile = () => {
        return (
            <Fragment>
                <div className='flex  flex-col items-center pt-24 gap-6'>
                    <img src={gingo} className=' h-[180px]' />
                    <div className='flex flex-wrap gap-4 '>
                        <Tag text='React Native' />
                        <Tag text='Node.js' width='w-[90px] sm:w-[130px]' />
                    </div>

                    <p className=' text-center  max-w-md'>{DESC_PROJETO}</p>

                    <div className=' max-w-md w-full  flex  justify-center '>
                        <div className='w-full relative flex flex-col'>
                            <IndicatorCustom
                                values={ARR_IMAGES}
                                stateSelect={imgSelect}
                                refSlide={slideImgRef}
                            />
                            <Slide
                                {...slideImgProps}
                                canSwipe={true}
                            >
                                {ARR_IMAGES.map((element, index) => (
                                    <div className="flex justify-center max-h-full" key={index} >
                                        <img src={element} className='w-[65vw] max-w-[280px]' />
                                    </div>
                                ))}
                            </Slide>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-16 justify-between mt-16'>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Desafios</h1>
                        {DESAFIO}
                    </div>
                    <div className=' '>
                        <img src={github} className='w-10 h-10 mr-4' />
                        <h1>Aprendizados</h1>
                        {APRENDIZADO}
                    </div>
                </div>

                <h1 className='mt-16'>Features</h1>

                <div className='w-full relative flex flex-col'>
                    <IndicatorCustom
                        values={ARR_FEATURES}
                        stateSelect={featureSelect}
                        refSlide={slideFeatureRef}
                    />
                    <Slide
                        {...slideFeatureProps}
                        canSwipe={true}
                    >
                        {ARR_FEATURES.map((element, index) => (
                            <Feature
                                key={index}
                                title={element.title}
                                tags={element.tags}
                                mobile
                            />
                        ))}
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