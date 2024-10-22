import * as React from "react"
import { useRef } from "react"
import { AnimatedBadge, CardProject, Contact, ExperienceSlider, Footer, Header, Profile, SkillBar } from "../components"
import { SKILL_BAR } from "../mock"
import { useTranslation } from "react-i18next"
import isaLogo from "../assets/IsabelaFlores/isaLogo.png"
import floresLogo from "../assets/FloresOnline/flores-logo.png"
import gingo from "../assets/img/gingo.png"
import gBusiness from "../assets/img/gingo-business.png"

function MainPage() {
    const refAbout = useRef()
    const refProjects = useRef()
    const refSkills = useRef()
    const refContact = useRef()

    const { t } = useTranslation()

    return (
        <div className=" flex-1 min-h-screen bg-black">
            <Header
                refAbout={refAbout}
                refSkills={refSkills}
                refContact={refContact}
                refProjects={refProjects}
            />
            <div className="flex flex-col justify-center items-center">
                <div className="pt-2 sm:pt-5 px-5 md:px-10 lg:px-20 max-w-full  lg:max-w-7xl animate-fade-in-up">
                    <Profile />
                    <div className="py-12 sm:py-20 sm:flex sm:justify-between">
                        <div className="sm:w-5/12">
                            <h1 ref={refAbout}>{t("header.about")}</h1>
                            <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{t("about")}</p>
                            <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                            <p className="text-[21px] sm:text-[25px] 2xl:text-[32px] font-semibold mb-2">{t("education")}</p>
                            <p className="text-[13px] 2xl:text-[16px]">{t("education.description")} UNIFAE (2016 - 2019)</p>
                        </div>
                        <div className="mt-10 sm:w-6/12">
                            <ExperienceSlider />
                        </div>
                    </div>
                    <div className="py-7">
                        <h1 ref={refProjects}>{t("header.portfolio")}</h1>
                        <p className="text-[14px] sm:text-[17px] text-textColor">{t("portfolio.description")}.</p>
                        <div className="grid gap-3 sm:gap-6 lg:gap-2 xl:gap-3 grid-cols-1 lg:grid-cols-2 mt-7">
                            <CardProject
                                name={"Flores Online"}
                                image={floresLogo}
                                tags={["React Native", "TypeScript"]}
                                description={t("prj4.description")}
                            />
                            <CardProject
                                name={"Isabela Flores"}
                                image={isaLogo}
                                tags={["React Native", "TypeScript"]}
                                description={t("prj3.description")}
                            />
                            <CardProject
                                name={"Gingo"}
                                image={gingo}
                                tags={["React Native", "Node.js", "MongoDB", "SQLite"]}
                                description={t("prj1.description")}
                            />
                            <CardProject
                                name={"Gingo Business"}
                                image={gBusiness}
                                tags={["React Native", "Node.js", "MongoDB", "SQLite"]}
                                description={t("prj2.description")}
                            />
                        </div>
                    </div>

                    <div className="py-7 sm:flex justify-between">
                        <div>
                            <h1 ref={refSkills}>{t("header.skills")}</h1>
                            <p className="text-[14px] 2xl:text-[17px] text-textColor">{t("skills.description")}.</p>
                        </div>
                        <div className="sm:w-6/12">
                            <div className="flex  w-full mt-5 mb-2 items-center">
                                <div className="w-2/6" />
                                <div className=" flex justify-between w-4/6 h-[1.1rem]">
                                    <p className="text-[10px] sm:text-[11px]">{t("basic")}</p>
                                    <p className="text-[10px] sm:text-[11px]">{t("intermediate")}</p>
                                    <p className="text-[10px] sm:text-[11px]">{t("advanced")}</p>
                                </div>
                            </div>
                            {SKILL_BAR.map((item, index) => (
                                <SkillBar
                                    key={index}
                                    stack={item.stack}
                                    width={item.width}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className="flex justify-between items-center py-8 absolute left-0 w-full"
                        ref={refContact}
                    >
                        <AnimatedBadge />
                        <Contact />
                    </div>
                    <div className="h-60 sm:h-72" />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MainPage
