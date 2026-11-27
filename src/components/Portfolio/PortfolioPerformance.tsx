import {Card} from "antd";
import LinePortfolio from "./LinePortfolio.tsx";
import {useState} from "react";
import {useCrypto} from "../../hooks/useCrypto.ts";
import type {CryptoData} from "../../types/CryptoData.ts";

export default function PortfolioPerformance() {
    const [activeTab, setActiveTab] = useState('ALL');
    const {data} = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h,7d,30d,1y&sparkline=true'
    );

    const dataArr = data === undefined ? [] : data;

    return (
        <>
                <Card style={{
                    width:'850px',
                    height: '330px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)'
                }}>
                    <div className='flex justify-between items-center mb-10'>
                        <div>
                            <h2 className='text-text-white text-sm font-semibold mb-2'>Portfolio performance</h2>
                            <p className='text-text-muted text-xs'>Value over time</p>
                        </div>
                        <div className='flex gap-1.5'>
                            {['1W', '1M', '3M', '1Y', 'ALL'].map((btn) => (
                                <button className={`text-[10px] p-1.5 border text-text-muted rounded-md transition duration-300
                                    ${activeTab === btn
                                        ? 'bg-hover border-accent text-accent'
                                        : 'border-border hover:bg-hover hover:border-accent'}
                                    `}
                                    key={btn}
                                    onClick={() => setActiveTab(btn)}
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '220px' }}>
                        <LinePortfolio dataPortfolio={dataArr} />
                    </div>
                </Card>
        </>
    )
}