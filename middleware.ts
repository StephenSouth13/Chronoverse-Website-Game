import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "vn"]
const defaultLocale = "en"

// Get the preferred locale, either from the request header or a cookie
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language")
  const preferredLocale = acceptLanguage?.split(",")[0].split("-")[0]

  if (preferredLocale && locales.includes(preferredLocale)) {
    return preferredLocale
  }

  // You could also read a user's preferred locale from a cookie
  // const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  // if (cookieLocale && locales.includes(cookieLocale)) {
  //   return cookieLocale;
  // }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is /en/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
