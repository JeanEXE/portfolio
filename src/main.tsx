import './App.css';
import * as React from 'react';
import Header from './components/Header';
import Tag from './components/Tag';

function App() {
    return (
        <div className=" flex-1 min-h-screen bg-black">
            <Header />
            <div className='pt-5 mx-7 sm:mx-20'>
                <div className='flex'>
                    <img
                        className=' w-32 h-32 mr-5 sm:w-48 sm:mr-10 sm:h-60'
                        src='https://www.oversodoinverso.com.br/wp-content/uploads/2020/09/apu.png'
                    />
                    <div>
                        <p className='text-xs sm:text-4xl font-semibold'>Jean Reis</p>
                        <p className='text-2xl sm:text-7xl font-semibold'>Fullstack<br />Developer</p>
                        <div className='flex flex-wrap'>
                            <Tag text='React Native' />
                            <Tag text='Node.js' />
                        </div>
                    </div>
                </div>
                <div className='py-7 sm:flex justify-between'>
                    <div>
                        <p className='text-2xl sm:text-7xl font-semibold'>Hard Skills</p>
                        <p className='text-xs sm:text-2xl'>know a litle about my skills</p>
                    </div>

                    <div className='flex justify-between w-12/12 sm:w-96'>
                        <p>Basic</p>
                        <p>Intermediate</p>
                        <p>Advanced</p>
                    </div>
                    {/* <div className='justify-between w-12/12 sm:w-96'>
                        <p>Basic</p>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default App;
