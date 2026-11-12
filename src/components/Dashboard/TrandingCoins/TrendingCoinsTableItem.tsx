// import type {CryptoData} from "../../../types/CryptoData.ts";
//
// interface TrandingCoinsTableItemProps {
//     coin: CryptoData
// }
//
// export default function TrendingCoinsTableItem({ coin }: TrandingCoinsTableItemProps) {
//
//     return (
//             <div className='flex items-center justify-around'>
//                 <div className='flex flex-row items-center gap-2.5'>
//                     <img className='w-[30px] h-[30px]' src={coin.image} alt={coin.image}/>
//                     <div className='flex flex-col'>
//                         <p className='text-xs font-semibold text-text-white'>{coin.name}</p>
//                         <p className='text-[10px] text-text-muted'>{coin.symbol}</p>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-8'>
//                     <p className='text-xs text-text-white'>${coin.current_price}</p>
//                     <p className='text-xs font-semibold' style={{color: coin.price_change_percentage_24h === null
//                             ? 'var(--color-text-muted)'
//                             : coin.price_change_percentage_24h < 0
//                                 ? 'var(--color-negative)'
//                                 : 'var( --color-positive)'}}
//                     >{
//                         coin.price_change_percentage_24h === null
//                         ? 'not info'
//                         : `${coin.price_change_percentage_24h.toFixed(2)}%`
//                     }</p>
//                 </div>
//             </div>
//     )
// }