import * as React from "react"
import { useState, useRef } from "react"
import CustomIndicator from "../Slider/CustomIndicator"
import Slider, { ISliderRef } from "../Slider/Slider"

const ImageSlider = ({ images, isMobile }: { images: string[]; isMobile?: boolean }) => {
    const [imgSelected, setImgSelected] = useState<number>(0)
    const sliderRef = useRef<ISliderRef>(null)

    const renderWeb = () => (
        <div className=" w-[500px] flex justify-center">
            <div className="w-full relative flex flex-col">
                <Slider
                    refSlider={sliderRef}
                    callbackOnSelect={(value) => setImgSelected(value)}
                >
                    {images.map((element, index) => (
                        <div
                            className="flex justify-center max-h-full "
                            key={index}
                        >
                            <img
                                src={element}
                                className="w-[220px] 2xl:w-[350px]"
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>
                <CustomIndicator
                    quantity={images.length}
                    stateSelect={imgSelected}
                    refSlide={sliderRef}
                />
            </div>
        </div>
    )

    const renderMobile = () => (
        <div className=" max-w-md w-full  flex  justify-center ">
            <div className="w-full relative flex flex-col">
                <CustomIndicator
                    quantity={images.length}
                    stateSelect={imgSelected}
                    refSlide={sliderRef}
                />
                <Slider
                    refSlider={sliderRef}
                    callbackOnSelect={(value) => setImgSelected(value)}
                    canSwipe
                >
                    {images.map((element, index) => (
                        <div
                            className="flex justify-center max-h-full"
                            key={index}
                        >
                            <img
                                src={element}
                                className="w-[65vw] max-w-[280px]"
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )

    if (isMobile) return renderMobile()
    return renderWeb()
}

export default ImageSlider
