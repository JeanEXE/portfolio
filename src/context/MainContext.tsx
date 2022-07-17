import * as React from 'react'
import { useState, createContext } from 'react'
import i18n from 'i18next'

const MainContext = createContext(null)

const DEFAULT_VALUES = {
    language: i18n.language
}

export const SettingsProvider = ({ children, settingsValues }: { children: any; settingsValues: any }) => {
    const [currentSettings, setCurrentSettings] = useState<any>(settingsValues || DEFAULT_VALUES)

    const saveSettings = (values: any) => {
        setCurrentSettings(values)
    }

    return <MainContext.Provider value={{ settings: currentSettings, saveSettings }}>{children}</MainContext.Provider>
}

export const SettingsConsumer = MainContext.Consumer

export default MainContext
