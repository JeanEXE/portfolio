import * as React from "react"
import { useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import { IFeature } from "../../types/Types"
import Feature from "../ProjectPage/Feature"
import CustomIndicator from "../Slider/CustomIndicator"
import Slider, { ISliderRef } from "../Slider/Slider"

const FeatureSlider = ({ features, isMobile }: { features: IFeature[]; isMobile?: boolean }) => {
    const [featureSelect, setFeatureSelect] = useState<number>(0)
    const sliderRef = useRef<ISliderRef>(null)

    const { t } = useTranslation()

    const renderWeb = () => (
        <>
            <p className="font-semibold text-[35px] 2xl:text-[45px] mb-2">{t("features")}</p>
            <p className="text-[14px] 2xl:text-[17px] text-textColor mb-4">{t("features.description")}.</p>
            <div className="w-full relative  flex flex-col">
                <Slider
                    refSlider={sliderRef}
                    callbackOnSelect={(value) => setFeatureSelect(value)}
                >
                    {features.map((element: IFeature, index: number) => (
                        <Feature
                            key={index}
                            title={t(element.title)}
                            image={element.image}
                            tags={element.tags}
                            description={t(element.description)}
                        />
                    ))}
                </Slider>
                <CustomIndicator
                    quantity={features.length}
                    stateSelect={featureSelect}
                    refSlide={sliderRef}
                />
            </div>
        </>
    )

    const renderMobile = () => (
        <>
            <p className="font-semibold text-[28px] mt-16">{t("features")}</p>
            <p className="text-[14px] 2xl:text-[17px] text-textColor mb-4">{t("features.description")}.</p>
            <div className="w-full relative flex flex-col">
                <CustomIndicator
                    quantity={features.length}
                    stateSelect={featureSelect}
                    refSlide={sliderRef}
                />
                <Slider
                    refSlider={sliderRef}
                    callbackOnSelect={(value) => setFeatureSelect(value)}
                    canSwipe
                >
                    {features.map((element, index) => (
                        <Feature
                            key={index}
                            title={t(element.title)}
                            image={element.image}
                            tags={element.tags}
                            description={t(element.description)}
                            mobile
                        />
                    ))}
                </Slider>
            </div>
        </>
    )

    if (isMobile) return renderMobile()
    return renderWeb()
}

export default FeatureSlider
