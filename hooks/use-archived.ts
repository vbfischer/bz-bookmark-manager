import { parseAsBoolean, useQueryState } from "nuqs"

export const useArchived = () => {
    return useQueryState(
        "archived",
        parseAsBoolean.withDefault(false))
}