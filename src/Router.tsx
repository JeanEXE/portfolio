import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './screens/MainPage'
import Gingo from './screens/ProjectPages/Gingo'
import GingoBusiness from './screens/ProjectPages/GingoBusiness'
import IsabelaFlores from './screens/ProjectPages/IsabelaFlores'
import FloresOnline from './screens/ProjectPages/FloresOnline'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="Gingo" element={<Gingo />} />
            <Route path="Gingo%20Business" element={<GingoBusiness />} />
            <Route path="Isabela%20Flores" element={<IsabelaFlores />} />
            <Route path="Flores%20Online" element={<FloresOnline />} />
        </Routes>
    )
}
