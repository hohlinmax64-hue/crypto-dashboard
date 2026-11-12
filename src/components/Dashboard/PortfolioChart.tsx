import {Card} from 'antd'
import {LineBtc} from "../LineCahrts/LineBtc.tsx";

export default function PortfolioChart() {

    return (
        <>
            <Card style={{
                width: '720px',
                height: '350px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
            }}>
                <div className='flex items-start justify-between mb-7'>
                    <div className='text-text-white'>
                        <p className='text-sm font-semibold mb-4'>Bitcoin (BTC)</p>
                        <span className='flex items-center gap-7'>
                        <p className='text-2xl font-bold'>$67,842.18</p>
                        <p className='text-xs font-semibold text-positive '>+2.41%  (24h)</p>
                    </span>
                    </div>
                    <div>
                        <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5 mr-2'>1D</button>
                        <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5 mr-2'>1W</button>
                        <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5 mr-2'>1M</button>
                        <button className='cursor-pointer font-medium text-xs border rounded-md border-border text-text-muted p-1.5'>1Y</button>
                    </div>
                </div>
                <div style={{ width: '100%', height: '220px' }}>
                    <LineBtc />
                </div>
            </Card>
        </>
    )
}