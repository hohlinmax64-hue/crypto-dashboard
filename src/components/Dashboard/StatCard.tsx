import { Card, Space } from 'antd';

export default function StatCard(){

    return (
        <Space size={20} style={{
            display: 'flex',
            marginBottom: '20px'
        }}>
            <Card style={{
                width: '350px',
                height: '110px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
            }}>

                <div className=''>
                    <p className='text-text-muted font-medium text-sm mb-2'>Total Market Capitalization</p>
                    <h2 className='text-xl font-semibold mb-2'>$2.48T</h2>
                    <div className='flex gap-10'>
                        <p className='font-semibold text-xs text-positive'>+2.36%</p>
                        <p className='font-normal text-text-muted text-xs'>vs. last 24 hours</p>
                    </div>
                </div>
            </Card>
            <Card style={{
                width: '350px',
                height: '105px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
            }}>
                <div>
                    <p className='text-text-muted font-medium text-sm mb-2'>24h Trading Volume</p>
                    <h2 className='text-xl font-semibold mb-2'>$84.2B</h2>
                    <div className='flex gap-10'>
                        <p className='font-semibold text-xs text-positive'>+8.14%</p>
                        <p className='font-normal text-text-muted text-xs'>vs. last 24 hours</p>
                    </div>
                </div>
            </Card>
            <Card style={{
                width: '350px',
                height: '105px',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
            }}>
                <div className=''>
                    <p className='text-text-muted font-medium text-sm mb-2'>BTC Dominance</p>
                    <h2 className='text-xl font-semibold mb-2'>54.2%</h2>
                    <div className='flex gap-10'>
                        <p className='font-semibold text-xs text-negative'>-0.31%</p>
                        <p className='font-normal text-text-muted text-xs'>vs. last 24 hours</p>
                    </div>
                </div>
            </Card>

        </Space>
    )
}