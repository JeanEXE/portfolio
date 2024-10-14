export interface ITag {
    text: string
    small?: boolean
    backgroundColor?: string
}

export interface IJob {
    title: string
    time: string
    description: string
}

export interface IFeature {
    title: string
    image: string
    tags: string[]
    description: string
    mobile?: boolean
}

export type TProject = "Flores Online" | "Isabela Flores" | "Gingo" | "Gingo Business"

export interface IProjectPage {
    name: TProject
    logo: string
    tags: string[]
    description: string
    images: string[]
    challenge?: string
    learned?: string
    features?: IFeature[]
}

export interface ICardProject {
    name: TProject
    image: string
    tags: string[]
    description: string
}

export interface ISkillBar {
    stack: string
    width: string
}

export type TLanguage = "en" | "pt"
