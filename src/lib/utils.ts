import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateInitial(str: string) {
  const words = str.split(" ");

  const IP = words.map((word) => word.charAt(0).toUpperCase()).join("");

  return IP;
}
