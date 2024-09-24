import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
console.log(req.body)
  const { email, password } = await req.json();

  try {
    const result = await sql`SELECT * FROM lp_users WHERE email = ${email}`;
    const user = result.rows[0];

    if (user && (password == user.password)) {
      // Here you would typically create a session or JWT token
      return NextResponse.json({ message: 'Login successful', user });
    } else {
        return NextResponse.json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' });
  }
}