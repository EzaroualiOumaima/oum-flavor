import connectMongoDB from "../../../../libs/connectionDb";
import { NextRequest, NextResponse } from "next/server";
import dishModel from "../../../../models/dishSchema";
import { Dish } from "@/app/types";

export const GET = async (request: NextRequest) => {
    await connectMongoDB()
    try {
      const query = request.nextUrl.searchParams.get("query") 
      const Data:Dish[] = query ? await dishModel.where("title",query) : await dishModel.find()
      return NextResponse.json(Data)
    } catch (error) {
      return NextResponse.json({message : error} , {status :500})
    }
  }

  export const POST = async (request: Request) => {
    try {
      await connectMongoDB();
      
     
        const { title, price, category, ingredients } = await request.json();
        if (!title || !price || !category || !ingredients) {
          return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }        await dishModel.create({ title, price, category, ingredients,});
        return NextResponse.json({ message: "Dish created" }, { status: 201 });
      }
     catch (error) {
      return NextResponse.json({message : error} , {status :500})}
  }


