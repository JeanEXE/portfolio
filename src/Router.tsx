import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Main from './screens/Main'
import Gingo from "./screens/Project/Gingo";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="project" element={<Gingo />} />
        </Routes>
    )
}