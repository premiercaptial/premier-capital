import Airtable from "airtable";
import { NextResponse } from "next/server";

function getBase() {
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    throw new Error("Missing Airtable environment variables");
  }
  return new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("ENV CHECK:", {
      hasKey: !!process.env.AIRTABLE_API_KEY,
      keyPrefix: process.env.AIRTABLE_API_KEY?.slice(0, 6),
      baseId: process.env.AIRTABLE_BASE_ID,
      tableName: process.env.AIRTABLE_TABLE_NAME,
    });
    console.log("BODY:", body);

    const { name, email, phone, service, message } = body;

    const base = getBase();

    await base(process.env.AIRTABLE_TABLE_NAME!).create([
      {
        fields: {
          Name: name,
          Email: email,
          Phone: phone,
          Service: service,
          Message: message,
          Status: "New",
        },
      },
    ]);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error("AIRTABLE ERROR:", {
      message: error.message,
      statusCode: error.statusCode,
      error: error.error,
    });

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}