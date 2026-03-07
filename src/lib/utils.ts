import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Safely joins class names. Removed twMerge temporarily to troubleshoot conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
