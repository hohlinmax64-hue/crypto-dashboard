import StatCard from "../components/Dashboard/StatCard.tsx";
import PortfolioChart from "../components/Dashboard/PortfolioChart.tsx";
import CoinTable from "../components/Dashboard/CoinTable/CoinTable.tsx";
import TrendingCoinsTable from "../components/Dashboard/TrandingCoins/TrendingCoinsTable.tsx";


export default function Dashboard() {

    return (
        <>
            <div className='my-10 text-white'>
                <h2 className='font-semibold text-xl'>Good afternoon, Maksym</h2>
                <p>Here’s what’s happening in the market today.</p>
            </div>
            <StatCard />
            <div className='flex gap-5 mb-5'>
                <PortfolioChart />
                <CoinTable />
            </div>
            <div>
                <TrendingCoinsTable />
            </div>
        </>
    )
}