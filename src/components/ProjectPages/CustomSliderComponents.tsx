import * as React from 'react'
import arrow from '../../assets/svg/icon-arrow.svg'

export const ArrowCustom = (left = true) => (
    <img
        src={arrow}
        alt=""
        className={`h-5 sm:h-7 absolute cursor-pointer -right-5 sm:right-2 rotate-90 ${left && '-left-5 sm:left-2 -rotate-90'}`}
    />
)

export const IndicatorCustom = ({ values, stateSelect, refSlide }: { values: any; stateSelect: number; refSlide: any }) => (
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
