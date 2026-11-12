import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer
} from 'recharts';


export function LineTrends() {
    const arr= [
        {time: '00', price: 1000},
        {time: '1', price: 1200},
        {time: '2', price: 500},
        {time: '3', price: 2000},
        {time: '4', price: 14000},
        {time: '5', price: 1000},
        {time: '6', price: 1200},
        {time: '7', price: 500},
        {time: '8', price: 2000},
        {time: '9', price: 14000},
        {time: '10', price: 1000},
        {time: '11', price: 1200},
        {time: '12', price: 500},
        {time: '13', price: 2000},
        {time: '14', price: 14000},
        {time: '15', price: 1000},
        {time: '16', price: 1200},
        {time: '17', price: 500},
        {time: '18', price: 2000},
        {time: '19', price: 14000},
        {time: '20', price: 14000},
        {time: '21', price: 1000},
        {time: '22', price: 1200},
        {time: '23', price: 500},
    ]
    console.log(arr)
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={arr}>
                    <CartesianGrid
                        horizontal={false}
                        vertical={false}
                        strokeDasharray="0"/>

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