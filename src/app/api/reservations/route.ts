import reservationModel from "../../../../models/reservationSchema";
import connectMongoDB from "../../../../libs/connectionDb";
import { NextRequest , NextResponse } from "next/server";


export const GET = async (request: NextRequest) => {
    await connectMongoDB()
    try {
      const query = request.nextUrl.searchParams.get("query") 
      const Data = query ? await reservationModel.where("name",query) : await reservationModel.find()
      return NextResponse.json(Data)
    } catch (error) {
      return NextResponse.json({message : error} , {status :500})
    }
  }

  export async function POST(request: Request) {
    await connectMongoDB();
    try {
        const {name ,email , phone , reservationDate, reservationTime, numberOfPeople , specialRequests} = await request.json();
         await reservationModel.create({name ,email , phone , reservationDate, reservationTime, numberOfPeople , specialRequests})
        return NextResponse.json({message : "Reservation created"} , {status: 201})
    } catch (error) {
        return NextResponse.json({message : error} , {status :500})
    }
    
}