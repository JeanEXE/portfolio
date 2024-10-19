import * as React from "react"
import circle from "../assets/img/circle.png"
import circleName from "../assets/img/circle_name.png"

const AnimatedBadge = () => {
    return (
        <div>
            <div className="hidden sm:block w-56 h-56 absolute top-[-110px] left-[2%] lg:left-[5%]  2xl:left-[10%]">
                <img
                    className=" rounded-full absolute ml-[33px] mt-[33px] z-10"
                    src={circle}
                    alt="background circle decoration"
                />
                <img
                    className=" rounded-full border animate-spin-slow bg-black"
                    src={circleName}
                    alt="name decoration"
                />
            </div>
        </div>
    )
}

export default AnimatedBadge
