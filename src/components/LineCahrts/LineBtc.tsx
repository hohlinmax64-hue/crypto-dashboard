import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import CustomTooltip from "./CustomTooltip.tsx";

const obj = [
    {name: 'jun', product1: 1200, product2: 200},
    {name: 'Feb', product1: 2100, product2: 1300},
    {name: 'Marc', product1: 4200, product2: 5200},
    {name: 'April', product1: 7000, product2: 600},
    {name: 'May', product1: 200, product2: 200},
    {name: 'Juni', product1: 3100, product2: 1300},
    {name: 'Juli', product1: 4200, product2: 5200},
    {name: 'Aug', product1: 200, product2: 600},
    {name: 'Sep', product1: 10200, product2: 200},
    {name: 'Okt', product1: 2100, product2: 1300},
    {name: 'Nov', product1: 7200, product2: 5200},
    {name: 'Dez', product1: 2000, product2: 600},
]

export function LineBtc() {

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
                        dataKey="name"
                    />

                    <Tooltip content={CustomTooltip}/>

                    <Line
                        type="linear"
                        dataKey="product1"
                        stroke="var(--color-accent)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}