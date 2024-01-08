import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request) {
  console.log("started");
  
  try {
    const body = await request.json()
    console.log(body);
    const {firstname, secondname, email} = body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@acme.dev>',
      to: email,
      subject: `Hello ${firstname}`,
      react: EmailTemplate({ firstname: firstname, secondname: secondname }),
    });
    if (data.status === 'success') {
      return NextResponse.json({message: 'Email Successfully sent!'})
    }
    return NextResponse.json(data)
  } catch (error) {
  return   NextResponse.json({ error })
  }
}