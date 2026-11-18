import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import CustomTooltip from "./CustomTooltip.tsx";

export default function LineBtc({dataInfoCrypto}: any) {
    console.log("dataInfoCrypto", dataInfoCrypto);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataInfoCrypto}>
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