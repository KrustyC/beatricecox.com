import { HandlerResponse } from "@netlify/functions";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

interface JSONResponse {
  status: number;
  body: Record<string, unknown>;
  headers?: { [header: string]: string | number | boolean };
}

export function jsonResponse({
  status,
  body,
  headers = DEFAULT_HEADERS,
}: JSONResponse): HandlerResponse {
  return {
    statusCode: status,
    headers,
    body: JSON.stringify(body),
  };
}
