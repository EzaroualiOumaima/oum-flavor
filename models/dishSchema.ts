import mongoose from "mongoose";
import joi from "joi";



const dishSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 200,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 3,
    maxlength: 200,
  },
  ingredients: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  price: {
    type: Number,
  },
 
});
// Définition du modèle MongoDB pour le schéma de Dish
const dishModel =
  mongoose.models.Dishes || mongoose.model("Dishes", dishSchema);
export default dishModel;

// Define Joi schema for validation
export const dishValidationSchema = joi.object({
  category: joi.string().required().trim().min(3).max(200),
  title: joi.string().required().trim().min(3).max(200),
  ingredients: joi.string().required().min(2).max(100),
  price: joi.number().optional(),
});


