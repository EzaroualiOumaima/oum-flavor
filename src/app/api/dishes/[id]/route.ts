import connectMongoDB from "../../../../../libs/connectionDb";
import dishModel  from "../../../../../models/dishSchema";

import { NextResponse, NextRequest } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectMongoDB();
  try {
    const { id } = params;
    const { title, price, ingredients, category, image } = await request.json();
    const newDish = await dishModel.findByIdAndUpdate(
      id,
      { title, price, ingredients, category, image },
      { new: true }
    );
    if (!newDish) {
      throw new Error("Dish not found");
    }

    return NextResponse.json(
      { message: "Dish updated", newDish },
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
    const deletedDish = await dishModel.findByIdAndDelete(id);
    if (!deletedDish) {
      throw new Error("Dish not found");
    }
    return NextResponse.json({ message: "Dish deleted" }, { status: 200 });
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
    const Data = await dishModel.findById(id);
    return NextResponse.json(Data);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
