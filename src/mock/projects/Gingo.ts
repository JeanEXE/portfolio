import { IProjectPage } from "../../types/Types"
import gingo from "../../assets/img/gingo.png"
import ging1 from "../../assets/Gingo/gingo1.jfif"
import ging2 from "../../assets/Gingo/gingo2.jfif"
import ging3 from "../../assets/Gingo/gingo3.jfif"
import ging4 from "../../assets/Gingo/gingo4.jfif"
import ging5 from "../../assets/Gingo/gingo5.jfif"
import ging6 from "../../assets/Gingo/gingo6.jfif"
import ging7 from "../../assets/Gingo/gingo7.jfif"
import ging8 from "../../assets/Gingo/gingo8.jfif"
import ging9 from "../../assets/Gingo/gingo9.jfif"
import ging10 from "../../assets/Gingo/gingo10.jfif"
import ging11 from "../../assets/Gingo/gingo11.jfif"
import ging12 from "../../assets/Gingo/gingo12.jfif"
import ging13 from "../../assets/Gingo/gingo13.jfif"
import ging14 from "../../assets/Gingo/gingo14.jfif"
import ging15 from "../../assets/Gingo/gingo15.jfif"
import ging16 from "../../assets/Gingo/gingo16.jfif"
import ging17 from "../../assets/Gingo/gingo17.jfif"
import ging18 from "../../assets/Gingo/gingo18.jfif"
import ging19 from "../../assets/Gingo/gingo19.jfif"
import ging20 from "../../assets/Gingo/gingo20.jfif"
import ging21 from "../../assets/Gingo/gingo21.jfif"
import feature1 from "../../assets/Gingo/Gifs/feature-push.gif"
import feature2 from "../../assets/Gingo/Gifs/feature-image.gif"
import feature3 from "../../assets/Gingo/Gifs/feature-audio.gif"
import feature4 from "../../assets/Gingo/Gifs/feature-video.gif"
import feature5 from "../../assets/Gingo/Gifs/feature-file.gif"

const GINGO: IProjectPage = {
    name: "Gingo",
    logo: gingo,
    tags: ["React Native", "Node.js", "MongoDB", "SQLite"],
    images: [
        ging1,
        ging2,
        ging3,
        ging4,
        ging5,
        ging6,
        ging7,
        ging8,
        ging9,
        ging10,
        ging11,
        ging12,
        ging13,
        ging14,
        ging15,
        ging16,
        ging17,
        ging18,
        ging19,
        ging20,
        ging21
    ],
    description: "prj1.description",
    challenge: "prj1.challenge",
    learned: "prj1.learned",
    features: [
        {
            title: "Push Notification",
            image: feature1,
            tags: ["Firebase", "APNS", "Swift", "Javascript"],
            description: "prj1.feature1.description"
        },
        {
            title: "Chat: Image",
            image: feature2,
            tags: ["React Native", "Socket.io", "Amazon S3", "SQLite"],
            description: "prj1.feature2.description"
        },
        {
            title: "Chat: Audio",
            image: feature3,
            tags: ["React Native", "Socket.io", "Amazon S3", "SQLite"],
            description: "prj1.feature3.description"
        },
        {
            title: "Chat: Video",
            image: feature4,
            tags: ["React Native", "Socket.io", "Amazon S3", "SQLite"],
            description: "prj1.feature4.description"
        },
        {
            title: "Chat: Files",
            image: feature5,
            tags: ["React Native", "Socket.io", "Amazon S3", "SQLite"],
            description: "prj1.feature5.description"
        }
    ]
}

export default GINGO
