import dishModel, { Dish } from "../../../../models/dishSchema";
import connectMongoDB from "../../../../libs/connectionDb";
import { NextRequest, NextResponse } from "next/server";
import upload from "../../../middlewares/multerMiddleware"

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
      console.log("first")
      upload.single('image')(request as any, null as any, async (err: any) => {
        console.log("Second")
        if (err) {
          return NextResponse.json({ message: err.message || "File upload failed" }, { status: 400 });
        }
        console.log("third")
        const { title, price, category, ingredients, image } = await request.json();
        if (!title || !price || !category || !ingredients) {
          return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        console.log("fourth")
        const multerImage = (request as any).file.filename;
        await dishModel.create({ title, price, category, ingredients, image: multerImage });
        console.log("third")
        return NextResponse.json({ message: "Dish created" }, { status: 201 });
      });
    } catch (error) {
      return NextResponse.json({message : error} , {status :500})}
  }


