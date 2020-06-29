
export function isNotNullOrUndefined(obj: any): boolean {
  if (typeof obj !== "undefined" && obj !== null) return true;
  return false;
}

export function isNullOrUndefined(obj: any): boolean {
  if (typeof obj === "undefined" || obj === null) return true;
  return false;
}