import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getAlternateSiteHostname,
  getPreferredSiteHostname,
} from "./app/utils/siteUrl";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (!host || LOCAL_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const preferredHost = getPreferredSiteHostname();
  if (host === preferredHost) {
    return NextResponse.next();
  }

  const alternateHost = getAlternateSiteHostname();
  if (alternateHost && host === alternateHost) {
    const url = request.nextUrl.clone();
    url.hostname = preferredHost;
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
