import { NextResponse } from "next/server";
import { validateContactForm } from "@/backend/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateContactForm(body);

    if (!result.success) {
      return NextResponse.json(
        { errors: result.errors },
        { status: 400 }
      );
    }

    // Here you would typically:
    // - Send an email (e.g. Resend, SendGrid, Nodemailer)
    // - Store in a database
    // - Forward to a CRM
    // For now we just acknowledge success.
    const { name, email, subject, message } = result.data;
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json(
      { message: "Message received. Thanks!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }
}
