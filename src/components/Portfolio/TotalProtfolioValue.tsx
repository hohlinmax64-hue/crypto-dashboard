


export default function TotalProtfolioValue() {

    return (
        <div className='flex justify-between items-center mt-6 mb-7'>
            <div>
                <p className='text-xs font-semibold text-text-muted mb-3'>TOTAL PORTFOLIO VALUE</p>
                <h2 className='text-3xl text-text-white font-bold mb-1.5'>$24,680.52</h2>
                <p className='text-xs text-positive font-semibold'>+$2,480.52  (+11.17%)</p>
            </div>
            <button className='text-black bg-accent rounded-lg w-[150px] h-[40px]'>+ Add Asset</button>
        </div>
    )
}