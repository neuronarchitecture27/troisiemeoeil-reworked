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
      from: 'work@troisiemeoeil.io',
      to: email,
      subject: `Hello ${firstname}`,
      react: EmailTemplate({ firstName: firstname, seondname: secondname }),
    });
    if (data.status === 'success') {
      return NextResponse.json({message: 'Email Successfully sent!'})
    }
    return NextResponse.json(data)
  } catch (error) {
  return   NextResponse.json({ error })
  }
}