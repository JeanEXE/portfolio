import * as React from 'react'
import { useState, useRef, Fragment } from 'react'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
import HeaderProject from './HeaderProject'
import Tag from '../../components/Tag/Tag'
import iconChall from '../../assets/svg/icon-chall.svg'
import iconLearn from '../../assets/svg/icon-learn.svg'
import arrow from '../../assets/svg/icon-arrow.svg'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Feature from './Feature'
import useDimensions from '../../hooks/useDimensions'
import gingoData from '../../data/Gingo.ts'
import { useParams } from 'react-router-dom'
import { ProjectType } from '../../types/Types'

type ObjLiteral = {
    [nameProject: string]: ProjectType
}

const ProjectPage = () => {
    const { width } = useDimensions()
    const { t } = useTranslation()
    const { nameProject } = useParams()

    const [imgSelect, setImgSelect] = useState<number>(0)
    const [featureSelect, setFeatureSelect] = useState<number>(0)
    const slideImgRef: any = useRef()
    const slideFeatureRef: any = useRef()

    const props: ProjectType = useRef<ObjLiteral>({
        Gingo: gingoData,
        'Gingo Business': gingoData
    }).current[nameProject]

    const IndicatorCustom = ({ values, stateSelect, refSlide }: { values: any; stateSelect: number; refSlide: any }) => (
        <div className="flex flex-wrap gap-1 2xl:gap-2 my-4  max-w-[500px] justify-center self-center">
            {values.map((element: any, index: number) => {
                return (
                    <button
                        className={`indicator  p-[8px] 2xl:p-[10px] cursor-pointer ${stateSelect === index ? 'bg-blue' : 'bg-unselected'}`}
                        key={index}
                        onClick={() => refSlide.current.goTo(index)}
                    />
                )
            })}
        </div>
    )

    const ArrowCustom = (left = true) => (
        <img
            src={arrow}
            alt=""
            className={`h-5 sm:h-7 absolute cursor-pointer -right-5 sm:right-2 rotate-90 ${left && '-left-5 sm:left-2 -rotate-90'}`}
        />
    )

    const slideImgProps: any = useRef({
        transitionDuration: 150,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideImgRef,
        onChange: (previous: number, next: number) => setImgSelect(next)
    }).current

    const slideFeatureProps: any = useRef({
        transitionDuration: 150,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideFeatureRef,
        onChange: (previous: number, next: number) => setFeatureSelect(next)
    }).current

    const renderWeb = () => (
        <Fragment>
            <div className="flex justify-between  pt-40">
                <div className=" w-1/2">
                    <img src={props.logo} className=" h-[150px] 2xl:h-[180px] " alt="" />
                    <div className="flex flex-wrap mt-3 mb-7  gap-4 ">
                        {props.tags.map((name: string, index: number) => (
                            <Tag key={index} text={name} />
                        ))}
                    </div>
                    <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{props.description}</p>
                </div>
                <div className=" w-[500px] flex justify-center">
                    <div className="w-full relative flex flex-col">
                        <Slide {...slideImgProps}>
                            {props.images.map((element, index) => (
                                <div className="flex justify-center max-h-full " key={index}>
                                    <img src={element} className="w-[220px] 2xl:w-[350px]" alt="" />
                                </div>
                            ))}
                        </Slide>
                        <IndicatorCustom values={props.images} stateSelect={imgSelect} refSlide={slideImgRef} />
                    </div>
                </div>
            </div>

            {props.challenge && props.learned && (
                <div className="py-20 flex gap-24">
                    <div className="w-2/4">
                        <img src={iconChall} className="h-7 2xl:h-9 mb-2" alt="" />
                        <p className="font-semibold text-[30px] 2xl:text-[40px] mb-4">{t('challenge')}</p>
                        <p className="text-[14px] 2xl:text-[16px]  text-textColor indent-4">{props.challenge}</p>
                    </div>
                    <div className="w-2/4">
                        <img src={iconLearn} className="h-7 2xl:h-9 mb-2" alt="" />
                        <p className="font-semibold text-[30px] 2xl:text-[40px] mb-4">{t('learn')}</p>
                        <p className="text-[14px] 2xl:text-[16px]  text-textColor indent-4">{props.learned}</p>
                    </div>
                </div>
            )}

            {props.features && (
                <Fragment>
                    <p className="font-semibold text-[35px] 2xl:text-[45px] mb-4">{t('features')}</p>

                    <div className="w-full relative  flex flex-col">
                        <Slide {...slideFeatureProps}>
                            {props.features.map((element, index) => (
                                <Feature
                                    key={index}
                                    title={element.title}
                                    image={element.image}
                                    tags={element.tags}
                                    description={element.description}
                                />
                            ))}
                        </Slide>
                        <IndicatorCustom values={props.features} stateSelect={featureSelect} refSlide={slideFeatureRef} />
                    </div>
                </Fragment>
            )}
        </Fragment>
    )

    const renderMobile = () => (
        <Fragment>
            <div className="flex  flex-col items-center pt-24 gap-6">
                <img src={props.logo} className=" h-[180px]" alt="" />
                <div className="flex flex-wrap gap-4 ">
                    {props.tags.map((name: string, index: number) => (
                        <Tag key={index} text={name} />
                    ))}
                </div>

                <p className="max-w-md text-textColor indent-4">{props.description}</p>

                <div className=" max-w-md w-full  flex  justify-center ">
                    <div className="w-full relative flex flex-col">
                        <IndicatorCustom values={props.images} stateSelect={imgSelect} refSlide={slideImgRef} />
                        <Slide {...slideImgProps} canSwipe={true}>
                            {props.images.map((element, index) => (
                                <div className="flex justify-center max-h-full" key={index}>
                                    <img src={element} className="w-[65vw] max-w-[280px]" alt="" />
                                </div>
                            ))}
                        </Slide>
                    </div>
                </div>
            </div>

            {props.challenge && props.learned && (
                <div className="flex flex-col gap-16 justify-between mt-16">
                    <div>
                        <div className="flex mb-3 items-center">
                            <img src={iconChall} className="h-7 mr-3" alt="" />
                            <p className="font-semibold text-[28px]">{t('challenge')}</p>
                        </div>
                        <p className="text-[14px]  text-textColor indent-4">{props.challenge}</p>
                    </div>
                    <div>
                        <div className="flex mb-3 items-center">
                            <img src={iconLearn} className="h-7 mr-3" alt="" />
                            <p className="font-semibold text-[28px]">{t('learn')}</p>
                        </div>

                        <p className="text-[14px]  text-textColor indent-4">{props.learned}</p>
                    </div>
                </div>
            )}

            {props.features && (
                <Fragment>
                    <p className="font-semibold text-[28px] mt-16">{t('features')}</p>
                    <div className="w-full relative flex flex-col">
                        <IndicatorCustom values={props.features} stateSelect={featureSelect} refSlide={slideFeatureRef} />
                        <Slide {...slideFeatureProps} canSwipe={true}>
                            {props.features.map((element, index) => (
                                <Feature
                                    key={index}
                                    title={element.title}
                                    image={element.image}
                                    tags={element.tags}
                                    description={element.description}
                                    mobile
                                />
                            ))}
                        </Slide>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )

    return (
        <div className=" flex-1 min-h-screen bg-black">
            <HeaderProject name={nameProject} />
            <div className="flex flex-col justify-center items-center pb-20">
                <div className="px-5 sm:px-10 md:px-10 lg:px-20 max-w-full 2xl:max-w-7xl animate-fade-in-up">
                    {width > 868 ? renderWeb() : renderMobile()}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage
