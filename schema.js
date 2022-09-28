const mongoose=require("mongoose");
const Schema=mongoose.Schema
try{
mongoose.connect("mongodb://localhost:27017/test")
console.log("successfully connected to db")
}catch(error){
 console.log(error)
}
//creating schema
const newSchema=Schema({
 name:String
})
//creating model
const model=mongoose.Model({"name":newSchema})
/**
 * valid schema types are
 * String,Number,Date,Buffer,Boolean,Mixed,ObjectId,Array,Decimal128,Map,Schema
 */
const newSchema1=Schema({
 name:String
})