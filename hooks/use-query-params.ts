import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQueryParams = <T>() => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const queryParams = searchParams as unknown as Partial<T>;
    const urlSearchParams = new URLSearchParams(searchParams);

    const setQueryParams = (params: Partial<T>) => {
        Object.entries(params).forEach(([key, value]) => {
            urlSearchParams.set(key, String(value));
        });

        const search = urlSearchParams.toString();
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    };

    const updateQueryParams = (params: Partial<T>) => {
        Object.entries(params).forEach(([key, value]) => {
            urlSearchParams.delete(key); // Remove existing values
            if (Array.isArray(value)) {
                value.forEach(v => urlSearchParams.append(key, String(v)));
            } else if (value !== undefined && value !== null) {
                urlSearchParams.set(key, String(value));
            }
        });

        const search = urlSearchParams.toString();
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    };

    return { queryParams, setQueryParams, updateQueryParams };
}

export default useQueryParams;