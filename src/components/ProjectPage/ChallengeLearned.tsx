import * as React from "react"
import { useTranslation } from "react-i18next"
import iconChall from "../../assets/svg/icon-chall.svg"
import iconLearn from "../../assets/svg/icon-learn.svg"

const ChallengeLearned = ({ challenge, learned, isMobile }: { challenge: string; learned: string; isMobile?: boolean }) => {
    const { t } = useTranslation()

    const renderWeb = () => (
        <div className="py-20 flex gap-24">
            <div className="w-2/4">
                <img
                    src={iconChall}
                    className="h-7 2xl:h-9 mb-2"
                    alt="target"
                />
                <p className="font-semibold text-[30px] 2xl:text-[40px] mb-4">{t("challenge")}</p>
                <p className="text-[14px] 2xl:text-[16px]  text-textColor indent-4">{challenge}</p>
            </div>
            <div className="w-2/4">
                <img
                    src={iconLearn}
                    className="h-7 2xl:h-9 mb-2"
                    alt="star"
                />
                <p className="font-semibold text-[30px] 2xl:text-[40px] mb-4">{t("learn")}</p>
                <p className="text-[14px] 2xl:text-[16px]  text-textColor indent-4">{learned}</p>
            </div>
        </div>
    )

    const renderMobile = () => (
        <div className="flex flex-col gap-16 justify-between mt-16">
            <div>
                <div className="flex mb-3 items-center">
                    <img
                        src={iconChall}
                        className="h-7 mr-3"
                        alt="target"
                    />
                    <p className="font-semibold text-[28px]">{t("challenge")}</p>
                </div>
                <p className="text-[14px]  text-textColor indent-4">{challenge}</p>
            </div>
            <div>
                <div className="flex mb-3 items-center">
                    <img
                        src={iconLearn}
                        className="h-7 mr-3"
                        alt="star"
                    />
                    <p className="font-semibold text-[28px]">{t("learn")}</p>
                </div>

                <p className="text-[14px]  text-textColor indent-4">{learned}</p>
            </div>
        </div>
    )

    if (isMobile) return renderMobile()
    return renderWeb()
}

export default ChallengeLearned
