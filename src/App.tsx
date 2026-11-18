import AppRoutes from "./components/AppRoutes/AppRoutes.tsx";
import {useCrypto} from "./hooks/useCrypto.ts";
import {useState} from "react";
import type {CryptoData} from "./types/CryptoData.ts";
import {Conetxt} from './utiliti/Context.ts'

function App(){
    const [cryptoData, setCryptoData] = useState<CryptoData | undefined>(undefined);
    const {data} = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h,7d,30d,1y&sparkline=true'
    );

    function infoPortfolioChart(id: string){
        const chartData = data?.find((item) => item.id === id);
        console.log(chartData)
        setCryptoData(chartData);
    }
  return (
      <>
          <Conetxt.Provider value={{cryptoData, infoPortfolioChart}}>
              <AppRoutes />
          </Conetxt.Provider>
      </>
  )
}

export default App