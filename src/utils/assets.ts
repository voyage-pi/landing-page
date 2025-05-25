export function getPublicAssetUrl(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}

export function getNavigationUrl(path: string): string {
  // In production, redirect to the main domain
  if (import.meta.env.PROD) {
    return `https://voyage-pi.com${path}`;
  }
  // In development, use relative paths
  return path;
}
