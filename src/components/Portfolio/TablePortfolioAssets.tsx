import { Table } from 'antd';
import {useCrypto} from "../../hooks/useCrypto.ts";
import type {CryptoData} from "../../types/CryptoData.ts";

const { Column } = Table;

export default function TablePortfolioAssets() {
    const { data: coinsData } = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h,7d,30d,1y&sparkline=true'
    )

    return (
        <div>
            <Table
                className="crypto-table"
                dataSource={coinsData}
                rowKey="id"
                pagination={{
                    total: 6,
                    defaultCurrent: 1,
                    defaultPageSize: 3,
                    showSizeChanger: false,
                }}
            >
                <Column title="ASSET"
                        dataIndex="name"
                        key="name"
                        render={(record,value) =>
                            <div className='flex items-center gap-2.5'>
                                <img className='w-7.5 h-7.5' src={value.image} alt={value.name} />
                                <div>
                                    <p className='font-semibold text-xs'>{value.name}</p>
                                    <p className='text-xs uppercase'>{value.symbol}</p>
                                </div>
                            </div>
                }
                />
                <Column
                    title="PRICE"
                    dataIndex="current_price"
                    key="current_price"
                    render={(record, value) =>
                        <p>${value.current_price === undefined || null ? 'Not info' : value.current_price.toLocaleString('en')}</p>
                }
                />
                <Column
                    title="24H"
                    dataIndex="price_change_percentage_24h"
                    key="price_change_percentage_24h"
                    render={(record, value) =>
                        <p
                            style={{color: value.price_change_percentage_24h === undefined || null
                                    ? 'var(--color-text-muted)'
                                    : value.price_change_percentage_24h >= 0
                                        ? 'var(--color-positive)'
                                        : 'var(--color-negative)'
                        }}
                        >{value.price_change_percentage_24h === undefined || value.price_change_percentage_24h === null
                            ? 'Not Info'
                            : `${value.price_change_percentage_24h.toFixed(2)}%`
                        }</p>
                }
                />
                <Column
                    title="MARKET CAP"
                    dataIndex="market_cap"
                    key="market_cap"
                    render={(record, value) =>
                        <p>{value.market_cap === undefined || null
                            ? 'Not info'
                            : value.market_cap >= 1000000000000
                                ? `${value.market_cap.toLocaleString('en').slice(0, 4)}T`
                                : `${value.market_cap.toLocaleString('en').slice(0, 4)}B`
                        }</p>
                }
                />
                <Column
                    title="VOLUME"
                    dataIndex="total_volume"
                    key="total_volume"
                    render={(record, value) =>
                        <p>
                            {value.total_volume === undefined || null
                                ? 'Not info'
                                : value.total_volume >= 1000000000000
                                    ? `${value.total_volume.toLocaleString('en').slice(0, 4)}T`
                                    : value.total_volume >= 1000000000
                                        ? `${value.total_volume.toLocaleString('en').slice(0, 4)}B`
                                        : `${value.total_volume.toLocaleString('en').slice(0, 5)}M`
                            }
                        </p>
                    }
                />
            </Table>
        </div>
    )
}