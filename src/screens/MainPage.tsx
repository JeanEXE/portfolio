import * as React from 'react'
import { useRef } from 'react'
import Header from '../components/Header'
import SkillBar from '../components/SkillBar'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import AnimatedBadge from '../components/AnimatedBadge'
import Contact from '../components/Contact'
import Profile from '../components/Profile'
import gingo from '../assets/img/gingo.png'
import gBusiness from '../assets/img/g_business.png'
import CardProject from '../components/CardProject'
import { insertEvent } from '../helpers/Analytics'

function MainPage() {
    const refAbout = useRef()
    const refProjects = useRef()
    const refSkills = useRef()
    const refContact = useRef()

    const { t } = useTranslation()

    return (
        <div className=" flex-1 min-h-screen bg-black">
            <Header ref1={refAbout} ref2={refSkills} ref3={refContact} ref4={refProjects} />
            <div className="flex flex-col justify-center items-center">
                <div className="pt-2 sm:pt-5 px-5 md:px-10 lg:px-20 max-w-full  lg:max-w-7xl animate-fade-in-up">
                    <Profile />
                    <div className="py-12 sm:py-20 sm:flex sm:justify-between">
                        <div className="sm:w-5/12">
                            <h1 ref={refAbout}>{t('header.about')}</h1>
                            <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{t('about')}</p>
                        </div>
                        <div className="mt-10 sm:w-5/12">
                            <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                            <p className="text-[21px] sm:text-[25px] 2xl:text-[32px] font-semibold mb-2">{t('experience')}</p>
                            <p className="text-[13px] 2xl:text-[16px]  mb-1">
                                {t('work1.title')}
                                <a
                                    href="https://www.isabelaflores.com/"
                                    className="no-underline font-semibold hover:text-blue"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => insertEvent('clicou link: IsaFlores')}
                                >
                                    {' Isabela Flores '}
                                </a>
                                /
                                <a
                                    href="https://www.floresonline.com.br"
                                    className="no-underline font-semibold hover:text-blue"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => insertEvent('clicou link: FloresOn')}
                                >
                                    {' Flores Online'}
                                </a>
                                {'\n'}(2019 - {t('currently')})
                            </p>
                            <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">{t('work1.description')}</p>
                            <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                            <p className="text-[21px] sm:text-[25px] 2xl:text-[32px] font-semibold mb-2">{t('education')}</p>
                            <p className="text-[13px] 2xl:text-[16px]">{t('education.description')} UNIFAE (2016 - 2019)</p>
                        </div>
                    </div>
                    {/* <div className="bg-yellow flex flex-col justify-between content-between  h-32 absolute left-0  w-full" ref={refContact}>
                    <Separator inverted />
                    <p className=' text-black animate-scrollzada'>jean reis jean reis jean reis jean reis</p>
                    <Separator />
                    </div>
                    <div className='h-36' /> */}
                    <div className="py-7">
                        <h1 ref={refProjects}>{t('header.portfolio')}</h1>
                        <p className="text-[14px] sm:text-[17px] text-textColor">{t('portfolio.description')}.</p>
                        <div className="grid gap-3 sm:gap-6 lg:gap-2 xl:gap-3 grid-cols-1 lg:grid-cols-2 mt-7">
                            <CardProject
                                name={'Gingo'}
                                image={gingo}
                                tags={['React Native', 'Node.js']}
                                description={t('prj1.description')}
                            />
                            <CardProject
                                name={'Gingo Business'}
                                image={gBusiness}
                                tags={['React Native', 'Node.js']}
                                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`}
                            />
                        </div>
                    </div>

                    <div className="py-7 sm:flex justify-between">
                        <div>
                            <h1 ref={refSkills}>{t('header.skills')}</h1>
                            <p className="text-[14px] 2xl:text-[17px] text-textColor">{t('skills.description')}.</p>
                        </div>
                        <div className="sm:w-6/12">
                            <div className="flex  w-full  mt-5 mb-2 items-center">
                                <p className="w-28 sm:w-2/4" />
                                <div className=" flex justify-between w-full h-[1.1rem] sm:w-3/4">
                                    <p className="text-[10px] sm:text-[11px]">{t('basic')}</p>
                                    <p className="text-[10px] sm:text-[11px]">{t('intermediate')}</p>
                                    <p className="text-[10px] sm:text-[11px]">{t('advanced')}</p>
                                </div>
                            </div>
                            <SkillBar stack={'React Native'} width="w-full" />
                            <SkillBar stack={'JavaScript'} width="w-5/6" />
                            <SkillBar stack={'Node.js'} width="w-9/12" />
                            <SkillBar stack={'TypeScript'} width="w-3/12" />
                            <SkillBar stack={'PHP'} width="w-1/6" />
                            <SkillBar stack={'Swift'} width="w-1/12" />
                            <SkillBar stack={'Java'} width="w-1/12" />
                            <SkillBar stack={'SQLite'} width="w-6/12" />
                            <SkillBar stack={'MongoDB'} width="w-7/12" />
                            <SkillBar stack={'Redux'} width="w-4/6" />
                            <SkillBar stack={'API Rest'} width="w-5/6" />
                            <SkillBar stack={'Git'} width="w-5/6" />
                            <SkillBar stack={'Firebase: Crash / Report/ Analytics'} width="w-4/6" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-7 absolute left-0 w-full" ref={refContact}>
                        <AnimatedBadge />
                        <Contact />
                    </div>
                    <div className="h-72 sm:h-80" />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MainPage
