import type {CryptoData} from "../../../types/CryptoData.ts";

interface CoinTableItem {
    crypto: CryptoData;
}

export default function CoinTableItem({crypto}: CoinTableItem) {
    return (
        <div className='w-[238px] flex items-center justify-between'>
            <div className='flex items-center gap-2.5'>
                <img src={crypto.image} alt={crypto.name} className="w-[27px] h-[27px] object-contain" />
                <p className='text-xs font-bold'>{crypto.name}</p>
            </div>
            <p className='text-xs font-semibold' style={{
                color: crypto.price_change_percentage_24h === null ?
                    'var(--color-text-muted)' : crypto.price_change_percentage_24h > 0 ?
                        'var(--color-positive)' :
                        'var(--color-negative)'}}>
                {crypto.price_change_percentage_24h === null ? 'not info' : crypto.price_change_percentage_24h.toFixed(2)}%
            </p>
        </div>
    )
}