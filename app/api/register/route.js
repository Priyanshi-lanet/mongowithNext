import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
import connectMongoDb from "../../libs/mongodb";
import User from "../../models/users";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    //  const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDb();
    await User.create({ name, email, password });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
