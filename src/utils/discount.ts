export function calculateDiscount(price: number, discountRate: number) {
  if (typeof price !== "number" || typeof discountRate !== "number")
    throw new Error("숫자가 들어와야 합니다");
  if (price < 0 || discountRate < 0 || discountRate > 100) return 0;
  return price * (1 - discountRate / 100);
}
