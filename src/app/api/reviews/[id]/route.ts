import connectMongoDB from "../../../../../libs/connectionDb";
import { NextRequest ,NextResponse } from "next/server";
import reviewModel from "../../../../../models/reviewSchema";

export async function DELETE(request: NextRequest) {
    await connectMongoDB();
    try {
      const id = request.nextUrl.pathname.split("/").pop();
      const deletedReview = await reviewModel.findByIdAndDelete(id);
      if (!deletedReview) {
        throw new Error("Review not found");
      }
      return NextResponse.json({ message: "Review deleted" }, { status: 200 });
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
      const Data = await reviewModel.findById(id);
      return NextResponse.json(Data);
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  };


  export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    await connectMongoDB();
    try {
      const { id } = params;
      
      const newReview = await reviewModel.findByIdAndUpdate(
        id,
       {isShown:true}
       
      );
      if (!newReview) {
        throw new Error("Review not found");
      }
  
      return NextResponse.json(
        { message: "Review updated", newReview },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
