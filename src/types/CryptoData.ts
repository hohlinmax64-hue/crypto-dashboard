export interface CryptoData {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number //Капитализация
    market_cap_rank: number | null //Рейтинг
    total_volume: number
    price_change_percentage_24h: number | null
    high_24h: number | null
    low_24h: number | null
    circulating_supply: number | null
    price_change_percentage_1y_in_currency: number | null
    price_change_percentage_24h_in_currency: number | null
    price_change_percentage_30d_in_currency: number | null
    price_change_percentage_7d_in_currency: number | null
    sparkline_in_7d: number[]
}