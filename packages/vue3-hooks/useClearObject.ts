export function useClearObject<T extends object>(obj: T): T {
  if (!obj) {
    return {} as T;
  }
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (value === undefined || value === null || value === "") {
      delete result[key];
    }
  });

  return result as T;
}
