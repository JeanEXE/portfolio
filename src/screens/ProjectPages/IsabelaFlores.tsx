import * as React from 'react'
import { useRef, Fragment } from 'react'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
import HeaderProject from '../../components/ProjectPages/HeaderProject'
import Tag from '../../components/Tag/Tag'
import 'react-slideshow-image/dist/styles.css'
import useDimensions from '../../hooks/useDimensions'
import { ProjectType } from '../../types/Types'
import FeatureSlide from '../../components/ProjectPages/FeatureSlides'
import ChallengeLearned from '../../components/ProjectPages/ChallengeLearned'
import ImageSlider from '../../components/ProjectPages/ImageSlides'
import isaLogo from '../../assets/IsabelaFlores/isaLogo.png'
import isa1 from '../../assets/IsabelaFlores/isa1.jfif'
import isa2 from '../../assets/IsabelaFlores/isa2.jfif'
import isa3 from '../../assets/IsabelaFlores/isa3.jfif'
import isa4 from '../../assets/IsabelaFlores/isa4.jfif'
import isa5 from '../../assets/IsabelaFlores/isa5.jfif'
import isa6 from '../../assets/IsabelaFlores/isa6.jfif'
import isa7 from '../../assets/IsabelaFlores/isa7.jfif'
import isa8 from '../../assets/IsabelaFlores/isa8.jfif'
import isa9 from '../../assets/IsabelaFlores/isa9.jfif'
import isa10 from '../../assets/IsabelaFlores/isa10.jfif'
import isa11 from '../../assets/IsabelaFlores/isa11.jfif'
import isa12 from '../../assets/IsabelaFlores/isa12.jfif'
import isa13 from '../../assets/IsabelaFlores/isa13.jfif'
// import isa14 from '../../assets/IsabelaFlores/isa14.jfif'
// import isa15 from '../../assets/IsabelaFlores/isa15.jfif'
import isa16 from '../../assets/IsabelaFlores/isa16.jfif'
import isa17 from '../../assets/IsabelaFlores/isa17.jfif'
import isa18 from '../../assets/IsabelaFlores/isa18.jfif'
import isa19 from '../../assets/IsabelaFlores/isa19.jfif'
// import isa20 from '../../assets/IsabelaFlores/isa20.jfif'
// import isa21 from '../../assets/IsabelaFlores/isa21.jfif'
// import isa22 from '../../assets/IsabelaFlores/isa22.jfif'
import isa23 from '../../assets/IsabelaFlores/isa23.jfif'
import isa24 from '../../assets/IsabelaFlores/isa24.jfif'
import isa25 from '../../assets/IsabelaFlores/isa25.jfif'
import isa26 from '../../assets/IsabelaFlores/isa26.jfif'
import isa27 from '../../assets/IsabelaFlores/isa27.jfif'
import isa28 from '../../assets/IsabelaFlores/isa28.jfif'
import isa29 from '../../assets/IsabelaFlores/isa29.jfif'
import isa30 from '../../assets/IsabelaFlores/isa30.jfif'
import isa31 from '../../assets/IsabelaFlores/isa31.jfif'
import isa33 from '../../assets/IsabelaFlores/isa33.jfif'
import isa34 from '../../assets/IsabelaFlores/isa34.jfif'
import isa35 from '../../assets/IsabelaFlores/isa35.jfif'
import isa36 from '../../assets/IsabelaFlores/isa36.jfif'
import isa37 from '../../assets/IsabelaFlores/isa37.jfif'

const IsabelaFlores = () => {
    const { width } = useDimensions()
    const { t } = useTranslation()

    const props: ProjectType = useRef<ProjectType>({
        name: 'Isabela Flores',
        logo: isaLogo,
        tags: ['React Native', 'TypeScript'],
        images: [
            isa1,
            isa2,
            isa9,
            isa3,
            isa4,
            isa5,
            isa11,
            isa12,
            isa13,
            isa17,
            isa6,
            isa10,
            isa7,
            isa8,
            isa24,
            isa25,
            isa16,
            isa18,
            isa26,
            isa27,
            isa28,
            isa30,
            isa34,
            isa36,
            isa33,
            isa19,
            isa23,
            isa29,
            isa31,
            isa35,
            isa37
        ],
        description: t('prj3.description'),
        challenge: t('prj3.challenge'),
        learned: t('prj3.learned')
    }).current

    const renderWeb = () => (
        <Fragment>
            <div className="flex justify-between pt-40">
                <div className=" w-1/2">
                    <img src={props.logo} className=" h-[150px] 2xl:h-[180px] " alt="" />
                    <div className="flex flex-wrap mt-3 mb-7  gap-4 ">
                        {props.tags.map((name: string, index: number) => (
                            <Tag key={index} text={name} />
                        ))}
                    </div>
                    <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{props.description}</p>
                </div>
                <ImageSlider images={props.images} />
            </div>

            {props.challenge && props.learned && <ChallengeLearned challenge={props.challenge} learned={props.learned} />}
            {props.features && <FeatureSlide features={props.features} />}
        </Fragment>
    )

    const renderMobile = () => (
        <Fragment>
            <div className="flex  flex-col items-center pt-24 gap-6">
                <img src={props.logo} className=" h-[180px]" alt="" />
                <div className="flex flex-wrap gap-4 ">
                    {props.tags.map((name: string, index: number) => (
                        <Tag key={index} text={name} />
                    ))}
                </div>

                <p className="max-w-md text-textColor indent-4">{props.description}</p>
                <ImageSlider images={props.images} isMobile />
            </div>

            {props.challenge && props.learned && <ChallengeLearned challenge={props.challenge} learned={props.learned} isMobile />}
            {props.features && <FeatureSlide features={props.features} isMobile />}
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
