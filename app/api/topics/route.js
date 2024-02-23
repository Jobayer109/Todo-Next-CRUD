import connectDB from "@/libs/database";
import Topic from "@/model/topic";
const { NextResponse } = require("next/server");

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Task created" }, { status: 201 });
}
