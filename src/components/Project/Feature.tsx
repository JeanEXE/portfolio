import * as React from 'react';
import { FeatureType, TagType } from '../../types/Types';
import Tag from '../Tag/Tag';

const Feature = ({ title, image, tags, description, mobile }: FeatureType) => {
    if (mobile) {
        return (
            <div className=' flex flex-col items-center  gap-4 bg-blackSec py-10 polygon-card-mobile'>

                <img src="https://i.imgur.com/ohXtP7h.gif" className='w-[60vw] max-w-[350px]   rounded-md' />

                <div className='px-3 gap-5 flex flex-col text-center'>
                    <p>{title}</p>
                    <div className='flex justify-center flex-wrap gap-2 '>
                        {tags.map((element: TagType, index: number) => (
                            <Tag key={index} text={element.text} width={element.width} backgroundColor='bg-blackSec' small />
                        ))}
                    </div>
                    <p className=' text-[14px] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum
                        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className='flex gap-10 bg-blackSec px-12 py-10 polygon-card'>

            <img src="https://i.imgur.com/ohXtP7h.gif" className=' w-[320px] rounded-md' />

            <div className=' w-1/2 py-4 gap-5 flex flex-col'>
                <h1>{title}</h1>
                <div className='flex flex-wrap gap-3 '>
                    {tags.map((element: TagType, index: number) => (
                        <Tag key={index} text={element.text} width={element.width} backgroundColor='bg-blackSec' small />
                    ))}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
        </div>
    )
}

export default Feature