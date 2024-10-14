import * as React from "react"
import Footer from "./Footer"
import HeaderProject from "./ProjectPages/HeaderProject"
import Tag from "./Tag/Tag"
import "react-slideshow-image/dist/styles.css"
import useDimensions from "../hooks/useDimensions"
import { IProjectPage } from "../types/Types"
import FeatureSlide from "./CustomSliders/FeatureSlider"
import ChallengeLearned from "./ProjectPages/ChallengeLearned"
import ImageSlider from "./CustomSliders/ImageSlider"

const ProjectPage = (props: IProjectPage) => {
    const { width } = useDimensions()

    const renderWeb = () => (
        <>
            <div className="flex justify-between pt-40">
                <div className=" w-1/2">
                    <img
                        src={props.logo}
                        className=" h-[150px] 2xl:h-[180px] "
                        alt=""
                    />
                    <div className="flex flex-wrap mt-3 mb-7  gap-4 ">
                        {props.tags.map((name: string, index: number) => (
                            <Tag
                                key={index}
                                text={name}
                            />
                        ))}
                    </div>
                    <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{props.description}</p>
                </div>
                <ImageSlider images={props.images} />
            </div>

            {props.challenge && props.learned && (
                <ChallengeLearned
                    challenge={props.challenge}
                    learned={props.learned}
                />
            )}
            {props.features && <FeatureSlide features={props.features} />}
        </>
    )

    const renderMobile = () => (
        <>
            <div className="flex  flex-col items-center pt-24 gap-6">
                <img
                    src={props.logo}
                    className=" h-[180px]"
                    alt=""
                />
                <div className="flex flex-wrap gap-4 justify-center">
                    {props.tags.map((name: string, index: number) => (
                        <Tag
                            key={index}
                            text={name}
                        />
                    ))}
                </div>

                <p className="max-w-md text-textColor indent-4">{props.description}</p>
                <ImageSlider
                    images={props.images}
                    isMobile
                />
            </div>

            {props.challenge && props.learned && (
                <ChallengeLearned
                    challenge={props.challenge}
                    learned={props.learned}
                    isMobile
                />
            )}
            {props.features && (
                <FeatureSlide
                    features={props.features}
                    isMobile
                />
            )}
        </>
    )

    return (
        <div className=" flex-1 min-h-screen bg-black">
            <HeaderProject name={props.name} />
            <div className="flex flex-col justify-center items-center pb-20">
                <div className="px-5 sm:px-10 md:px-10 lg:px-20 max-w-full 2xl:max-w-7xl animate-fade-in-up">
                    {width > 868 ? renderWeb() : renderMobile()}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage
