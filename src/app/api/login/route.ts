import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { prisma } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret'; 

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return new NextResponse(
      JSON.stringify({ message: 'Email and password are required' }),
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new NextResponse(
      JSON.stringify({ message: 'Invalid credentials' }),
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return new NextResponse(
    JSON.stringify({
      message: 'Login successful',
      token,
      user: { id: user.id, email: user.email, name: user.name },
    }),
    { status: 200 }
  );
}

