import type {CryptoData} from "../types/CryptoData.ts";

type CryptoDataProps = CryptoData & {price_change_percentage_24h_in_currency: number};


function hasValidPriceChange(cryptoData: unknown): cryptoData is CryptoDataProps {
    return (
        typeof cryptoData === "object" &&
            cryptoData !== null &&
            'price_change_percentage_24h_in_currency' in cryptoData &&
            typeof (cryptoData as CryptoDataProps).price_change_percentage_24h_in_currency === 'number'
    )
}

export function FilterCoinsGainers(data: CryptoData[]): CryptoDataProps[] {
    return [...data].filter(hasValidPriceChange).sort((a, b) => b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency);
}

export function FilterCoinsLosers (data: CryptoData[]): CryptoDataProps[] {
    return [...data].filter(hasValidPriceChange).sort((a, b) => a.price_change_percentage_24h_in_currency - b.price_change_percentage_24h_in_currency);
}