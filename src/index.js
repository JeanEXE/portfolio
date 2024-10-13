import React from "react"
import * as ReactDOMClient from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./helpers/ScrollToTop"
import "./index.css"
import "./helpers/i18n"
import reportWebVitals from "./reportWebVitals"
import Router from "./Router"
import ReactGA from "react-ga4"
import { SettingsProvider } from "./context/MainContext"

ReactGA.initialize(process.env.REACT_APP_FIREBASE_KEY)

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SettingsProvider>
                <ScrollToTop />
                <Router />
            </SettingsProvider>
        </BrowserRouter>
    </React.StrictMode>
)

reportWebVitals()
