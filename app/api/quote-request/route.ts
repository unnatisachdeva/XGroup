import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = quoteFormSchema.parse(body);

    // Logging submission for server-side processing / webhook integration
    console.log("[QUOTE REQUEST RECEIVED]", validatedData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your service request has been received. Our operations team will contact you within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid form submission data.", error },
      { status: 400 }
    );
  }
}
