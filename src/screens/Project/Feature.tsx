import * as React from 'react';
import { FeatureType, TagType } from '../../types/Types';
import Tag from '../../components/Tag/Tag';

const Feature = ({ title, image, tags, description, mobile }: FeatureType) => {
    if (mobile) {
        return (
            <div className=' flex flex-col items-center  gap-4 bg-blackSec py-10 polygon-card-mobile'>

                <img src={image} className='w-[60vw] max-w-[350px]   rounded-md' />

                <div className='px-3 gap-5 flex flex-col text-center'>
                    <p>{title}</p>
                    <div className='flex justify-center flex-wrap gap-2 '>
                        {tags.map((element: TagType, index: number) => (
                            <Tag key={index} text={element.text} width={element.width} backgroundColor='bg-blackSec' small />
                        ))}
                    </div>
                    <p className='text-[14px] text-left'>{description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='flex gap-10 bg-blackSec px-12 py-10 polygon-card'>

            <img src={image} className=' h-[600px] rounded-md' />

            <div className=' w-1/2 py-4 gap-5 flex flex-col'>
                <p className='font-medium text-[35px] '>{title}</p>
                <div className='flex flex-wrap gap-3 '>
                    {tags.map((element: TagType, index: number) => (
                        <Tag key={index} text={element.text} width={element.width} backgroundColor='bg-blackSec' small />
                    ))}
                </div>
                <p className='text-[16px] text-left'>{description}</p>
            </div>
        </div>
    )
}

export default Feature