import { NextResponse } from "next/server";
import { validateContactForm, processContactSubmission } from "@/lib/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const result = validateContactForm(body);

  if (!result.success) {
    return NextResponse.json(
      { message: "Validation failed", errors: result.errors },
      { status: 422 }
    );
  }

  try {
    await processContactSubmission(result.data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Failed to process submission" },
      { status: 500 }
    );
  }
}
