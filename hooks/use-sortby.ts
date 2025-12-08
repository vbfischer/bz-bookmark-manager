import { parseAsStringLiteral, useQueryState } from "nuqs"

export const useSortBy = () => {
    const sortBy = ["recently_added", "recently_visited", "most_visited"] as const;

    return useQueryState(
        "sortBy",
        parseAsStringLiteral(sortBy)
            .withOptions({
                shallow: false
            })
            .withDefault("recently_added"))
}