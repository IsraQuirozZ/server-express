import { model, Schema } from "mongoose";

const collection = "students";
let schema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  dni: { type: String, required: true },
  course: { type: String, required: true },
  grade: { type: Number, required: true },
});

let Student = model(collection, schema);

export default Student;
