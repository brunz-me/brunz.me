import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length > 200) {
      return NextResponse.json(
        { error: "Invalid name" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || email.length > 200 || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || message.length > 5000) {
      return NextResponse.json(
        { error: "Message too long" },
        { status: 400 }
      );
    }

    // TODO: Wire up email delivery (Resend, SendGrid, etc.)
    // For now, log the message and return success.
    // When ready, send to dan.brunsdon@gmail.com via:
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'contact@brunz.me',
    //     to: 'dan.brunsdon@gmail.com',
    //     subject: `Contact form: ${name}`,
    //     text: `From: ${name} (${email})\n\n${message}`,
    //   });

    console.log("[contact-form]", { name, email, message: message.slice(0, 100) });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
