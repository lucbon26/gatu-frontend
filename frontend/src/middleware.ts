
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Lista blanca de correos autorizados
const ALLOWED_USERS = [
  "lucasbonfil@gmail.com",
  "gatupatagonia@gmail.com",
  "gateaujadede@gmail.com",
  "paolaandrefuentes@gmail.com"
];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  // Permitir acceso libre a login y auth
  if (pathname.startsWith("/api/auth") || pathname === "/favicon.ico" || pathname === "/") {
    return NextResponse.next();
  }

  // Si no hay token, redirige al login
  if (!token) {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si el correo no está autorizado, mostrar mensaje
  if (!ALLOWED_USERS.includes(token.email || "")) {
    return new Response("No autorizado", { status: 403 });
  }

  return NextResponse.next();
}
