import {useCrypto} from "./useCrypto.ts";
import type {MarketChartResponse} from "../types/MarketChartResponse.ts";


interface ChartPeriodFilterProps {
    id: string | undefined
    day: number;
}

export function useChartPeriodFilter({id, day} : ChartPeriodFilterProps) {
    const url = id ? `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`
        : ''
    const { data, isLoading, isError } = useCrypto<MarketChartResponse>(
        url,
        Boolean(id)
    )

    const arrHistoryPrices = data?.prices.map((item) => ({
        time: item[0],
        price: item[1],
    })) ?? []

    return { arrHistoryPrices, isLoading, isError };
}
