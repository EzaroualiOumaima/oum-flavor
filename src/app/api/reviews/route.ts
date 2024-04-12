import reviewModel from "../../../../models/reviewSchema";
import connectMongoDB from "../../../../libs/connectionDb";
import { NextRequest , NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    await connectMongoDB()
    try {
      const query = request.nextUrl.searchParams.get("query") 
      const Data = query ? await reviewModel.where("name",query) : await reviewModel.find()
      return NextResponse.json(Data)
    } catch (error) {
      return NextResponse.json({message : error} , {status :500})
    }
  }

  export async function POST(request: Request) {
    await connectMongoDB();
    try {
        const {name , message , isShown} = await request.json();
         await reviewModel.create({name , message , isShown})
        return NextResponse.json({message : "Review created"} , {status: 201})
    } catch (error) {
        return NextResponse.json({message : error} , {status :500})
    }
    
}
