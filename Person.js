import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name:{
    type: String,
  },
  age:{
    type: Number,
    required: true
  },
  work:{
    type: String,
    enum:['waiter','manager','chef']
  },
  mobile:{
    type: String,
    required: true,
    unique:true
  },
  email:{
    type: String,
    required: true,
    unique:true
  },
  address:{
    type: String,
  },
  salary:{
    type: Number,
    required: true
  }
})

const Person = mongoose.model('Person',personSchema)
export default Person;