import * as React from 'react'
import arrow from '../../assets/svg/icon-arrow.svg'

interface ICustomIndicator {
    quantity: number
    stateSelect: number
    refSlide: React.RefObject<{ goTo: (index: number) => void }>
}

export const CustomArrow = (left = true) => (
    <img
        src={arrow}
        alt="Arrow"
        className={`h-5 sm:h-7 absolute cursor-pointer -right-5 sm:right-2 rotate-90 ${left && '-left-5 sm:left-2 -rotate-90'}`}
    />
)

export const CustomIndicator = React.memo(({ quantity, stateSelect, refSlide }: ICustomIndicator) => {
    const handleClick = React.useCallback(
        (index: number) => {
            refSlide.current?.goTo(index)
        },
        [refSlide]
    )

    return (
        <div className="flex flex-wrap gap-1 2xl:gap-2 my-4 max-w-[500px] justify-center self-center">
            {Array.from({ length: quantity }).map((_, index) => (
                <button
                    className={`indicator p-[8px] 2xl:p-[10px] cursor-pointer ${stateSelect === index ? 'bg-blue' : 'bg-unselected'}`}
                    key={index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    )
})

CustomIndicator.displayName = 'CustomIndicator'
