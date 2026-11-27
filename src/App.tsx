import AppRoutes from "./components/AppRoutes/AppRoutes.tsx";
import {useCrypto} from "./hooks/useCrypto.ts";
import {useState} from "react";
import type {CryptoData} from "./types/CryptoData.ts";
import {ChoisContext, Conetxt} from './utility/Context.ts'

function App(){
    const [cryptoData, setCryptoData] = useState<CryptoData | undefined>(undefined);
    const [cryptoDataChoose, setCryptoDataChoose] = useState<CryptoData | undefined>(undefined);
    const {data} = useCrypto<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h,7d,30d,1y&sparkline=true'
    );

    function infoPortfolioChart(id: string){
        const chartData = data?.find((item) => item.id === id);
        setCryptoData(chartData);
    }

    function choisCoun(id: string) {
        const result = data?.find((item) => item.id === id);
        console.log(result)
        setCryptoDataChoose(result)
    }
  return (
      <>
          <Conetxt.Provider value={{cryptoData, infoPortfolioChart}}>
              <ChoisContext.Provider value={{
                  cryptoChois: cryptoDataChoose,
                  choisCoinById: choisCoun}}>
                  <AppRoutes />
              </ChoisContext.Provider>
          </Conetxt.Provider>
      </>
  )
}

export default App