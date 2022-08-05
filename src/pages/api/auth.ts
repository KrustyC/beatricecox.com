import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader("WWW-authenticate", 'Basic realm="Secure Area"');
  res.statusCode = 401;
  res.end("Auth Requried.");
}
