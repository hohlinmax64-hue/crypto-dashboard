import AssetAllocation from "../components/Portfolio/AssetAllocatio.tsx";
import PortfolioPerformance from "../components/Portfolio/PortfolioPerformance.tsx";
import TotalProtfolioValue from "../components/Portfolio/TotalProtfolioValue.tsx";
import TablePortfolioAssets from "../components/Portfolio/TablePortfolioAssets.tsx";
// import {useContext, useState} from "react";
// import type {Portfolio} from "../types/Portfolio.ts";
// import {useCrypto} from "../hooks/useCrypto.ts";
// import type {CryptoData} from "../types/CryptoData.ts";


export default function Portfolio() {
    // const [portfolio, setPortfolio] = useState<Portfolio>([]);
    // const [selectedPeriodPortfolio, setsSelectedPeriodPortfolio] = useState<number>(1)
    // function handlePeriodPortfolio(period: number) {
    //     setsSelectedPeriodPortfolio(period)
    // }

    return (
        <>
            <TotalProtfolioValue />
            <div className='flex gap-5 mb-6'>
                <PortfolioPerformance />
                <AssetAllocation />
            </div>
            <TablePortfolioAssets />
        </>
    )
}
