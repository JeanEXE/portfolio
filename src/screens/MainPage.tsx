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
                            <h1 ref={refAbout}>{t('sobre')}</h1>
                            <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">
                                Olá 👋 sou o Jean, trabalho desde 2019 como desenvolvedor fullstack, utilizando como principal linguagem no
                                backend o Node.JS, mas minha maior stack está no frontend (Mobile) com React-Native. Gosto bastante de
                                trabalhar com performance e otimizações, busco sempre aplicar conceitos de clean code e abstração. Sou
                                curioso, responsável e me considero bastante proativo.
                                <br />
                                &emsp;Receber feedbacks é sempre bem vindo. Valorizo o trabalho em equipe, me preocupo em ajudar iniciantes
                                pois já passei por isso e entendo como é difícil o início. Gosto de contribuir com ideias e minha opinião em
                                algo que vejo como uma possivel melhoria, dessa forma consigo compartilhar meu conhecimento e também
                                aprender coisas novas com a equipe.
                                <br />
                                <br />
                                🌱 I&apos;m currently learning: TypeScript / E2E Testing / React.js
                                <br />
                                <br />
                                🏹 I Want to learn: GraphQL / Styled Components / Flutter / Remix
                            </p>
                        </div>
                        <div className="mt-10 sm:w-5/12">
                            <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                            <p className="text-[21px] sm:text-[25px] 2xl:text-[32px] font-semibold mb-2">{t('experiencia')}</p>
                            <p className="text-[13px] 2xl:text-[16px]  mb-1">
                                Fullstack Developer at
                                <a
                                    href="https://www.isabelaflores.com/"
                                    className="no-underline font-semibold hover:text-blue"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => insertEvent('clicou link: IsaFlores')}
                                >
                                    {' '}
                                    Isabela Flores
                                </a>{' '}
                                /
                                <a
                                    href="https://www.floresonline.com.br"
                                    className="no-underline font-semibold hover:text-blue"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => insertEvent('clicou link: FloresOn')}
                                >
                                    {' '}
                                    Flores Online
                                </a>
                                {'\n'}(2019 - Atualmente)
                            </p>
                            <p className="text-[14px] 2xl:text-[16px] text-textColor indent-4">
                                Participei ativamente do desenvolvimento de 2 Apps (Gingo / Gingo Business)
                                <br />
                                do início a publicação nas stores (Android/iOS).
                                <br />
                                -App de delivery/Chat em tempo real
                                <br />
                                -Gerenciamento de pedidos/cardápio via Gingo Business
                                <br />
                                -Notificações Firebase/APNS
                                <br />
                                -CI/CD utilizando codepush
                                <br />
                                -Redux
                                <br />
                                -Hooks
                                <br />
                                -Chat real time utilizando Socket.io
                                <br />
                                -SQLite / MongoDB
                                <br />
                            </p>
                            <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                            <p className="text-[21px] sm:text-[25px] 2xl:text-[32px] font-semibold mb-2">Education</p>
                            <p className="text-[13px] 2xl:text-[16px]">
                                Bachelor of Software Engineering
                                <br />
                                at UNIFAE (2016 - 2019)
                            </p>
                        </div>
                    </div>
                    {/* <div className="bg-yellow flex flex-col justify-between content-between  h-32 absolute left-0  w-full" ref={refContact}>
                    <Separator inverted />
                    <p className=' text-black animate-scrollzada'>jean reis jean reis jean reis jean reis</p>
                    <Separator />
                    </div>
                    <div className='h-36' /> */}
                    <div className="py-7">
                        <h1 ref={refProjects}>Portfolio</h1>
                        <p className="text-[14px] sm:text-[17px] text-textColor">A section with the projects that i worked</p>
                        <div className="grid gap-3 sm:gap-6 lg:gap-2 xl:gap-3 grid-cols-1 lg:grid-cols-2 mt-7">
                            <CardProject
                                name={'Gingo'}
                                image={gingo}
                                tags={['React Native', 'Node.js']}
                                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
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
                            <h1 ref={refSkills}>Hard Skills</h1>
                            <p className="text-[14px] 2xl:text-[17px] text-textColor">Know a litlle about my skills</p>
                        </div>
                        <div className="sm:w-6/12">
                            <div className="flex  w-full  mt-5 mb-2 items-center">
                                <p className="w-28 sm:w-2/4" />
                                <div className=" flex justify-between w-full h-[1.1rem] sm:w-3/4">
                                    <p className="text-[10px] sm:text-[11px]">Basic</p>
                                    <p className="text-[10px] sm:text-[11px]">Intermediate</p>
                                    <p className="text-[10px] sm:text-[11px]">Advanced</p>
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
