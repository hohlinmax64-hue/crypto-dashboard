import { Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import {useCrypto} from "../../hooks/useCrypto.ts";
import type {CryptoData} from "../../types/CryptoData.ts";
import {type ChangeEvent, useContext, useState} from "react";
import {ChoisContext} from "../../utility/Context.ts";
import {SearchAssets} from "../../utility/SearchAssets.ts";

export default function ChooseAssets() {
    const [inputValue, setInputValue] = useState<string>("");
    const {data} = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h,7d,30d,1y&sparkline=true'
    )
    const [value, setValue] = useState(1);

    const context = useContext(ChoisContext)
    const searchdFilter = SearchAssets({
        assets: data,
        input: inputValue}
    )

    if (context === null) {
        throw new Error('No choisCoin found.');
    }

    const {choisCoinById} = context;

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <Card
                    styles={{
                      header: {
                          borderBottom: 'none',
                      },
                  }}
                  style={{
                        width: 600,
                        backgroundColor: 'var( --color-surface)',
                        border: '2px solid var( --color-border )',
                        borderBottom: 'none',
                    }}
                >
                <h2 className='text-xl font-semibold text-text-white pb-3'>Choose Assets</h2>
                <div className='border border-border rounded-lg text-lg text-text-muted p-1 flex gap-4 items-center mb-4 '>
                    <SearchOutlined />
                    <input
                        value={inputValue}
                        onChange={onChangeValue}
                        placeholder='Search cryptocurrency...'
                        className='outline-none w-full'/>
                </div>
                <div>
                    <Radio.Group
                        value={value}
                        onChange={onChange}
                        className="asset-radio-group"
                    >
                        {searchdFilter?.slice(0, 4).map((item) => (
                            <Radio
                                key={item.id}
                                value={String(item.id)}
                                onClick={() => choisCoinById(item.id)}
                                className="asset-radio"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <img
                                            className="w-10 h-10"
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <div>
                                            <p className="font-semibold text-sm text-text-white">
                                                {item.name}
                                            </p>
                                            <p className="text-sm uppercase text-gray-400">
                                                {item.symbol}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="font-semibold text-sm text-text-white">
                                        ${item.current_price.toLocaleString('en', {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2,
                                    })}
                                    </p>
                                </div>
                            </Radio>
                        ))}
                    </Radio.Group>
                </div>
            </Card>
        </>
    )
}