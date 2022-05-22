export type TagType = {
    text: string,
    width?: string,
    small?: boolean,
    backgroundColor?: string
}

export type FeatureType = {
    title: string,
    image: string,
    tags: TagType[],
    description: string,
    mobile?: boolean
}

export type ProjectType = {
    logo: string,
    tags: TagType[],
    description: string,
    images: string[],
    challenge?: string,
    learned?: string,
    features?: FeatureType[]
}

export type CardProjectType = {
    name: string,
    image: any,
    tags: TagType[],
    description: string
}

export type SkillBarType = {
    stack: string,
    width: string
}