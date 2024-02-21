import { NextResponse } from "next/server";
import Topic from "@/models/contact";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newusername: username,
    newEmail: email,
    newphone: phone,
    newMessage: message,
  } = await req.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { username, email, phone, message });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
