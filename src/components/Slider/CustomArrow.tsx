import * as React from "react"
import arrow from "../../assets/svg/icon-arrow.svg"

const CustomArrow = (left = true) => (
    <img
        src={arrow}
        alt="arrow"
        className={`h-5 sm:h-7 absolute cursor-pointer -right-5 sm:right-2 rotate-90 ${left && "-left-5 sm:left-2 -rotate-90"}`}
    />
)

export default CustomArrow
