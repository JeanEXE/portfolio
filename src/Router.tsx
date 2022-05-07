import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Main from './screens/Main'
import Project from "./screens/Project";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="project" element={<Project />} />
        </Routes>
    )
}