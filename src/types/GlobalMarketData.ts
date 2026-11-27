

export interface GlobalMarket {
    market_cap_change_percentage_24h_usd: number;
    market_cap_percentage: {
        btc: number;
    };
    total_market_cap: {
        usd: number;
    }
    total_volume: {
        usd: number;
    }
    volume_change_percentage_24h_usd: number;
}

export interface GlobalMarketData {
    data: GlobalMarket;
}