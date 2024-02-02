import crypto from "crypto";

function createHmac(data: string, secretKey: string) {
  return crypto.createHmac("sha256", secretKey).update(data).digest("hex");
}

interface SignCookieOptions {
  value: string;
  secretKey: string;
}

export function signCookie({ value, secretKey }: SignCookieOptions) {
  const hash = createHmac(value, secretKey);
  return `${value}:${hash}`;
}

interface ValidateSignedCookieeOptions {
  signedCookie: string;
  secretKey: string;
}

export function validateSignedCookie({
  signedCookie,
  secretKey,
}: ValidateSignedCookieeOptions) {
  const parts = signedCookie.split(":");
  if (parts.length !== 2) {
    return false;
  }

  const [cookieValue, providedSignature] = parts;
  const recalculatedSignature = createHmac(cookieValue, secretKey);

  return providedSignature === recalculatedSignature;
}
