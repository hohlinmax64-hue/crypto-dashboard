import {Routes, Route} from "react-router-dom";
import Dashboard from "../../pages/Dashboard.tsx";
import CoinDetails from "../../pages/CoinDetails.tsx";
import Markets from "../../pages/Markets.tsx";
import Portfolio from "../../pages/Portfolio.tsx";
import Watchlist from "../../pages/Watchlist.tsx";
import MainLayout from "../../layouts/MainLayout.tsx";


export default function AppRoutes(){

    return (
        <Routes>
            <Route path='/' element={ <MainLayout />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="/coindetails" element={<CoinDetails />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/watchlist" element={<Watchlist />} />
            </Route>
        </Routes>
    )
};