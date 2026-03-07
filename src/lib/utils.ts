export function cn(...inputs: (string | undefined | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
