import {Card, Spin} from 'antd'
import LineBtc from "../LineCahrts/LineBtc.tsx";
import {useContext, useState} from "react";
import {Conetxt} from "../../utility/Context.ts";
import {useChartPeriodFilter} from "../../hooks/useChartPeriodFilter.ts";
import { LoadingOutlined } from "@ant-design/icons";
import {AlertCircle} from "lucide-react";

export default function PortfolioChart() {
    const [selectedPeriod, setSelectedPeriod] = useState<number>(1)
    function handlePeriod(period: number) {
        setSelectedPeriod(period)
    }
    const context = useContext(Conetxt);

    const cryptoData = context?.cryptoData;

    const { arrHistoryPrices, isLoading, isError } = useChartPeriodFilter({id: cryptoData?.id, day: selectedPeriod})

    if(!context) {
        throw new Error("Context is not provided");
    }
    console.log("arrHistoryPrices.length?", arrHistoryPrices.length)

    return (
        <>
            {!cryptoData ? (
                <Card style={{
                    width: '720px',
                    height: '350px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                }}>
                    <p className="text-center text-xl text-text-white">Pleas Change a coin from "Market trends"</p>
                </Card>) :
                (<Card style={{
                    width: '720px',
                    height: '350px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                }}>
                    <div className='flex items-start justify-between mb-7'>
                        <div className='text-text-white'>
                            <p className='text-sm font-semibold mb-4'>
                                {cryptoData.name}
                                <span className='ml-2'>({cryptoData.symbol.toUpperCase()})</span>
                            </p>
                            <span className='flex items-center gap-7'>
                        <p className='text-2xl font-bold'>${cryptoData.current_price.toLocaleString("en-US")}</p>
                        <p className='text-xs font-semibold'
                           style={{color: cryptoData.price_change_percentage_24h === null ?
                                   'var(--color-text-muted)'
                                   : cryptoData.price_change_percentage_24h > 0
                                       ? 'var(--color-positive)'
                                       : 'var(--color-negative)'
                        }}>
                            {cryptoData.price_change_percentage_24h === null
                                ? 'Not Info'
                                : cryptoData.price_change_percentage_24h.toFixed(2)}% (24h)
                        </p>
                    </span>
                        </div>
                        <div>
                            <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5 mr-2'
                                    onClick={() => handlePeriod(1)}>1D</button>
                            <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5 mr-2'
                                    onClick={() => handlePeriod(7)}>1W</button>
                            <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5 mr-2'
                                    onClick={() => handlePeriod(30)}>1M</button>
                            <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5'
                                    onClick={() => handlePeriod(365)}>1Y</button>
                        </div>
                    </div>
                        {isLoading && <div className="flex justify-center items-center">
                            <Spin indicator={<LoadingOutlined spin />} />
                        </div>
                        }


                        {isError && (
                            <div className="flex items-start gap-3 rounded-lg border border-negative/40 bg-surface p-4">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-negative/10">
                                    <AlertCircle
                                        size={18}
                                        className="text-negative"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-text-white">
                                        Failed to load chart
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-text-muted">
                                        Unable to retrieve market data.
                                        Please try again later.
                                    </p>
                                </div>

                            </div>
                        )}

                        {!isLoading && (
                            <div style={{ width: '100%', height: '220px' }}>
                                <LineBtc dataInfoCrypto={arrHistoryPrices} />
                            </div>
                        )}
                </Card>
            )}
        </>
    )
}