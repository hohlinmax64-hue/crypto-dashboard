import PieChartPortfolio from "./PieChartPortfolio.tsx";

export default function AssetAllocation() {

    return (
        <div className='w-[425px] h-[330px] text-text-muted bg-surface border border-border rounded-xl p-5'>
            <div className='mb-6'>
                <h3 className='text-text-white text-sm font-semibold mb-1.5'>Asset Allocation</h3>
                <p className='text-xs'>By current market value</p>
            </div>
            <div>
                <div className="flex items-center gap-6">
                    <PieChartPortfolio/>
                    <div className='w-25 flex flex-col gap-6'>
                        <div className='flex justify-between gap-8'>
                            <p>BTC</p>
                            <span>42%</span>
                        </div>
                        <div className='flex justify-between gap-8'>
                            <p>ETH</p>
                            <span>31%</span>
                        </div>
                        <div className='flex justify-between gap-8'>
                            <p>SOL</p>
                            <span>17%</span>
                        </div>
                        <div className='flex justify-between gap-8'>
                            <p>Other</p>
                            <span>10%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}