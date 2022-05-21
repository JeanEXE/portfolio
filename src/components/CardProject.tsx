import * as React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/svg/icon-arrow.svg'
import { CardProjectType, TagType } from '../types/Types';
import Tag from './Tag/Tag';

const CardProject = ({ name, image, tags, description }: CardProjectType) => {
    return (
        <div className='flex flex-col sm:flex-row border-2  sm:pr-8 rounded-md gap-2 sm:gap-4 overflow-hidden relative bg-blackSec'>

            <img className='bg-gray-300  object-contain h-44 sm:h-full w-full sm:w-60 xl:w-48  grayscale-[35%]' src={image} alt='' />

            <div className='flex flex-col gap-2 pt-1 pb-3 px-6 sm:px-0 mb-10'>
                <p className='font-medium text-[23px] sm:text-[28px]'>{name}</p>
                <div className='flex flex-wrap gap-2 sm:gap-3'>
                    {tags.map((element: TagType, index: number) => (
                        <Tag key={index} text={element.text} width={element.width} backgroundColor='bg-blackSec' small />
                    ))}
                </div>
                <p className='indent-4 line-clamp-5 sm:line-clamp-3 text-[14px] lg:text-[16px] xl:text-[14px]'>{description}</p>
            </div>
            <button className='absolute right-6 bottom-3'>
                <Link to={`/project/${name}`}>
                    <p className='text-blue text-[17px] font-semibold flex items-center'>Full Project <img src={arrow} className={`h-4 bottom-1 rotate-90`} alt='' /></p>
                </Link>
            </button>
        </div>
    )
}

export default CardProject;
