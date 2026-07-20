import { NextResponse } from "next/server";
import { fleetFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = fleetFormSchema.parse(body);

    console.log("[FLEET APPLICATION RECEIVED]", validatedData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Application submitted successfully! Our recruitment and safety team will review your information and reach out shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid fleet application data.", error },
      { status: 400 }
    );
  }
}
