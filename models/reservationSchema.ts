import mongoose from "mongoose";
import joi from "joi";

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,

    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 30,
        trim: true
    },
    reservationDate: {
        type: String,
        required: true
    },
    reservationTime: {
        type: String,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true,
        min: 1,
        max:10
    },
    specialRequests: {
        type: String,
     
    }
});

const reservationModel = mongoose.models.Reservations || mongoose.model("Reservations" , reservationSchema)
export default reservationModel;

const reservationValidationSchema = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().min(10).max(200).required(),
    phone: joi.string().min(10).max(30).required(),
    reservationDate: joi.string().required(),
    reservationTime: joi.string().required(),
    numberOfPeople: joi.number().integer().min(1).max(10).required(),
    specialRequests: joi.string()
});

export { reservationValidationSchema };
