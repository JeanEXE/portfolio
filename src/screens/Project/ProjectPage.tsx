import * as React from 'react';
import { useState, useRef } from 'react';
import { Fragment } from 'react';
import Footer from '../../components/Footer';
import HeaderProject from './HeaderProject';
import Tag from '../../components/Tag/Tag';
import github from '../../assets/svg/icon-github.svg'
import arrow from '../../assets/svg/icon-arrow.svg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Feature from './Feature';
import useDimensions from '../../hooks/useDimensions';
import gingoData from '../../data/Gingo.ts';
import { useParams } from 'react-router-dom';
import { ProjectType, TagType } from '../../types/Types';


type ObjLiteral = {
    [nameProject: string]: ProjectType
}

const ProjectPage = () => {
    const { width } = useDimensions()
    const { nameProject } = useParams()

    const [imgSelect, setImgSelect] = useState<number>(0)
    const [featureSelect, setFeatureSelect] = useState<number>(0)
    const slideImgRef: any = useRef()
    const slideFeatureRef: any = useRef()

    const props: ProjectType = useRef<ObjLiteral>({
        'Gingo': gingoData,
        'Gingo Business': gingoData
    }).current[nameProject]


    const IndicatorCustom = ({ values, stateSelect, refSlide }: { values: any, stateSelect: number, refSlide: any }) => (
        <div className='flex flex-wrap gap-1 sm:gap-2 my-4  max-w-[500px] justify-center self-center'>
            {values.map((element: any, index: number) => {
                return (
                    <div className={`indicator  p-[8px] sm:p-[10px] cursor-pointer ${stateSelect === index ? 'bg-blue' : 'bg-unselected'}`}
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

    const slideImgProps: any = useRef({
        transitionDuration: 240,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideImgRef,
        onChange: (previous: number, next: number) => setImgSelect(next)
    }).current

    const slideFeatureProps: any = useRef({
        transitionDuration: 240,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideFeatureRef,
        onChange: (previous: number, next: number) => setFeatureSelect(next)
    }).current

    const renderWeb = () => (
        <Fragment>
            <div className='flex justify-between  pt-40'>
                <div className=' w-1/2'>
                    <img src={props.image} className=' h-[180px] ' />
                    <div className='flex flex-wrap mt-3 mb-7  gap-4 '>
                        {props.tags.map((element: TagType, index: number) => (
                            <Tag key={index} text={element.text} width={element?.width} />
                        ))}
                    </div>
                    <p>{props.description}</p>
                </div>
                <div className=' w-[500px] flex justify-center'>
                    <div className='w-full relative flex flex-col'>
                        <Slide
                            {...slideImgProps}
                        >
                            {props.images.map((element, index) => (
                                <div className="flex justify-center max-h-full " key={index} >
                                    <img src={element} className='w-[350px] ' />
                                </div>
                            ))}
                        </Slide>
                        <IndicatorCustom
                            values={props.images}
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
                    {props.challenge}
                </div>
                <div className=' '>
                    <img src={github} className='w-10 h-10 mr-4' />
                    <h1>Aprendizados</h1>
                    {props.learned}
                </div>
            </div>

            <h1 className='mt-16 mb-8'>Features</h1>

            <div className='w-full relative  flex flex-col'>
                <Slide
                    {...slideFeatureProps}
                >
                    {props.features.map((element, index) => (
                        <Feature
                            key={index}
                            title={element.title}
                            tags={element.tags}
                        />
                    ))}
                </Slide>
                <IndicatorCustom
                    values={props.features}
                    stateSelect={featureSelect}
                    refSlide={slideFeatureRef}
                />
            </div>
        </Fragment>
    )


    const renderMobile = () => (
        <Fragment>
            <div className='flex  flex-col items-center pt-24 gap-6'>
                <img src={props.image} className=' h-[180px]' />
                <div className='flex flex-wrap gap-4 '>
                    {props.tags.map((element, index) => (
                        <Tag key={index} text={element.text} width={element?.width} />
                    ))}
                </div>

                <p className=' text-center  max-w-md'>{props.description}</p>

                <div className=' max-w-md w-full  flex  justify-center '>
                    <div className='w-full relative flex flex-col'>
                        <IndicatorCustom
                            values={props.images}
                            stateSelect={imgSelect}
                            refSlide={slideImgRef}
                        />
                        <Slide
                            {...slideImgProps}
                            canSwipe={true}
                        >
                            {props.images.map((element, index) => (
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
                    {props.challenge}
                </div>
                <div className=' '>
                    <img src={github} className='w-10 h-10 mr-4' />
                    <h1>Aprendizados</h1>
                    {props.learned}
                </div>
            </div>

            <h1 className='mt-16'>Features</h1>

            <div className='w-full relative flex flex-col'>
                <IndicatorCustom
                    values={props.features}
                    stateSelect={featureSelect}
                    refSlide={slideFeatureRef}
                />
                <Slide
                    {...slideFeatureProps}
                    canSwipe={true}
                >
                    {props.features.map((element, index) => (
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

    return (
        <div className=" flex-1 min-h-screen bg-black">
            <HeaderProject name={nameProject} />
            <div className='flex flex-col justify-center items-center pb-20'>
                <div className='px-5 sm:px-10 md:px-10 lg:px-20 max-w-full xx:max-w-7xl animate-fade-in-up'>
                    {width > 868 ? renderWeb() : renderMobile()}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProjectPage