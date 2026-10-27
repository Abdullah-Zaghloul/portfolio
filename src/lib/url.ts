// Builds a URL for a file in public/ that works under any `base` (D7).
export function asset(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
