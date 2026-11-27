import {Card} from "antd";
import {useContext, useState} from "react";
import {ChoisContext} from "../../utility/Context.ts";
import type {CryptoData} from "../../types/CryptoData.ts";

export default function PurchaseDetails() {
    const [boughtAsset, setBoughtAsset] = useState<CryptoData[]>([]);
    const context = useContext(ChoisContext);

    if(!context){
        throw new Error('PurchaseDetails must be used within the context')
    }
    const { cryptoChois } = context

    function handleSBuyAsset() {
        if (cryptoChois === undefined) {
            return null
        }
        setBoughtAsset(prev => [...prev, cryptoChois])
        console.log(boughtAsset)
    }

    return (
        <Card styles={{
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
            <h2 className='text-xl font-semibold text-text-white pb-3'>Purchase Details</h2>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 ">
                    <img src={cryptoChois?.image} alt={cryptoChois?.name} className="w-[40px] h-[40px] object-contain" />
                    <div className="w-[300px] flex flex-col">
                        <p className='text-text-white text-lg font-semibold mr-1'>{cryptoChois?.name}</p>
                        <p className='text-text-muted text-lg'>({cryptoChois?.symbol.toUpperCase()})</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className='text-text-muted text-sm'>Current price</p>
                    <p className='text-xl font-semibold text-text-white'>$
                        {cryptoChois?.current_price.toLocaleString('en', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}</p>
                </div>
            </div>
            <div className="flex flex-col mb-5 ">
                <p className='text-text-muted text-sm font-semibold'>Amount</p>
                <div>
                    <input placeholder='orice' className='w-full border rounded-lg border-text-muted outline-none text-text-white text-lg p-2'/>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-4">
                    <p className='text-text-muted text-sm'>
                        You will receive
                    </p>
                    <p className='text-text-white text-lg'>0,0032432$</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className='text-text-muted text-sm'>Network free</p>
                    <p className='text-text-white text-lg'>0.00$</p>
                </div>
                <div className="w-full h-[1px] bg-border mb-3" />
                <div className="flex justify-between items-center mb-5">
                    <h3 className='text-xl text-text-white'>Total</h3>
                    <h3 className='text-xl text-text-white'>500$</h3>
                </div>
                <button className='w-full bg-accent p-3 rounded-md text-lg font-bold'
                        onClick={handleSBuyAsset}
                >
                    Buy {cryptoChois?.symbol.toUpperCase()}
                </button>
            </div>
        </Card>
    )
}