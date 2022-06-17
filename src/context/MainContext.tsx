import * as React from 'react'
import { useState, createContext } from 'react'

const MainContext = createContext(null)

const DEFAULT_VALUES = {
    language: 'en'
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
