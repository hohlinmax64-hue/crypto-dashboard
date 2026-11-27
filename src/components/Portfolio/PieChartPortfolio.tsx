import {Cell, Pie, PieChart, Tooltip} from "recharts";

export default function PieChartPortfolio() {
    const data = [
        {name: 'BTC', price: 2500},
        {name: 'ETH', price: 1500},
        {name: 'SOL', price: 500},
        {name: 'Other', price: 1300},
    ]

    const COLORS = ["#0088FE", "#00C49F","#FFBB28", "#FF8042", "#F44236"]
    return (
        <>
            <PieChart width={200} height={200}>
                <Pie data={data} dataKey="price">
                    {data.map((crypto, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                    ))}
                </Pie>
                <Tooltip/>
            </PieChart>
        </>
    )
}