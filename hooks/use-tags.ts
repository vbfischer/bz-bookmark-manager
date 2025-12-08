import { parseAsNativeArrayOf, parseAsString, useQueryState } from "nuqs"

export const useTags = () => {
    return useQueryState(
        "tags", 
        parseAsNativeArrayOf(parseAsString).withDefault([]))
}