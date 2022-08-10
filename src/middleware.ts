import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS;

export const config = {
  matcher: "/:path*",
};

export const middleware = (req: NextRequest) => {
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];

    const [user, password] = atob(auth).split(":");

    if (user === BASIC_AUTH_USER && password === BASIC_AUTH_PASS) {
      return NextResponse.next();
    }
  }

  const url = req.nextUrl.clone();
  url.pathname = "/api/auth";
  return NextResponse.rewrite(url);
};
