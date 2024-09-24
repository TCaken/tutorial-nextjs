import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const { email, password, role } = await req.json();
  console.log(email, password, role)


  // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await sql`INSERT INTO lp_users (email, password, role) VALUES (${email}, ${password}, ${role}) RETURNING *`;
    return NextResponse.json({
        user: result.rows[0]    
    })
  } catch (error) {
    return NextResponse.json({
        err : "202"
    })
    // res.status(500).json({ error: 'User already exists or other error' });
  }
}