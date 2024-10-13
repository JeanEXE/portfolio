import * as i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { TLanguage } from '../types/Types'
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
import folPt from '../Translations/FloresOnline-pt'
import folEn from '../Translations/FloresOnline-en'

const DEFAULT_LANGUAGE: TLanguage = 'en'

const resources = {
    en: {
        translation: {
            ...mainPageEn,
            ...projectPageEn,
            ...gingoEn,
            ...gingoBusinessEn,
            ...isaFloresEn,
            ...folEn
        }
    },
    pt: {
        translation: {
            ...mainPagePt,
            ...projectPagePt,
            ...gingoPt,
            ...gingoBusinessPt,
            ...isaFloresPt,
            ...folPt
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANGUAGE,
    interpolation: {
        escapeValue: false
    }
})

export default i18n
