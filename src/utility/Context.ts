import {createContext} from "react";
import type {CryptoData} from "../types/CryptoData.ts";

export interface ContextCryptoProps {
    cryptoData: CryptoData | undefined;
    infoPortfolioChart: (id: string) => void;
}

export const Conetxt = createContext<ContextCryptoProps | null>(null)