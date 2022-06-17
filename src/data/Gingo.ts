import gingo from '../assets/img/gingo.png'
import ging from '../assets/img/Gingo/gingo1.jpg'
import ging2 from '../assets/img/Gingo/gingo2.jpg'
import { FeatureType, ProjectType } from '../types/Types'
import * as i18n from 'i18next'

const ARR_IMAGES = [ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging, ging2, ging]

const ARR_FEATURES: FeatureType[] = [
    {
        title: 'Push Notification',
        image: 'https://i.imgur.com/ohXtP7h.gif',
        tags: ['Firebase', 'APNS', 'APNS', 'Socket.io', 'APNS', 'APNS'],
        description: i18n.t('prj1.feature1.description')
    },
    {
        title: 'Chat: Vídeo',
        image: 'https://i.imgur.com/ohXtP7h.gif',
        tags: ['Firebase', 'APNS', 'APNS', 'Socket.io', 'APNS', 'APNS'],
        description: i18n.t('prj1.feature2.description')
    }
]

const DATA: ProjectType = {
    logo: gingo,
    tags: ['React Native', 'Node.js'],
    features: ARR_FEATURES,
    description: i18n.t('prj1.description'),
    challenge: i18n.t('prj1.challenge'),
    learned: i18n.t('prj1.learned'),
    images: ARR_IMAGES
}

export default DATA
