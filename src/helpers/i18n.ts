import * as i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import mainPageEn from '../data/Translations/MainPage-en'
import mainPagePt from '../data/Translations/MainPage-pt'
import gingoEn from '../data/Translations/Gingo-en'

const resources = {
    en: {
        translation: {
            ...mainPageEn,
            ...gingoEn
        }
    },
    pt: {
        translation: {
            ...mainPagePt
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
