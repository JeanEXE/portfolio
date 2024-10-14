import * as React from "react"
import { Link } from "react-router-dom"
import Myname from "../MyName"
import useDimensions from "../../hooks/useDimensions"
import { useTranslation } from "react-i18next"

const HeaderProject = ({ name }: { name: string }) => {
    const { width } = useDimensions()
    const { t } = useTranslation()

    const renderMobile = () => (
        <div>
            <div className=" bg-yellow w-full border-b border-black ">
                <div className="flex h-[45px]  items-center  ml-5">
                    <Link to="/">
                        <Myname />
                    </Link>
                </div>
            </div>
            <div className="flex overflow-hidden  animate-slide-left">
                <div className="w-[240px] bg-[#202020] h-[45px]">
                    <div className="flex h-full   items-center  ml-5">
                        <p className="font-semibold text-[16px]">{`${t("project")}_${name}`}</p>
                    </div>
                </div>
                <div className="relative  border-r-transparent bottom-[-0px]  left-[-1px] border-[#202020] border-r-[45.8px] border-t-[45.8px]" />
            </div>
        </div>
    )

    const renderWeb = () => (
        <div className="flex  animate-slide-left">
            <div className="w-[230px] 2xl:w-[300px] bg-yellow h-[60px] 2xl:h-[80px]">
                <div className="flex h-[60px] 2xl:h-[80px]  items-center  ml-5">
                    <Link to="/">
                        <Myname />
                    </Link>
                </div>
            </div>

            <div className="relative  bg-[#202020] border-r-transparent  border-yellow border-r-[60px] border-t-[60px] 2xl:border-r-[80px] 2xl:border-t-[80px]" />

            <div className="w-[350px] 2xl:w-[500px] bg-[#202020] h-[60px] 2xl:h-[80px] ">
                <div className="flex h-full   items-center  ml-5 ">
                    <p className="font-semibold text-[19px] 2xl:text-[21px]">{`${t("project")}_${name}`}</p>
                </div>
            </div>
            <div className="relative  border-r-transparent  border-[#202020] border-r-[60px] border-t-[60px] 2xl:border-r-[80px] 2xl:border-t-[80px]" />
        </div>
    )

    return <div className="fixed w-full z-20">{width > 650 ? renderWeb() : renderMobile()}</div>
}

export default HeaderProject
