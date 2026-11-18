import { Card, Space } from 'antd';
import {useCrypto} from "../../hooks/useCrypto.ts";
import type {GlobalMarketData} from "../../types/GlobalMarketData.ts";

export default function StatCard(){
    const {data} = useCrypto<GlobalMarketData>('https://api.coingecko.com/api/v3/global')
    console.log("Data type", data)
    // @ts-ignore
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
                    <h2 className='text-xl font-semibold mb-2'>${data?.data.total_market_cap.usd.toLocaleString('en')}</h2>
                    <div className='flex gap-10'>
                        <p className='font-semibold text-xs'
                           style={{color: data?.data.market_cap_change_percentage_24h_usd === undefined
                                   ? 'var(--color-text-muted)'
                                   : data?.data.market_cap_change_percentage_24h_usd >= 0
                                       ? 'var(--color-positive)'
                                       : 'var(--color-negative)',
                        }}
                        >{data?.data.market_cap_change_percentage_24h_usd !== undefined
                            ? data?.data.market_cap_change_percentage_24h_usd.toFixed(2)
                            : 'Not Info'
                        }%</p>
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
                    <h2 className='text-xl font-semibold mb-2'>${data?.data.total_volume.usd.toLocaleString('en')}</h2>
                    <div className='flex gap-10'>
                        <p className='font-semibold text-xs'
                           style={{color: data?.data.volume_change_percentage_24h_usd === undefined
                                   ? 'var(--color-text-muted)'
                                   : data?.data.volume_change_percentage_24h_usd >= 0
                                       ? 'var(--color-positive)'
                                       : 'var(--color-negative)',
                           }}
                        >{data?.data.volume_change_percentage_24h_usd.toFixed(2)}%</p>
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
                    <h2 className='text-xl font-semibold mb-2'>{data?.data.market_cap_percentage.btc.toFixed(1)}%</h2>
                    <div className='flex gap-10'>
                        <p className='font-semibold text-xs text-negative'>{data?.data.market_cap_change_percentage_24h_usd.toFixed(2)}%</p>
                        <p className='font-normal text-text-muted text-xs'>vs. last 24 hours</p>
                    </div>
                </div>
            </Card>

        </Space>
    )
}