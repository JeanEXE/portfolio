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
import ging1 from '../../assets/Gingo/gingo1.jfif'
import ging2 from '../../assets/Gingo/gingo2.jfif'
import ging3 from '../../assets/Gingo/gingo3.jfif'
import ging4 from '../../assets/Gingo/gingo4.jfif'
import ging5 from '../../assets/Gingo/gingo5.jfif'
import ging6 from '../../assets/Gingo/gingo6.jfif'
import ging7 from '../../assets/Gingo/gingo7.jfif'
import ging8 from '../../assets/Gingo/gingo8.jfif'
import ging9 from '../../assets/Gingo/gingo9.jfif'
import ging10 from '../../assets/Gingo/gingo10.jfif'
import ging11 from '../../assets/Gingo/gingo11.jfif'
import ging12 from '../../assets/Gingo/gingo12.jfif'
import ging13 from '../../assets/Gingo/gingo13.jfif'
import ging14 from '../../assets/Gingo/gingo14.jfif'
import ging15 from '../../assets/Gingo/gingo15.jfif'
import ging16 from '../../assets/Gingo/gingo16.jfif'
import ging17 from '../../assets/Gingo/gingo17.jfif'
import ging18 from '../../assets/Gingo/gingo18.jfif'
import ging19 from '../../assets/Gingo/gingo19.jfif'
import ging20 from '../../assets/Gingo/gingo20.jfif'
import ging21 from '../../assets/Gingo/gingo21.jfif'
import feature1 from '../../assets/Gingo/Gifs/feature-push.gif'
import feature2 from '../../assets/Gingo/Gifs/feature-image.gif'
import feature3 from '../../assets/Gingo/Gifs/feature-audio.gif'
import feature4 from '../../assets/Gingo/Gifs/feature-video.gif'
import feature5 from '../../assets/Gingo/Gifs/feature-file.gif'

const Gingo = () => {
    const { width } = useDimensions()
    const { t } = useTranslation()

    const props: ProjectType = useRef<ProjectType>({
        name: 'Gingo',
        logo: gingo,
        tags: ['React Native', 'Node.js', 'MongoDB', 'SQLite'],
        images: [
            ging1,
            ging2,
            ging3,
            ging4,
            ging5,
            ging6,
            ging7,
            ging8,
            ging9,
            ging10,
            ging11,
            ging12,
            ging13,
            ging14,
            ging15,
            ging16,
            ging17,
            ging18,
            ging19,
            ging20,
            ging21
        ],
        description: t('prj1.description'),
        challenge: t('prj1.challenge'),
        learned: t('prj1.learned'),
        features: [
            {
                title: 'Push Notification',
                image: feature1,
                tags: ['Firebase', 'APNS', 'Swift', 'Javascript'],
                description: t('prj1.feature1.description')
            },
            {
                title: 'Chat: Imagem',
                image: feature2,
                tags: ['React Native', 'Socket.io', 'Amazon S3', 'SQLite'],
                description: t('prj1.feature2.description')
            },
            {
                title: 'Chat: Áudio',
                image: feature3,
                tags: ['React Native', 'Socket.io', 'Amazon S3', 'SQLite'],
                description: t('prj1.feature3.description')
            },
            {
                title: 'Chat: Vídeo',
                image: feature4,
                tags: ['React Native', 'Socket.io', 'Amazon S3', 'SQLite'],
                description: t('prj1.feature4.description')
            },
            {
                title: 'Chat: Arquivos',
                image: feature5,
                tags: ['React Native', 'Socket.io', 'Amazon S3', 'SQLite'],
                description: t('prj1.feature5.description')
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
                <div className="flex flex-wrap gap-4 justify-center">
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

export default Gingo
