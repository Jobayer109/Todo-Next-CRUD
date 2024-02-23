import connectDB from "@/libs/database";
import Topic from "@/model/topic";
const { NextResponse } = require("next/server");

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Task created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const topics = await Topic.find();
  return NextResponse.json(topics, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
