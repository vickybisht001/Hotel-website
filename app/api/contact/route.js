import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in .env.local");
}

// Define schema & model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});


const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// Connect to MongoDB
async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGODB_URI);
}

// Handle POST request
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newContact = new Contact(body);
    await newContact.save();

    return NextResponse.json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to save message" },
      { status: 500 }
    );
  }
}
