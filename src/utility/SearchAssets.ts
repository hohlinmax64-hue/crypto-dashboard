import type {CryptoData} from "../types/CryptoData.ts";

interface SearchAssets {
    assets: CryptoData[] | undefined;
    input: string;
}

export function SearchAssets({assets, input}: SearchAssets ) {
    if(!input) {
        return assets;
    }
    if(assets === undefined) {
        return assets;
    }
    const searchedAssets = assets.filter(({name}) => (
        name.toLowerCase().includes(input.toLowerCase())
    ));

    return searchedAssets;
}