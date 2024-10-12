import * as React from 'react'
import { FeatureType } from '../../types/Types'
import Tag from '../Tag/Tag'

const Feature = ({ title, image, tags, description, mobile }: FeatureType) => {
    if (mobile) {
        return (
            <div className=" flex flex-col items-center  gap-4 bg-blackSec py-10 polygon-card-mobile">
                <img
                    src={image}
                    className="w-[60vw] max-w-[350px]  rounded-md"
                    alt=""
                />

                <div className="px-3 gap-5 flex flex-col text-center">
                    <p className="font-medium text-[30px]">{title}</p>
                    <div className="flex justify-center flex-wrap gap-2 ">
                        {tags.map((name: string, index: number) => (
                            <Tag
                                key={index}
                                text={name}
                                backgroundColor="bg-blackSec"
                                small
                            />
                        ))}
                    </div>
                    <p className="text-[14px] text-left text-textColor indent-4">{description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex gap-10 bg-blackSec px-12 py-10 polygon-card">
            <img
                src={image}
                className=" h-[400px] 2xl:h-[600px]  self-center rounded-md"
                alt=""
            />

            <div className=" w-1/2 py-4 gap-5 flex flex-col">
                <p className="font-medium text-[25px] 2xl:text-[35px]">{title}</p>
                <div className="flex flex-wrap gap-3 ">
                    {tags.map((name: string, index: number) => (
                        <Tag
                            key={index}
                            text={name}
                            backgroundColor="bg-blackSec"
                            small
                        />
                    ))}
                </div>
                <p className="text-[14px] 2xl:text-[16px] text-left text-textColor indent-4">{description}</p>
            </div>
        </div>
    )
}

export default Feature
