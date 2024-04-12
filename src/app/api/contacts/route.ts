import contactModel from "../../../../models/contactSchema";
import connectMongoDB from "../../../../libs/connectionDb";
import { NextRequest , NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    await connectMongoDB()
    try {
      const query = request.nextUrl.searchParams.get("query") 
      const Data = query ? await contactModel.where("name",query) : await contactModel.find()
      return NextResponse.json(Data)
    } catch (error) {
      return NextResponse.json({message : error} , {status :500})
    }
  }

  export async function POST(request: Request) {
    await connectMongoDB();
    try {
        const {name ,email , message} = await request.json();
         await contactModel.create({name ,email , message})
        return NextResponse.json({message : "Contact created"} , {status: 201})
    } catch (error) {
        return NextResponse.json({message : error} , {status :500})
    }
    
}