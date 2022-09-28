//first import the mongoose module
const mongoose=require("mongoose")
//now connect to mongodb
try{async function connect(){
 await mongoose.connect("mongodb://localhost:27017/test")
 
}connect();console.log(" connected ")
}
catch(error){console.log("error connecting , the error is: "+error)}
//creating mongoose schema
const kittySchema=mongoose.Schema({
 name:String
})
//compile schema into model
const kitten=mongoose.model("kitten",kittySchema);
//create a kitten document
const silence=new kitten({name:"Silence"})
console.log(silence.name)
//add speak method to kittySchema
kittySchema.methods.speak=function speak(){
 const greeting=this.name?"my name is"+this.name:"i have no name";
 console.log(greeting)
}
const fluffy=new kitten({name:"fluffy"})
//save the fluffy and silence 
fluffy.save()
silence.save()
const kittens=kitten.find({})
console.log(kittens)
