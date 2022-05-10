import * as React from 'react';
import { Link } from 'react-router-dom';

const CardProject = ({ name, image, tags, description, params }: { name: string, image: any, tags: JSX.Element, description: string, params?: string }) => {
    return (
        <div className='flex flex-col sm:flex-row border-2  sm:pr-8 rounded-lg gap-2 sm:gap-4 overflow-hidden relative'>

            <img className='bg-neutral-300  object-contain h-44 sm:h-full w-full sm:w-60 xl:w-48  grayscale-[35%]' src={image} />

            <div className='flex flex-col gap-2 pt-1 pb-3 px-6 sm:px-0 mb-10'>
                <h1 className='text-[25px] sm:text-[32px]'>{name}</h1>
                <div className='flex flex-wrap gap-2 sm:gap-3'>
                    {tags}
                </div>
                <p className=' indent-4 line-clamp-5  sm:line-clamp-3 text-[15px]  lg:text-[16px] xl:text-[14px]'>{description}</p>
            </div>
            <button className='absolute right-6 bottom-3'>
                <Link to="/project">
                    <p className='text-blue text-[16px] sm:text-[18px]  font-bold underline'>Read More</p>
                </Link>
            </button>
        </div>
    )
}

export default CardProject;
