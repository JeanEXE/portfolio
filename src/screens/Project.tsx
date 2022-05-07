import * as React from 'react';
import { Link } from 'react-router-dom';


const Project = () => {
    // <div className='flex   w-[300px]  border-r-transparent  border-sky-700 border-r-[80px] border-t-[80px] absolute top-0 z-10' />
    // <div className='flex   w-[300px]  border-r-transparent h-20 bg-black border-r-[80px] border-t-[80px] absolute top-0 left-[220px] z-0' ></div>
    return (
        <div className='flex'>
            <div className='w-[200px] bg-sky-700 h-20'>
                <div className='flex h-[80px]   items-center  ml-5'>
                    <Link to="/">
                        <p className='btnText text-[20px]'>jeanreis</p>
                    </Link>
                    <div className="bg-blue w-3 mt-5  ml-[2px] h-1" />
                </div>
            </div>

            <div className='relative  bg-[#202020] h-20 w-[80px]   z-10 border-r-transparent  border-sky-700 border-r-[80px] border-t-[80px]' />

            <div className='w-[300px] bg-[#202020] h-20'>
                <div className='flex h-[80px]   items-center  ml-5  z-10 '>
                    <h1>Project: Gingo</h1>
                </div>
            </div>
            <div className='relative   h-20 w-[80px]   z-10 border-r-transparent  border-[#202020] border-r-[80px] border-t-[80px]' />
            {/* <div className='flex   w-[300px]  border-r-transparent  border-sky-700 border-r-[80px] border-t-[80px] absolute top-0 z-10' /> */}
            {/* <div className='flex   w-[300px]  border-r-transparent h-20 bg-black border-r-[80px] border-t-[80px] absolute top-0 left-[220px] z-0' >
                <p>DALE</p>
            </div> */}
        </div>
    )

}

export default Project