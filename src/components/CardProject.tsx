import * as React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/svg/icon-arrow.svg'
import { CardProjectType } from '../types/Types'
import { useTranslation } from 'react-i18next'
import Tag from './Tag/Tag'
import { insertEvent } from '../helpers/Analytics'

const CardProject = ({ name, image, tags, description }: CardProjectType) => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col sm:flex-row border  sm:pr-8 rounded-md gap-2 sm:gap-4 overflow-hidden relative bg-black">
            <img
                className="bg-unselected object-contain h-44 sm:h-full w-full sm:w-60 lg:w-48  grayscale-[35%]"
                src={image}
                alt=""
            />

            <div className="flex flex-col gap-2 pt-1 pb-3 px-6 sm:px-0 mb-10">
                <p className="font-medium text-[24px] 2xl:text-[28px]">{name}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {tags.map((name: string, index: number) => (
                        <Tag
                            key={index}
                            text={name}
                            backgroundColor="bg-blackSec"
                            small
                        />
                    ))}
                </div>
                <p className="indent-4 line-clamp-5 sm:line-clamp-3 text-[14px]">{description}</p>
            </div>
            <button className="absolute right-6 bottom-3">
                <Link
                    to={`/${name}`}
                    onClick={() => insertEvent(`abriu projeto: ${name}`)}
                >
                    <p className="text-blue text-[17px] font-semibold flex items-center">
                        {t('full-project')}{' '}
                        <img
                            src={arrow}
                            className={`h-4 bottom-1 rotate-90`}
                            alt=""
                        />
                    </p>
                </Link>
            </button>
        </div>
    )
}

export default CardProject
