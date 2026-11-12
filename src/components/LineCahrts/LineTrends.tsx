import {
    CartesianGrid,
    Line,
    LineChart,
    YAxis,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import CustomTooltip from "./CustomTooltip.tsx";

export default function LineTrends({data}: any) {
    const priceCrypto = Array.from(data.price)
    const objPriceArr = priceCrypto.map((item) => ({
        price: item
    }))
    console.log(objPriceArr);
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={objPriceArr}>
                    <CartesianGrid
                        horizontal={false}
                        vertical={false}
                        strokeDasharray="0"/>
                    <YAxis
                        domain={['dataMin', 'dataMax']}
                        hide={true}
                    />
                    <Tooltip content={CustomTooltip}/>
                    <Line
                        type="linear"
                        dataKey="price"
                        stroke="var(--color-accent)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}