import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return new NextResponse(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }

  return new NextResponse(JSON.stringify({ message: 'Access granted', user: decoded }), { status: 200 });
}
