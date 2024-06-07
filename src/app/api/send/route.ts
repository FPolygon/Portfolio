import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  const { email, subject, message } = await request.json();

  try {
    if (!fromEmail) {
      throw new Error('FROM_EMAIL environment variable is not set');
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['business@fpagu.com', email],
      subject: subject,
      react: `Email: ${email} Subject${subject} Message: ${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}