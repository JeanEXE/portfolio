import * as React from "react"
import { useState, createContext, ReactNode } from "react"
import { TLanguage } from "../types/Types"
import i18n from "i18next"

interface ISettingsValues {
    language: TLanguage
}

interface MainContextProps {
    settings: ISettingsValues
    saveSettings: (values: ISettingsValues) => void
}

const DEFAULT_VALUES: ISettingsValues = {
    language: i18n.language as TLanguage
}

const MainContext = createContext<MainContextProps | undefined>(undefined)

interface SettingsProviderProps {
    children: ReactNode
    settingsValues?: ISettingsValues
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children, settingsValues }) => {
    const [currentSettings, setCurrentSettings] = useState<ISettingsValues>(settingsValues || DEFAULT_VALUES)

    const saveSettings = (values: ISettingsValues) => {
        setCurrentSettings(values)
    }

    return <MainContext.Provider value={{ settings: currentSettings, saveSettings }}>{children}</MainContext.Provider>
}

export const SettingsConsumer = MainContext.Consumer

export default MainContext
