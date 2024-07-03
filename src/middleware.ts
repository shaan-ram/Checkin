import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup';

    const cookies: any = request.cookies;
    const token = cookies.token || '';

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard']
};
