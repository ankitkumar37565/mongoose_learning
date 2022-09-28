//compiled from schema mapped to document in mongodb .. instance of model is document
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/test")
const schema=mongoose.Schema;
const newSchema=new schema({name:String})
const person=mongoose.model("person",newSchema)
const p1=new person({name:"ankit"})
p1.save()
//change stream- listen to all insert and updates going through db