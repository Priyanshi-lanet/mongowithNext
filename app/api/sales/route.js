import { NextResponse } from "next/server";

import ContactForm from "@/app/component/ContactForm";
import connectMongoDb from "../../libs/mongodb";
import Contact from "../../models/contact";
import { create } from "domain";
import Sales from "../../models/sales";

export async function POST(req, res) {
  console.log("req", req);
  try {
    const { items, storeLocation, customer, purchaseMethod } = await req.json();
    await connectMongoDb();
    await Sales.create({ items, storeLocation, customer, purchaseMethod });

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
  const topic = await Sales.find();
  return NextResponse.json({ topic });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Sales.findByIdAndDelete(id);
  return NextResponse.json({ message: "topic deleted" }, { status: 200 });
}
