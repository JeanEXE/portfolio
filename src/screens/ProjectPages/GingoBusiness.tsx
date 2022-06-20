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
import gingo from '../../assets/img/gingo.png'
import ging from '../../assets/img/Gingo/gingo1.jpg'
import ging2 from '../../assets/img/Gingo/gingo2.jpg'

const GingoBusiness = () => {
    const { width } = useDimensions()
    const { t } = useTranslation()

    const props: ProjectType = useRef<ProjectType>({
        name: 'Gingo Business',
        logo: gingo,
        tags: ['React Native', 'Node.js'],
        images: [ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging],
        description: t('prj1.description'),
        challenge: t('prj1.challenge'),
        learned: t('prj1.learned'),
        features: [
            {
                title: 'Push Notification',
                image: 'https://i.imgur.com/ohXtP7h.gif',
                tags: ['Firebase', 'APNS', 'APNS', 'Socket.io', 'APNS', 'APNS'],
                description: t('prj1.feature1.description')
            },
            {
                title: 'Chat: Vídeo',
                image: 'https://i.imgur.com/ohXtP7h.gif',
                tags: ['Firebase', 'APNS', 'APNS', 'Socket.io', 'APNS', 'APNS'],
                description: t('prj1.feature2.description')
            }
        ]
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

export default GingoBusiness
