export const parseBigIntToString = (value: BigInt | undefined): string =>
  JSON.stringify(value, (_, v) =>
    typeof v === "bigint" ? `${v}n` : v
  ).replace(/"(-?\d+)n"/g, (_, a) => a);
