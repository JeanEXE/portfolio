import * as React from "react"
import { useState, useContext } from "react"
import { useTranslation } from "react-i18next"
import MainContext from "../../context/MainContext"
import "./Switch.css"
import pt from "../../assets/img/portugues.jpg"
import en from "../../assets/img/ingles.jpg"

const Switch = () => {
    const { settings, saveSettings } = useContext(MainContext)

    const [isToggled, setIsToggled] = useState(settings.language !== "en")
    const { i18n } = useTranslation()

    const onToggle = () => {
        const nextLanguage = isToggled ? "en" : "pt"
        saveSettings({ language: nextLanguage })
        i18n.changeLanguage(nextLanguage)
        setIsToggled(!isToggled)
    }

    return (
        <label className="toggle-switch cursor-pointer">
            <input
                type="checkbox"
                checked={isToggled}
                onChange={onToggle}
            />
            <span className="switch" />
            <img
                className={`${
                    isToggled ? "animate-fade-in" : "hidden"
                } rounded-sm absolute h-[11px] bottom-[4px] left-[5px] sm:h-[13px] sm:bottom-[4px] sm:left-[9px] z-10`}
                src={pt}
                alt="brazil flag"
            />
            <img
                className={`${
                    !isToggled ? "animate-fade-in" : "hidden"
                } rounded-sm absolute h-[11px] bottom-[4px] right-[5px] sm:h-[13px] sm:bottom-[4px] sm:right-[9px] z-10`}
                src={en}
                alt="uk flag"
            />
        </label>
    )
}

export default Switch
