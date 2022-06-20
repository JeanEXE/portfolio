import * as i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import mainPageEn from '../Translations/MainPage-en'
import mainPagePt from '../Translations/MainPage-pt'
import projectPageEn from '../Translations/ProjectPage-en'
import projectPagePt from '../Translations/ProjectPage-pt'
import gingoEn from '../Translations/Gingo-en'

const resources = {
    en: {
        translation: {
            ...mainPageEn,
            ...projectPageEn,
            ...gingoEn
        }
    },
    pt: {
        translation: {
            ...mainPagePt,
            ...projectPagePt
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18n
