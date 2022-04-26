import * as React from 'react';
import Header from './components/Header';
import SkillBar from './components/SkillBar';
import Footer from './components/Footer';
import AnimatedBadge from './components/AnimatedBadge';
import Contact from './components/Contact';
import Profile from './components/Profile';

function App() {
    return (
        <div className=" flex-1 min-h-screen bg-black">
            <Header />
            <div className='pt-2 sm:pt-5 mx-5 sm:mx-20'>
                <Profile />
                <div className='py-12 sm:py-20 sm:flex sm:justify-between'>
                    <div className='sm:w-5/12'>
                        <p className='text-2xl sm:text-6xl font-semibold'>About Me</p>
                        <p className='text-xs text-gray-400 indent-4 sm:text-[16px]'>Hey 👋 I'm Jean, Trabalho a 3 anos como Fullstack, utilizando como principal linguagem no backend o Node.JS, mas minha maior stack está no frontend (Mobile) com React-Native.
                            Após entender como a arquitetura, gerenciamento de estados e a componentização do react funciona, procurei aprender mais sobre performance,
                            aprendi a gerenciar estados de forma mais controlada, e a utilizar o react memo para controlar renderizações desnecessárias,
                            foi nesse momento que descobri gostar muito de performance e otimizações, busco sempre aplicar conceitos de clean code e abstração é uma palavra que gosto bastante.
                            <br />Sou curioso, responsável e me considero bastante proativo.
                            <br /><br />Valorizo o trabalho em equipe, receber feedback sobre algo que desenvolvi é algo importante pra mim, gosto de dar minha opinião também em algo que vejo como uma possivel melhoria, dessa forma todos compartilham seus aprendizados e a equipe melhora e se alinha técnicamente como um todo.
                            <br /><br />🌱 I'm currently learning: TypeScript / Testing / React.js / Styled Components
                            <br /><br />🏹 I Want to learn: GraphQL / Vue 3 / Flutter / remix / contextAPI
                        </p>
                    </div>
                    <div className='mt-10 sm:w-5/12'>
                        <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                        <p className='text-sm  font-semibold mb-2 sm:text-2xl'>Professional Experience</p>
                        <p className='text-[13px] font-medium mb-1 sm:text-[16px]'>Fullstack Developer at{" "}
                            <a href="https://www.isabelaflores.com/" className="no-underline font-semibold text-blue" target="_blank">Isabela Flores</a> /{" "}
                            <a href="https://www.floresonline.com.br" className="no-underline font-semibold text-blue" target="_blank">Flores Online</a> (2019 - Atualmente)</p>
                        <p className='text-xs text-gray-400 sm:text-[16px]'>Participei ativamente do desenvolvimento de 2 Apps (Gingo / Gingo Business)<br />do início a publicação nas stores (Android/iOS).<br />
                            -App de delivery/Chat em tempo real<br />
                            -Gerenciamento de pedidos/cardápio via Gingo Business<br />
                            -Notificações Firebase/APNS<br />
                            -CI/CD utilizando codepush<br />
                            -Redux<br />
                            -Hooks<br />
                            -Chat real time utilizando Socket.io<br />
                            -SQLite / MongoDB<br />
                        </p>
                        <div className="bg-yellow w-4 mt-4 mb-2 h-1" />
                        <p className='text-sm  font-semibold mb-2 sm:text-2xl'>Formação Academica</p>
                        <p className='text-[13px]  font-medium sm:text-[16px]'>Graduado em Engenharia de Software pela UNIFAE (2016 - 2019)</p>
                    </div>
                </div>

                <div className='py-7 sm:flex justify-between'>
                    <div>
                        <p className='text-2xl sm:text-7xl font-semibold'>Hard Skills</p>
                        <p className='text-xs sm:text-2xl'>know a litle about my skills</p>
                    </div>
                    <div className='sm:w-6/12'>
                        <div className='flex  w-full  mt-5 mb-2 items-center'>
                            <p className='w-28 sm:w-2/4'></p>
                            <div className=' flex justify-between w-full h-[1.1rem] sm:w-3/4'>
                                <p className='text-[10px] sm:text-1xl'>Basic</p>
                                <p className='text-[10px] sm:text-1xl'>Intermediate</p>
                                <p className='text-[10px] sm:text-1xl'>Advanced</p>
                            </div>
                        </div>
                        <SkillBar stack={'React Native'} width='w-full' />
                        <SkillBar stack={'JavaScript'} width='w-5/6' />
                        <SkillBar stack={'Node.js'} width='w-9/12' />
                        <SkillBar stack={'TypeScript'} width='w-3/12' />
                        <SkillBar stack={'PHP'} width='w-1/6' />
                        <SkillBar stack={'Swift'} width='w-1/12' />
                        <SkillBar stack={'Java'} width='w-1/12' />
                        <SkillBar stack={'SQLite'} width='w-6/12' />
                        <SkillBar stack={'MongoDB'} width='w-7/12' />
                        <SkillBar stack={'Firebase: Crash / Report/ Analytics'} width='w-4/6' />
                        <SkillBar stack={'Redux'} width='w-4/6' />
                        <SkillBar stack={'API Rest'} width='w-5/6' />
                        <SkillBar stack={'Codepush'} width='w-5/6' />
                        <SkillBar stack={'Git'} width='w-5/6' />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center bg-blackSec py-10">
                <AnimatedBadge />
                <Contact />
            </div>
            <Footer />
        </div >
    )
}

export default App;
