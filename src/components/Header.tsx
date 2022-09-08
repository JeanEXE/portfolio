import * as React from 'react'
import Separator from './Separator'
import '../styles/GlitchAnimation.css'
import Myname from './MyName'
import Switch from './SwitchLanguage/Switch'
import { useTranslation } from 'react-i18next'

const Header = ({ ref1, ref2, ref3, ref4 }: { ref1: any; ref2: any; ref3: any; ref4: any }) => {
    const executeScroll = (ref: any) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const { t } = useTranslation()

    //sticky top-0 z-50
    // em baixo  'absolute top-[140px] right-4 md:right-auto md:ml-96 md:top-[120px]'
    return (
        <header className="bg-yellow  pt-3 mb-5 sm:mb-10 flex flex-col items-center">
            <div className="flex flex-col justify-between md:flex-row md:items-center sm:px-10 lg:px-20 lg:max-w-7xl w-full ">
                <div className="flex ml-5 sm:ml-0">
                    <Myname />
                </div>
                <div className="flex overflow-x-auto py-4 px-5 sm:justify-center gap-5 sm:gap-10">
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref1)}>
                        <span className="btnGlitch" />
                        <span className="text-[14px] 2xl:text-[16px]">{t('header.about')}_</span>
                    </button>
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref4)}>
                        <span className="btnGlitch" />
                        <span className="text-[14px] 2xl:text-[16px]">{t('header.portfolio')}_</span>
                    </button>
                    <button className="btnContainer btnText" onClick={() => executeScroll(ref2)}>
                        <span className="btnGlitch" />
                        <span className="text-[14px] 2xl:text-[16px]">{t('header.skills')}_</span>
                    </button>
                    <button className="btnContainer btnText mr-2" onClick={() => executeScroll(ref3)}>
                        <span className="btnGlitch" />
                        <span className="text-[14px] 2xl:text-[16px]">{t('header.contact')}_</span>
                    </button>
                    <div className="absolute right-2 mt-1 top-[15px] md:relative md:mt-0 md:top-1 md:ml-4 md:right-0">
                        <Switch />
                    </div>
                </div>
            </div>
            <Separator />
        </header>
    )
}

export default Header
