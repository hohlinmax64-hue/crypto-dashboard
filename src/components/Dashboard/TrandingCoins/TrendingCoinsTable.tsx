import {Card} from 'antd'
import {Link} from "react-router-dom";
import {useCrypto} from "../../../hooks/useCrypto.ts";
import LineTrends from "../../LineCahrts/LineTrends.tsx";
import type {CryptoData} from "../../../types/CryptoData.ts";

export default function TrendingCoinsTable() {
    const { data } = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h,7d,30d,1y&sparkline=true'
    )

    return (
        <div>
            <Card style={{
                width: '1090px',
                height: '100%',
                marginBottom: '50px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
            }}>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-white '>Popular assets</h2>
                    <Link to='/markets'>View Markets</Link>
                </div>

                <div className="w-full max-w-[870px]">

                    {/* Header */}
                    <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] items-center px-3 mb-3">
                        <div></div>
                        <p className="text-xs  font-semibold text-text-muted">PRICE</p>
                        <p className="text-xs  font-semibold text-text-muted">24H</p>
                        <p className="text-xs  font-semibold text-text-muted">TREND</p>
                    </div>

                    {/* Coins */}
                    <div>
                        {data?.slice(0, 5).map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-[2.2fr_1fr_1fr_1fr] items-center px-3 h-[50px]"
                            >
                                {/* Asset */}
                                <div className="flex items-center gap-5 min-w-0">
                                    <img
                                        className="w-[30px] h-[30px] rounded-full shrink-0"
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div className="text-text-white min-w-0">
                                        <p className="text-xs font-semibold truncate">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-text-muted uppercase">
                                            {item.symbol}
                                        </p>
                                    </div>
                                </div>
                                {/* Price */}
                                <div>
                                    <p className="text-xs text-text-white font-medium">
                                        ${item.current_price.toLocaleString("en-US")}
                                    </p>
                                </div>

                                {/* 24H Change */}
                                <div>
                                    <p className={`text-xs font-semibold ${
                                        item.price_change_percentage_24h === null
                                            ? "text-text-muted"
                                            : item.price_change_percentage_24h >= 0
                                                ? "text-positive"
                                                : "text-negative"
                                    }`}>
                                        {item.price_change_percentage_24h === null
                                            ? "No info"
                                            : `${item.price_change_percentage_24h > 0 ? "+" : ""}${item.price_change_percentage_24h.toFixed(2)}%`
                                        }
                                    </p>
                                </div>

                                {/* Trend */}
                                <div className='w-full h-[50px]'>
                                    <LineTrends data={item.sparkline_in_7d}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}