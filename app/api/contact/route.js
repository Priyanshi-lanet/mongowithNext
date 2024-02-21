import { NextResponse } from "next/server";

import ContactForm from "@/app/component/ContactForm";
import connectMongoDb from "../../libs/mongodb";
import Contact from "../../models/contact";
import { create } from "domain";
import Topic from "../../models/contact";

export async function POST(req, res) {
  console.log("req", req);
  try {
    const { username, email, phone, message } = await req.json();
    await connectMongoDb();
    await Topic.create({ username, email, phone, message });

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
export async function GET() {
  await connectMongoDb();
  const topic = await Topic.find();
  return NextResponse.json({ topic });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "topic deleted" }, { status: 200 });
}
