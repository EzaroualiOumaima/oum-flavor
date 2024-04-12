import mongoose from "mongoose";
import joi from "joi"


const reviewSchema = new mongoose.Schema({
    name :{
    type:String,
    minlength: 2,
    maxlength: 500

    },
    message :{
        type:String,
        minlength: 2,
        maxlength: 500
    },
    isShown :{
        type :Boolean,
        default : false
    }
})

const reviewModel = mongoose.models.Review || mongoose.model("Review" , reviewSchema)
const reviewValidationSchema = joi.object({
    name: joi.string().min(2).max(500).required(),
    message: joi.string().min(2).max(500).required()
});

export {reviewValidationSchema};
export default reviewModel