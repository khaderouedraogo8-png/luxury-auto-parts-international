export const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(
  /\/$/,
  "",
);

export function absoluteUrl(path: string) {
  if (!siteUrl) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
