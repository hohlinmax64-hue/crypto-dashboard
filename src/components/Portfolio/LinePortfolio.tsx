import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import CustomTooltip from "../LineCahrts/CustomTooltip.tsx";
import type {CryptoData} from "../../types/CryptoData.ts";

interface LinePortfolioProps {
    dataPortfolio: CryptoData[]
}

export default function LinePortfolio({dataPortfolio} :LinePortfolioProps) {
    const portfolio = [
        { current_price: 90000, quantity: 0.5 },
        { current_price: 3000, quantity: 2 },
        { current_price: 140, quantity: 10 },
    ];

    const arr = portfolio.reduce((a, b) => {
        const total = a + b.current_price + b.quantity
        return total;
    }, 0)

    const obj = [
        {coin: dataPortfolio, price: arr, time: '12'},
        {coin: dataPortfolio, price: arr, time: '11'},
        {coin: dataPortfolio, price: arr, time: '15'},
        {coin: dataPortfolio, price: arr, time: '6'},
        {coin: dataPortfolio, price: arr, time: '1'},
    ]

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={obj}>
                    <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        stroke='var(--color-border)'
                        strokeDasharray="0"/>

                    <XAxis
                        stroke='var(--color-border)'
                        dataKey='time'
                        tickFormatter={(tickItem) => new Date(tickItem).toLocaleDateString()}
                    />

                    <Tooltip content={CustomTooltip}/>

                    <Line
                        type="linear"
                        dataKey='price'
                        stroke="var(--color-accent)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}