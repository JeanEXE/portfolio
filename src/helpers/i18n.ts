import * as i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import mainPageEn from '../Translations/MainPage-en'
import mainPagePt from '../Translations/MainPage-pt'
import projectPageEn from '../Translations/ProjectPage-en'
import projectPagePt from '../Translations/ProjectPage-pt'
import gingoEn from '../Translations/Gingo-en'
import gingoPt from '../Translations/Gingo-pt'
import gingoBusinessEn from '../Translations/GingoBusiness-en'
import gingoBusinessPt from '../Translations/GingoBusiness-pt'
import isaFloresPt from '../Translations/IsabelaFlores-pt'
import isaFloresEn from '../Translations/IsabelaFlores-en'

const resources = {
    en: {
        translation: {
            ...mainPageEn,
            ...projectPageEn,
            ...gingoEn,
            ...gingoBusinessEn,
            ...isaFloresEn
        }
    },
    pt: {
        translation: {
            ...mainPagePt,
            ...projectPagePt,
            ...gingoPt,
            ...gingoBusinessPt,
            ...isaFloresPt
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'pt',
    interpolation: {
        escapeValue: false
    }
})

export default i18n
