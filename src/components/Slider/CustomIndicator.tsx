import * as React from "react"

interface ICustomIndicator {
    quantity: number
    stateSelect: number
    refSlide: React.RefObject<{ goTo: (index: number) => void }>
}

const CustomIndicator = React.memo(({ quantity, stateSelect, refSlide }: ICustomIndicator) => {
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
                    className={`indicator p-[8px] 2xl:p-[10px] cursor-pointer ${stateSelect === index ? "bg-blue" : "bg-unselected"}`}
                    key={index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    )
})

CustomIndicator.displayName = "CustomIndicator"

export default CustomIndicator
