import mongoose from "mongoose";

//contact model
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  phone_number: {
    type: String,
    trim: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

const contactModel = mongoose.model("Contact", contactSchema);

export default contactModel;
