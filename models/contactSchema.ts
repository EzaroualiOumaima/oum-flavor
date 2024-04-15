import mongoose from "mongoose";
import joi from "joi"; 

const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      minlength: 5,
      maxlength: 500
    }
  });
  
  const contactModel = mongoose.models.Contact || mongoose.model("Contact" , contactSchema)
export default contactModel;

const contactValidation = joi.object({
    name: joi.string()
      .min(2)
      .max(30)
      .required(),
    email: joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    message: joi.string()
      .min(5)
      .max(500)
  });

  export {contactValidation}