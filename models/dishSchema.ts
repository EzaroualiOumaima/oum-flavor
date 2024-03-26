import mongoose from "mongoose";
import joi from "joi";

type Dish = {
  category: string;
  title: string;
  ingredients: [string];
  price: number;
};

const dishSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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
    type: [String],
    required: true,
    minlength: 2,
    maxlength: 4,
  },
  price: {
    type: Number,
  },
  image:{
    type: String
  }
});
const dishModel =
  mongoose.models.Dishes || mongoose.model("Dishes", dishSchema);
export default dishModel;

// Define Joi schema for validation
const dishValidationSchema = joi.object({
  category: joi.string().required().trim().min(3).max(200),
  title: joi.string().required().trim().min(3).max(200),
  ingredients: joi.array().items(joi.string()).min(2).max(4).required(),
  price: joi.number().optional(),
});

// Function to validate input against the Joi schema
function validateDish(dish: Dish) {
  return dishValidationSchema.validate(dish);
}

export { validateDish };
