import { Table } from 'antd';
import {useCrypto} from "../../hooks/useCrypto.ts";
import type {CryptoData} from "../../types/CryptoData.ts";
import {useState} from "react";
import {FilterCoinsGainers, FilterCoinsLosers} from "../../utility/FilterTableCoinsDetails.ts";

const { Column } = Table;

export default function TableCoinsDetails() {
    const [activeTab, setActiveTab] = useState('All');
    const {data} = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h,7d,30d,1y&sparkline=true'
    )
    function filteredData() {
        const filterData = data ?? []
        if(activeTab === 'All') {
            return filterData
        }
        if(activeTab === 'Gainers') {
            return FilterCoinsGainers(filterData)
        }
        if(activeTab === 'Losers') {
            return FilterCoinsLosers(filterData)
        }
        return filterData
    }
    return (
        <div>
            <div className="p-4.5">
                <div className='flex items-center gap-12 mb-3'>
                    <div>
                        <h2 className='text-2xl font-bold text-text-white'>$2.48T</h2>
                        <p className="text-sm text-text-muted">Total market cap</p>
                    </div>
                    <p className='text-xs text-positive'>+2.36% today</p>
                </div>
                <div className='flex items-center mb-5'>
                    <h2 className='font-semibold text-sm text-text-white mr-3.5'>All assets</h2>
                    <p className='text-text-muted text-xs'>Top {data?.length} by market cap</p>
                </div>
                <div className='text-text-muted text-xs flex items-center gap-10'>
                    <div className="text-text-muted text-xs flex items-center gap-3 mb-6 mt-6">
                        {['All', 'Gainers', 'Losers'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-md border transition duration-300
                                ${activeTab === tab
                                    ? 'bg-hover border-accent text-white'
                                    : 'border-transparent hover:bg-hover hover:border-accent'
                                }
                               `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            <Table
                className="crypto-table"
                dataSource={filteredData()}
                rowKey="id"
                pagination={{
                    total: 100,
                    defaultCurrent: 1,
                    defaultPageSize: 6,
                    showSizeChanger: false,
                }}
            >
                <Column title="#"
                        key="market_cap_rank"
                        dataIndex="market_cap_rank"
                        render={(record, value, index) =>
                        <p key={index} className='text-text-muted'>{value.market_cap_rank}</p>
                }
                />
                <Column title="ASSET"
                        dataIndex="name"
                        key="name"
                        render={(record, value, index) =>
                            <div key={index} className='flex items-center gap-2.5'>
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
                    render={(record, value, index) =>
                        <p key={index}>${value.current_price.toLocaleString('en')}</p>
                }
                />
                <Column
                    title="24H"
                    dataIndex="price_change_percentage_24h"
                    key="price_change_percentage_24h"
                    render={(record, value, index) =>
                        <p key={index}
                            style={{color: value.price_change_percentage_24h === null
                                ? 'var(--color-text-muted)'
                                : value.price_change_percentage_24h >= 0
                                        ? 'var(--color-positive)'
                                        : 'var(--color-negative)'
                        }}
                        >{value.price_change_percentage_24h === null
                            ? 'Not Info'
                            : `${value.price_change_percentage_24h.toFixed(2)}%`
                        }</p>
                    }
                />
                <Column
                    title="MARKET CAP"
                    dataIndex="market_cap"
                    key="market_cap"
                    render={(record, value, index) =>
                    <p key={index}>{value.market_cap === null
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
                    render={(record, value, index) =>
                        <p key={index}>
                            {value.total_volume === null
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
                <Column
                    title=""
                    key='market_cap_rank'
                    dataIndex="market_cap_rank"
                    render={()=>
                        <button>☆</button>
                }
                />
            </Table>
            </div>
        </div>
    )
}