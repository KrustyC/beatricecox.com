export function getFileName(imageSrc: string): string {
  return imageSrc.split("/").pop() || "";
}
