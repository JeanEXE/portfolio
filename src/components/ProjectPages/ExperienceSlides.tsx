import * as React from 'react'
import { useState, useRef, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Slide } from 'react-slideshow-image'
import { ArrowCustom, IndicatorCustom } from './CustomSliderComponents'

const ExperienceSlides = () => {
    const [selected, setSelected] = useState<number>(0)
    const slideRef: any = useRef()

    const { t } = useTranslation()

    const slideProps: any = useRef({
        transitionDuration: 150,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: true,
        ref: slideRef,
        onChange: (previous: number, next: number) => setSelected(next)
    }).current

    const jobs = [
        {
            title: t('work2.title'),
            time: ` 2022 - ${t('currently')}`,
            description: t('work2.description')
        },
        {
            title: t('work1.title'),
            time: ` 2018 - 2022`,
            description: t('work1.description')
        }
    ]

    return (
        <Fragment>
            <div className="w-full relative flex flex-col">
                <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                <div className="flex items-center mb-2">
                    <p className="text-[21px] sm:text-[25px] 2xl:text-[32px] font-semibold mr-6">{t('experience')}</p>
                    <IndicatorCustom
                        values={jobs}
                        stateSelect={selected}
                        refSlide={slideRef}
                    />
                </div>
                <Slide {...slideProps}>
                    {jobs.map((element: any, index: number) => (
                        <div
                            className="max-h-full px-4 sm:px-12 bg-blackSec py-10 polygon-card-mobile sm:polygon-card"
                            key={index}
                        >
                            <p className="text-[13px] 2xl:text-[16px]  mb-1">{`${element.title}\n(${element.time})`}</p>
                            <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{element.description}</p>
                        </div>
                    ))}
                </Slide>
            </div>
        </Fragment>
    )
}

export default ExperienceSlides
