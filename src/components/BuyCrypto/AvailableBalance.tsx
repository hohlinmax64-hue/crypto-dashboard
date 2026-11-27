import {useState} from "react";


export default function AvailableBalance() {
    const [balance, setBalance] = useState(10000);

    return (
        <>
            <div className='flex items-center gap-12 bg-surface border border-border rounded-lg p-3 mt-6'>
                <div className=''>
                    <p className='text-text-muted text-xs'>Available Balance</p>
                    <h1 className='font-semibold text-[25px] text-text-white'>${balance.toLocaleString('en')}</h1>
                </div>
                <div className='w-[1px] h-[40px] bg-border' />
                <span className="inline-flex items-center gap-2 w-fit px-2 py-1 rounded-sm text-xs text-slate-200 bg-emerald-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Virtual funds
                    </span>
            </div>
        </>
    )
}