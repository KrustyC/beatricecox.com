export function formatPriceBrowser(price: number | null): string {
  if (price === null) {
    return "Free";
  }

  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  return formatter.format(price);
}
