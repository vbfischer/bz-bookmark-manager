import { createLoader, parseAsBoolean, parseAsNativeArrayOf, parseAsString, parseAsStringLiteral } from "nuqs/server"
import {sortBy} from "@/db";
export const coordinatesSearchParams = {
    tags: parseAsNativeArrayOf(parseAsString).withDefault([]),
    archived: parseAsBoolean.withDefault(false),
    sortBy: parseAsStringLiteral(sortBy),
}

export const loadSearchParams = createLoader(coordinatesSearchParams);