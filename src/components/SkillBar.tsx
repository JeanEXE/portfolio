import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import { SkillBarType } from '../types/Types'

const SkillBar = ({ stack, width }: SkillBarType) => {
    const [widthAnim, setWidthAnim] = useState('w-0')

    const myRef = useRef()
    const { inViewport } = useInViewport(myRef)

    useEffect(() => {
        if (inViewport && widthAnim === 'w-0') {
            setTimeout(() => {
                setWidthAnim(width)
            }, 400)
        }
    }, [inViewport, widthAnim, width])

    return (
        <div
            ref={myRef}
            className="flex  w-full  mb-5 items-center"
        >
            <p className=" w-28  pr-2 text-[12px] text-right font-semibold sm:w-2/4">{stack}</p>
            <div className="w-full h-[1.1rem] sm:w-3/4 polygon-button bg-unselected">
                <div className={`bg-blue h-[100%] transition-width duration-1000 ease-in-out ${widthAnim} `} />
            </div>
        </div>
    )
}
export default SkillBar
