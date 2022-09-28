//one to one mapping of document to mongodb document
//model class is a subclass of document class
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/test")
const schema=mongoose.Schema;
const newSchema=new schema({name:String})
const animal=mongoose.model("animal",newSchema)
const doc=new animal({name:"lion"})
doc.save()
//validate
//document are validated before saving by default

//subdocument-document inside document  nested schema
const childSchema=new mongoose.Schema({name:String})
const parentSchema=new mongoose.Schema({
 //array of subdocument
 children:[childSchema],
 //single nested subdocument
 child:childSchema
})


//qurey
/**
 * find 
 * findById 
 * findByIdAndUpdate 
 * findByIdAndDelete 
 * findByIdAndRemove
 * findOne
 * findOneAndRemove 
 * findOneAndDelete 
 * findOneAndUpdate 
 * findOneAndReplace 
 * replaceOne 
 * updateMany 
 */



//{age:{$gt:17,$lt:25}}
//{likes:{$in:["a","b"]}}.limit(10).sort()