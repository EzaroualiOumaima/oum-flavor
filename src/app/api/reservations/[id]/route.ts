import reservationModel from "../../../../../models/reservationSchema";
import connectMongoDB from "../../../../../libs/connectionDb";
import { NextRequest , NextResponse } from "next/server";



export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectMongoDB();
  try {
    const { id } = params;
    const { name ,email , phone , reservationDate, reservationTime, numberOfPeople , specialRequests} = await request.json();
    const newReservation = await reservationModel.findByIdAndUpdate(
      id,
      { name ,email , phone , reservationDate, reservationTime, numberOfPeople , specialRequests },
      { new: true }
    );
    if (!newReservation) {
      throw new Error("Reservation not found");
    }

    return NextResponse.json(
      { message: "Reservation updated", newReservation },
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
    const deletedReservation = await reservationModel.findByIdAndDelete(id);
    if (!deletedReservation) {
      throw new Error("Reservation not found");
    }
    return NextResponse.json({ message: "Reservation deleted" }, { status: 200 });
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
    const Data = await reservationModel.findById(id);
    return NextResponse.json(Data);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
