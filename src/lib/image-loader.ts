interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({
  src,
  width,
  quality = 75,
}: ImageLoaderParams): string {
  // Sanity CDN images - use Sanity's transformation API
  if (src.includes("cdn.sanity.io")) {
    const url = new URL(src);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("q", quality.toString());
    url.searchParams.set("fit", "max");
    url.searchParams.set("auto", "format");
    return url.toString();
  }

  // Static/local images - append width param to satisfy Next.js requirement
  return `${src}?w=${width}&q=${quality}`;
}
