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
import ging1 from '../../assets/GingoBusiness/gingo1.jfif'
import ging2 from '../../assets/GingoBusiness/gingo2.jfif'
import ging3 from '../../assets/GingoBusiness/gingo3.jfif'
import ging4 from '../../assets/GingoBusiness/gingo4.jfif'
import ging5 from '../../assets/GingoBusiness/gingo5.jfif'
import ging6 from '../../assets/GingoBusiness/gingo6.jfif'
import ging7 from '../../assets/GingoBusiness/gingo7.jfif'
import ging8 from '../../assets/GingoBusiness/gingo8.jfif'
import ging9 from '../../assets/GingoBusiness/gingo9.jfif'
import ging10 from '../../assets/GingoBusiness/gingo10.jfif'
import ging11 from '../../assets/GingoBusiness/gingo11.jfif'
import ging12 from '../../assets/GingoBusiness/gingo12.jfif'
import ging13 from '../../assets/GingoBusiness/gingo13.jfif'
import ging14 from '../../assets/GingoBusiness/gingo14.jfif'
import ging15 from '../../assets/GingoBusiness/gingo15.jfif'

const IsabelaFlores = () => {
    const { width } = useDimensions()
    const { t } = useTranslation()

    const props: ProjectType = useRef<ProjectType>({
        name: 'Isabela Flores',
        logo: isaLogo,
        tags: ['React Native', 'TypeScript'],
        images: [ging1, ging2, ging3, ging4, ging5, ging6, ging7, ging8, ging9, ging10, ging11, ging12, ging13, ging14, ging15],
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
