/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx for Tailwind projects.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a price in Indian Rupees.
 */
export function formatPrice(price: number): string {
  return `₹${price}`;
}

/**
 * Format a rating to one decimal place.
 */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

/**
 * Get current year for copyright.
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
