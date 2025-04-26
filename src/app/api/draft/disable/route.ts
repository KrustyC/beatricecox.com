import { draftMode, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  (await draftMode()).disable();

  const headersList = await headers();
  const referer = headersList.get("referer");

  return NextResponse.redirect(referer || "/");
}
