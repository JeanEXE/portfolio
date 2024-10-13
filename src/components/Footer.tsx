import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { useInViewport } from "react-in-viewport"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { insertEvent } from "../helpers/Analytics"
import arrow from "../assets/svg/icon-arrow.svg"
import coffe from "../assets/svg/icon-coffe.svg"
import heart from "../assets/svg/icon-heart.svg"
import tailwind from "../assets/svg/icon-tailwind.svg"
import react from "../assets/svg/icon-react.svg"
import useDimensions from "../hooks/useDimensions"
import Separator from "./Separator"

const Footer = () => {
    const { width } = useDimensions()
    const [animate, setAnimate] = useState("opacity-0")
    const myRef = useRef()
    const refEndPage = useRef()
    const { t } = useTranslation()
    const { inViewport } = useInViewport(myRef)
    const { pathname } = useLocation()
    const endPage = useInViewport(refEndPage)
    const canSaveEvent = useRef(true)

    useEffect(() => {
        if (inViewport && animate === "opacity-0") {
            setTimeout(() => {
                setAnimate("animate-fade-in-up")
            }, 300)
        }
    }, [inViewport, animate])

    useEffect(() => {
        if (endPage.inViewport && canSaveEvent.current) {
            canSaveEvent.current = false

            let stringPath = "/MainPage"
            if (pathname !== "/") {
                stringPath = pathname
            }

            insertEvent(`scrollou fim: ${stringPath}`)
        }
    }, [endPage, pathname])

    const renderMobile = () => (
        <div className={`${animate} py-10 px-5 flex flex-col gap-12 justify-center text-black text-center font-bold text-[16px]`}>
            <div>
                <p className="flex items-center justify-center">
                    {t("footer.left.text1")}{" "}
                    <img
                        src={heart}
                        className="w-4"
                        alt=""
                    />
                    .
                </p>
                <p>
                    {t("footer.left.text2")} {t("footer.left.text3")}
                </p>
                <p className="flex items-center h-8 justify-center">
                    {t("footer.left.text4")}{" "}
                    <img
                        src={react}
                        className="h-10 mb-[2px]"
                        alt=""
                    />{" "}
                    {t("footer.left.text5")}
                </p>
                <p className="flex items-center h-7 justify-center">
                    {t("footer.left.text6")}
                    <img
                        src={tailwind}
                        className=" w-32"
                        alt=""
                    />
                </p>
            </div>
            <div ref={myRef}>
                {t("footer.right.text1")}
                <p>{t("footer.right.text2")}</p>
                <p>
                    {t("footer.right.text3")} {t("footer.right.text4")},
                </p>
                <p className="flex justify-center">
                    {t("footer.right.text5")}{" "}
                    <img
                        src={coffe}
                        className="w-5"
                        alt=""
                    />
                </p>
            </div>
        </div>
    )

    const renderWeb = () => (
        <div
            className={`${animate} py-14 flex gap-16 xl:gap-80 justify-center items-center text-black font-bold text-[16px] 2xl:text-[18px]`}
        >
            <div>
                <p className="flex">
                    {t("footer.left.text1")}{" "}
                    <img
                        src={heart}
                        className="h-5 mt-[2px]"
                        alt=""
                    />
                    . {t("footer.left.text2")}
                </p>
                <p className="flex items-center h-10 justify-center">
                    {t("footer.left.text3")} {t("footer.left.text4")}{" "}
                    <img
                        src={react}
                        className="h-12 mb-[3px]"
                        alt=""
                    />
                    {t("footer.left.text5")}
                </p>
                <p className="flex items-center h-8 justify-center">
                    {t("footer.left.text6")}{" "}
                    <img
                        src={tailwind}
                        className="w-36 h-20"
                        alt=""
                    />
                </p>
            </div>
            <div ref={myRef}>
                {`${t("footer.right.text1")} ${t("footer.right.text2")} ${t("footer.right.text3")}`}
                <p className="flex justify-center items-center">
                    {`${t("footer.right.text4")}, ${t("footer.right.text5")}`}{" "}
                    <img
                        src={coffe}
                        className="w-5"
                        alt=""
                    />
                </p>
            </div>
        </div>
    )

    return (
        <div className="pb-5 absolute w-full left-0 bg-black">
            <div className=" bg-yellow ">
                <Separator inverted />
                {width > 868 ? renderWeb() : renderMobile()}
                <Separator />
            </div>
            <div className=" w-full flex h-20 justify-center items-center">
                <button
                    onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
                    className="mt-6 mb-5 flex align-center justify-center  animate-bounce"
                >
                    <img
                        src={arrow}
                        className="w-6 h-6 mr-3"
                        alt=""
                    />
                    <p className="text-[15px] 2xl:text-[17px] text-blue hover:font-semibold">{t("back-top")}</p>
                </button>
            </div>
            <div
                className="bg-blackSec w-full flex h-16 justify-center items-center"
                ref={refEndPage}
            >
                <p className="text-[14px] 2xl:text-[16px]">© 2024 Jean Reis - Analytics by Firebase :)</p>
            </div>
        </div>
    )
}

export default Footer
