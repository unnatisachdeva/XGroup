import { NextResponse } from "next/server";
import { careersFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = careersFormSchema.parse(body);

    console.log("[CAREERS APPLICATION RECEIVED]", validatedData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for applying! Our operations & HR team will review your application.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid application submission.", error },
      { status: 400 }
    );
  }
}
