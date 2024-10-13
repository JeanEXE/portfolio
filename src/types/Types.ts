export type TagType = {
    text: string
    small?: boolean
    backgroundColor?: string
}

export type FeatureType = {
    title: string
    image: string
    tags: string[]
    description: string
    mobile?: boolean
}

export type ProjectType = {
    name: string
    logo: string
    tags: string[]
    description: string
    images: string[]
    challenge?: string
    learned?: string
    features?: FeatureType[]
}

export type CardProjectType = {
    name: string
    image: string
    tags: string[]
    description: string
}

export type SkillBarType = {
    stack: string
    width: string
}

export type TLanguage = "en" | "pt"
