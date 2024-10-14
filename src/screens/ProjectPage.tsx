import * as React from "react"
import { Fragment } from "react"
import { ChallengeLearned, FeatureSlider, Footer, HeaderProject, ImageSlider, Tag } from "../components"
import "react-slideshow-image/dist/styles.css"
import useDimensions from "../hooks/useDimensions"
import { IProjectPage } from "../types/Types"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

interface LocationState {
    state: IProjectPage
}

const ProjectPage = () => {
    const { width } = useDimensions()
    const { state } = useLocation() as LocationState
    const { t } = useTranslation()

    const renderWeb = () => (
        <Fragment>
            <div className="flex justify-between pt-40">
                <div className=" w-1/2">
                    <img
                        src={state.logo}
                        className=" h-[150px] 2xl:h-[180px] "
                        alt=""
                    />
                    <div className="flex flex-wrap mt-3 mb-7  gap-4 ">
                        {state.tags.map((name: string, index: number) => (
                            <Tag
                                key={index}
                                text={name}
                            />
                        ))}
                    </div>
                    <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{t(state.description)}</p>
                </div>
                <ImageSlider images={state.images} />
            </div>

            {state.challenge && state.learned && (
                <ChallengeLearned
                    challenge={t(state.challenge)}
                    learned={t(state.learned)}
                />
            )}
            {state.features && <FeatureSlider features={state.features} />}
        </Fragment>
    )

    const renderMobile = () => (
        <Fragment>
            <div className="flex  flex-col items-center pt-24 gap-6">
                <img
                    src={state.logo}
                    className=" h-[180px]"
                    alt=""
                />
                <div className="flex flex-wrap gap-4 justify-center">
                    {state.tags.map((name: string, index: number) => (
                        <Tag
                            key={index}
                            text={name}
                        />
                    ))}
                </div>

                <p className="max-w-md text-textColor indent-4">{t(state.description)}</p>
                <ImageSlider
                    images={state.images}
                    isMobile
                />
            </div>

            {state.challenge && state.learned && (
                <ChallengeLearned
                    challenge={t(state.challenge)}
                    learned={t(state.learned)}
                    isMobile
                />
            )}
            {state.features && (
                <FeatureSlider
                    features={state.features}
                    isMobile
                />
            )}
        </Fragment>
    )

    return (
        <div className=" flex-1 min-h-screen bg-black">
            <HeaderProject name={state.name} />
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
