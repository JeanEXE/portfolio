import * as React from "react"
import { useRef, Fragment } from "react"
import Footer from "../../components/Footer"
import { useTranslation } from "react-i18next"
import HeaderProject from "../../components/ProjectPages/HeaderProject"
import Tag from "../../components/Tag/Tag"
import "react-slideshow-image/dist/styles.css"
import useDimensions from "../../hooks/useDimensions"
import { ProjectType } from "../../types/Types"
import FeatureSlider from "../../components/CustomSliders/FeatureSlider"
import ChallengeLearned from "../../components/ProjectPages/ChallengeLearned"
import ImageSlider from "../../components/CustomSliders/ImageSlider"
import floresLogo from "../../assets/FloresOnline/floresLogo.png"
import fol1 from "../../assets/FloresOnline/fol1.jpeg"
import fol2 from "../../assets/FloresOnline/fol2.jpeg"
import fol3 from "../../assets/FloresOnline/fol3.jpg"
import fol4 from "../../assets/FloresOnline/fol4.jpeg"
import fol5 from "../../assets/FloresOnline/fol5.jpeg"
import fol6 from "../../assets/FloresOnline/fol6.jpeg"
import fol7 from "../../assets/FloresOnline/fol7.jpeg"
import fol9 from "../../assets/FloresOnline/fol9.jpeg"
import fol10 from "../../assets/FloresOnline/fol10.jpeg"
import fol11 from "../../assets/FloresOnline/fol11.jpeg"
import fol12 from "../../assets/FloresOnline/fol12.jpeg"
import fol13 from "../../assets/FloresOnline/fol13.jpeg"
import fol14 from "../../assets/FloresOnline/fol14.jpeg"
import fol15 from "../../assets/FloresOnline/fol15.jpg"
import fol16 from "../../assets/FloresOnline/fol16.jpg"
import fol17 from "../../assets/FloresOnline/fol17.jpeg"
import fol19 from "../../assets/FloresOnline/fol19.jpeg"
import fol20 from "../../assets/FloresOnline/fol20.jpeg"
import fol21 from "../../assets/FloresOnline/fol21.jpeg"
import fol22 from "../../assets/FloresOnline/fol22.jpg"
import fol23 from "../../assets/FloresOnline/fol23.jpg"

const IsabelaFlores = () => {
    const { width } = useDimensions()
    const { t } = useTranslation()

    const props: ProjectType = useRef<ProjectType>({
        name: "Flores Online",
        logo: floresLogo,
        tags: ["React Native", "TypeScript"],
        images: [
            fol1,
            fol2,
            fol3,
            fol4,
            fol5,
            fol6,
            fol7,
            fol9,
            fol10,
            fol11,
            fol12,
            fol13,
            fol14,
            fol15,
            fol16,
            fol17,
            fol19,
            fol20,
            fol21,
            fol22,
            fol23
        ],
        description: t("prj4.description"),
        challenge: t("prj4.challenge"),
        learned: t("prj4.learned")
    }).current

    const renderWeb = () => (
        <Fragment>
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
            {props.features && <FeatureSlider features={props.features} />}
        </Fragment>
    )

    const renderMobile = () => (
        <Fragment>
            <div className="flex  flex-col items-center pt-24 gap-6">
                <img
                    src={props.logo}
                    className=" h-[180px]"
                    alt=""
                />
                <div className="flex flex-wrap gap-4 ">
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
                <FeatureSlider
                    features={props.features}
                    isMobile
                />
            )}
        </Fragment>
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

export default IsabelaFlores
