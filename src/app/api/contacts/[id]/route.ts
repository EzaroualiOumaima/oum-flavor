import connectMongoDB from "../../../../../libs/connectionDb";
import { NextRequest ,NextResponse } from "next/server";
import contactModel from "../../../../../models/contactSchema";

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    await connectMongoDB();
    try {
      const { id } = params;
      const { name ,email , message} = await request.json();
      const newContact = await contactModel.findByIdAndUpdate(
        id,
        { name ,email , message },
        { new: true }
      );
      if (!newContact) {
        throw new Error("Contact not found");
      }
  
      return NextResponse.json(
        { message: "Contact updated", newContact },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
  
  export async function DELETE(request: NextRequest) {
    await connectMongoDB();
    try {
      const id = request.nextUrl.pathname.split("/").pop();
      const deletedContact = await contactModel.findByIdAndDelete(id);
      if (!deletedContact) {
        throw new Error("Contact not found");
      }
      return NextResponse.json({ message: "Contact deleted" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: err }, { status: 500 });
    }
  }
  export const GET = async (request: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    await connectMongoDB();
    try {
      const { id } = params;
      const Data = await contactModel.findById(id);
      return NextResponse.json(Data);
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  };
  