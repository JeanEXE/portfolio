import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { useInViewport } from "react-in-viewport"
import { ISkillBar } from "../types/Types"

const SkillBar = ({ stack, width }: ISkillBar) => {
    const [widthAnim, setWidthAnim] = useState("w-0")

    const myRef = useRef()
    const { inViewport } = useInViewport(myRef)

    useEffect(() => {
        if (inViewport && widthAnim === "w-0") {
            setTimeout(() => {
                setWidthAnim(width)
            }, 400)
        }
    }, [inViewport, widthAnim, width])

    return (
        <div
            ref={myRef}
            className="flex mb-5 items-center"
        >
            <p className="w-2/6 pr-2 text-[12px] font-semibold text-right break-words">{stack}</p>
            <div className="w-4/6 h-[1.1rem] polygon-button bg-unselected">
                <div className={`bg-blue h-[100%] transition-width duration-1000 ease-in-out ${widthAnim} `} />
            </div>
        </div>
    )
}
export default SkillBar
