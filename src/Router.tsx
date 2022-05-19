import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './screens/MainPage'
import ProjectPage from "./screens/Project/ProjectPage";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="project/:nameProject" element={<ProjectPage />} />
        </Routes>
    )
}