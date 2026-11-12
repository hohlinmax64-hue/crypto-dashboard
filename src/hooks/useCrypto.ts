import {useQuery} from "@tanstack/react-query";
import {fetcher} from "./fetcher.ts"

export function useCrypto<T>(url: string) {
    return useQuery<T>({
        queryKey: ['crypto', url],
        queryFn: () => fetcher<T>(url),
        staleTime: 60_000,
        refetchOnWindowFocus: false,
    })
}
