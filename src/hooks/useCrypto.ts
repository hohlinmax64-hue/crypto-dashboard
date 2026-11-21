import {useQuery} from "@tanstack/react-query";
import {fetcher} from "./fetcher.ts"

export function useCrypto<T>(url: string, enabled=true) {
    return useQuery<T>({
        queryKey: ['crypto', url],
        queryFn: () => fetcher<T>(url),
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        enabled: enabled,
        retry: 1
    })
}
