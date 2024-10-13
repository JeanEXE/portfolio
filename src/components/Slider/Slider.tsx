import * as React from "react"
import { Slide } from "react-slideshow-image"
import { CustomArrow } from "./CustomArrow"

interface ISlider {
    callbackOnSelect: (value: number) => void
    refSlider: React.RefObject<ISliderRef>
    children: React.ReactElement[]
    canSwipe?: boolean
}

export interface ISliderRef {
    goTo: (index: number) => void
}

const Slider = ({ callbackOnSelect, refSlider, children, canSwipe }: ISlider) => {
    return (
        <Slide
            transitionDuration={150}
            autoplay={false}
            prevArrow={CustomArrow()}
            nextArrow={CustomArrow(false)}
            canSwipe={!!canSwipe}
            ref={refSlider}
            onChange={(_: number, next: number) => callbackOnSelect(next)}
        >
            {children}
        </Slide>
    )
}

export default Slider
