import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

  export const toStringArray = (input: string | string[] | undefined): string[] => {
    if (typeof input === "string") return [input];
    if (Array.isArray(input)) return input;
    return [];
  };
