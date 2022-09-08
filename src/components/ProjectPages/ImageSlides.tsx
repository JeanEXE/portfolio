import * as React from 'react'
import { useState, useRef } from 'react'
import { Slide } from 'react-slideshow-image'
import { ArrowCustom, IndicatorCustom } from './CustomSliderComponents'

const ImageSlides = ({ images, isMobile }: { images: any[]; isMobile?: boolean }) => {
    const [imgSelect, setImgSelect] = useState<number>(0)
    const slideImgRef: any = useRef()

    const slideImgProps: any = useRef({
        transitionDuration: 150,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideImgRef,
        onChange: (previous: number, next: number) => setImgSelect(next)
    }).current

    const renderWeb = () => (
        <div className=" w-[500px] flex justify-center">
            <div className="w-full relative flex flex-col">
                <Slide {...slideImgProps}>
                    {images.map((element, index) => (
                        <div className="flex justify-center max-h-full " key={index}>
                            <img src={element} className="w-[220px] 2xl:w-[350px]" alt="" />
                        </div>
                    ))}
                </Slide>
                <IndicatorCustom values={images} stateSelect={imgSelect} refSlide={slideImgRef} />
            </div>
        </div>
    )

    const renderMobile = () => (
        <div className=" max-w-md w-full  flex  justify-center ">
            <div className="w-full relative flex flex-col">
                <IndicatorCustom values={images} stateSelect={imgSelect} refSlide={slideImgRef} />
                <Slide {...slideImgProps} canSwipe={true}>
                    {images.map((element, index) => (
                        <div className="flex justify-center max-h-full" key={index}>
                            <img src={element} className="w-[65vw] max-w-[280px]" alt="" />
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )

    if (isMobile) return renderMobile()
    return renderWeb()
}

export default ImageSlides
