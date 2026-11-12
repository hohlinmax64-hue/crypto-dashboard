import CoinTableItem from "./CoinTableItem.tsx";
import {useCrypto} from "../../../hooks/useCrypto.ts";
import type {CryptoData} from "../../../types/CryptoData.ts";

export default function CoinTable() {
    const {isLoading, error, data} = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
    )

    function minSort(arr: any) {
        return [...arr].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
    }

    function maxSort(arr: any) {
        return [...arr].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    }

    if(isLoading) {
        return <p>Loading..</p>
    }
    if(error) {
        return <p>Error {error.message}</p>
    }
    return (
        <>
            <div className='w-[350px] h-[350px]  bg-surface text-white border border-border rounded-2xl py-3 px-5'>
                <div className=''>
                    <h2 className='text-xl font-semibold mb-4'>Market trends</h2>
                    <p className='text-xs text-text-muted mb-3'>TOP GAINERS</p>
                </div>
                <div className='flex flex-col gap-5 mb-4'>
                    {maxSort(data)?.splice(0, 3).map((item) => (
                        <CoinTableItem key={item.id} crypto={item}/>
                    ))}
                </div>
                <div >
                    <div className='w-full h-[1px] bg-border mb-4'></div>
                    <p className='text-xs text-text-muted mb-3'>TOP LOSERS</p>
                    <div className='flex flex-col gap-3'>
                        {minSort(data)?.splice(0, 2).map((item) => (
                            <CoinTableItem key={item.id} crypto={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}