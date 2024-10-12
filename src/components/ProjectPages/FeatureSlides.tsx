import * as React from 'react'
import { useState, useRef, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Slide } from 'react-slideshow-image'
import { FeatureType } from '../../types/Types'
import { ArrowCustom, IndicatorCustom } from './CustomSliderComponents'
import Feature from './Feature'

const FeatureSlides = ({ features, isMobile }: { features: FeatureType[]; isMobile?: boolean }) => {
    const [featureSelect, setFeatureSelect] = useState<number>(0)
    const slideFeatureRef: any = useRef()

    const { t } = useTranslation()

    const slideFeatureProps: any = useRef({
        transitionDuration: 150,
        autoplay: false,
        prevArrow: ArrowCustom(),
        nextArrow: ArrowCustom(false),
        canSwipe: false,
        ref: slideFeatureRef,
        onChange: (previous: number, next: number) => setFeatureSelect(next)
    }).current

    const renderWeb = () => (
        <Fragment>
            <p className="font-semibold text-[35px] 2xl:text-[45px] mb-2">{t('features')}</p>
            <p className="text-[14px] 2xl:text-[17px] text-textColor mb-4">{t('features.description')}.</p>
            <div className="w-full relative  flex flex-col">
                <Slide {...slideFeatureProps}>
                    {features.map((element: any, index: number) => (
                        <Feature
                            key={index}
                            title={element.title}
                            image={element.image}
                            tags={element.tags}
                            description={element.description}
                        />
                    ))}
                </Slide>
                <IndicatorCustom
                    values={features}
                    stateSelect={featureSelect}
                    refSlide={slideFeatureRef}
                />
            </div>
        </Fragment>
    )

    const renderMobile = () => (
        <Fragment>
            <p className="font-semibold text-[28px] mt-16">{t('features')}</p>
            <p className="text-[14px] 2xl:text-[17px] text-textColor mb-4">{t('features.description')}.</p>
            <div className="w-full relative flex flex-col">
                <IndicatorCustom
                    values={features}
                    stateSelect={featureSelect}
                    refSlide={slideFeatureRef}
                />
                <Slide
                    {...slideFeatureProps}
                    canSwipe={true}
                >
                    {features.map((element, index) => (
                        <Feature
                            key={index}
                            title={element.title}
                            image={element.image}
                            tags={element.tags}
                            description={element.description}
                            mobile
                        />
                    ))}
                </Slide>
            </div>
        </Fragment>
    )

    if (isMobile) return renderMobile()
    return renderWeb()
}

export default FeatureSlides
