import { NextRequest, NextResponse } from 'next/server';

import jwt from 'jsonwebtoken';

const protectedRoutes = ['/api/protected'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!protectedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/api/protected'],
};
