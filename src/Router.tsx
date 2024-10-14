import * as React from "react"
import { Routes, Route } from "react-router-dom"
import { MainPage, ProjectPage } from "./screens"

export default function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainPage />}
            />
            <Route
                path="Project"
                element={<ProjectPage />}
            />
        </Routes>
    )
}
