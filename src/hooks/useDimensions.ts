import { useState, useEffect } from "react"

const hasWindow = typeof window !== "undefined"

function getWindowDimensions() {
    return {
        width: hasWindow ? window.innerWidth : null,
        height: hasWindow ? window.innerHeight : null
    }
}

export default function useDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)

    useEffect(() => {
        if (!hasWindow) return

        const handleResize = () => {
            window.requestAnimationFrame(() => {
                const { width, height } = getWindowDimensions()

                if (width !== windowDimensions.width || height !== windowDimensions.height) {
                    setWindowDimensions({ width, height })
                }
            })
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [windowDimensions])

    return windowDimensions
}
