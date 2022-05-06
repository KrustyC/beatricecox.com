import { REST_METHOD } from "../types/global";
import { fetchJson } from "./fetch-json";

async function readFile(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    // Create file reader
    const reader = new FileReader();

    // Register event listeners
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reader.addEventListener("loadend", (e: any) => resolve(e.target.result));
    reader.addEventListener("error", reject);

    // Read file
    reader.readAsArrayBuffer(file);
  });
}

async function getAsByteArray(file: File) {
  return new Uint8Array(await readFile(file));
}

interface UploadFileToS3Options {
  file: File;
  token: string;
  folder: "images" | "files" | "partners";
}

export async function uploadFileToS3({
  file,
  token,
  folder = "images",
}: UploadFileToS3Options) {
  const { uploadURL } = await fetchJson(
    `${process.env.baseUrl}/.netlify/functions/admin-signed-s3-url?name=${file.name}&type=${file.type}&folder=${folder}`,
    { method: REST_METHOD.GET, token }
  );

  const byteFile = await getAsByteArray(file);

  const blobData = new Blob([new Uint8Array(byteFile)], {
    type: file.type,
  });

  await fetch(uploadURL, {
    method: "PUT",
    body: blobData,
  });

  return `${process.env.s3BucketUrl}/images/${file.name}`;
}
