import {Routes, Route} from "react-router-dom";
import Dashboard from "../../pages/Dashboard.tsx";
import Markets from "../../pages/Markets.tsx";
import Portfolio from "../../pages/Portfolio.tsx";
import Watchlist from "../../pages/Watchlist.tsx";
import MainLayout from "../../layouts/MainLayout.tsx";
import BuyCrypto from "../../pages/BuyCrypto.tsx";


export default function AppRoutes(){

    return (
        <Routes>
            <Route path='/' element={ <MainLayout />} >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/buycrypto" element={<BuyCrypto />} />
            </Route>
        </Routes>
    )
};