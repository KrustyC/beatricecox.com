import { draftMode, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  draftMode().disable();

  const headersList = headers();
  const referer = headersList.get("referer");

  return NextResponse.redirect(referer || "/");
}
