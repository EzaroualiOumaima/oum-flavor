import mongoose from "mongoose";
import joi from "joi"; 

const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10
    },
    email: {
      type: String,
      required: true,
    //   validate: {
    //     validator: (value:any) => joi.string().email({ tlds: { allow: false } }).validate(value).error === null,
    //     message: "Invalid email format"
    //   }
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
      .min(5)
      .max(10)
      .required(),
    email: joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    message: joi.string()
      .min(5)
      .max(500)
  });

  export {contactValidation}