import gingo from '../assets/img/gingo.png'
import ging from '../assets/img/Gingo/gingo1.jpg'
import ging2 from '../assets/img/Gingo/gingo2.jpg'
import { ProjectType } from '../types/Types'

const ARR_IMAGES = [
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
    ging2,
    ging,
]

const ARR_TAGS = [
    { text: 'React Native' },
    { text: 'Node.js', width: 'w-[90px] sm:w-[130px]' },
]

const ARR_FEATURES = [
    {
        title: 'Push Notification',
        tags: [
            { text: 'Firebase', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'Socket.io', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
        ]
    },
    {
        title: 'Chat: Vídeo',
        tags: [
            { text: 'Firebase', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'Socket.io', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
            { text: 'APNS', width: 'w-[70px] sm:w-[90px]' },
        ]
    },
]

const DESC_PROJETO =
    `fluxoxd \n   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum`

const DESAFIO =
    `Lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum`
const APRENDIZADO =
    `Lorem                          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum`

const DATA: ProjectType = {
    image: gingo,
    tags: ARR_TAGS,
    features: ARR_FEATURES,
    description: DESC_PROJETO,
    challenge: DESAFIO,
    learned: APRENDIZADO,
    images: ARR_IMAGES
}

export default DATA