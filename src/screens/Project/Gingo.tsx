import * as React from 'react';
import Footer from '../../components/Footer';
import HeaderProject from '../../components/Project/HeaderProject';


const Gingo = () => {
    return (
        <div className=" flex-1 min-h-screen bg-black">
            <HeaderProject name={'Gingo'} />
            <div className='h-[900px]'>
            </div>
            <Footer />
        </div>
    )
}

export default Gingo