//populate() let us reference document in another collections
//automatically replacing specified path in a document with documents of another collection-- 
//may populate single multiple document plain object multiple plain object or all objects returned from a query
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/mongoose").then(console.log("connected to db"))
const Schema=mongoose.Schema
//define personSchema
const personSchema=Schema({
 _id:Schema.Types.ObjectId,
 name:String,
 age:Number,
 stories:[{type:Schema.Types.ObjectId,ref:"Story"}]
})
 //ref option tells mongoose which model to use to during population
 //in above case->all ids we store here must be document id from story model
 //ObjectId,String,Number,Buffer are valid for use as refs

 //define story schema
const storySchema=Schema({
 author:[{type:Schema.Types.ObjectId,ref:"Person"}],
 title:String,
 fans:[{type:Schema.Types.ObjectId,ref:"Person"}]
})
//creating models
const Story=mongoose.model("Story",storySchema)
const Person=mongoose.model("Person",personSchema)
//handleError function
function handleError(err){console.log(err)}
//saving refs-works same way as saving doc just assign _id
const person1=new Person({_id:new mongoose.Types.ObjectId(),name:"jon",age:45})
person1.save(function (error) {
if(error){return handleError(error)}
const story1=new Story({title:"new story1",author:person1._id})
story1.save(function(error){
 if(error){return handleError(error)}
})
})
//populating our story's author using query builder
Story.findOne({title:"new story1"})
.populate('person1')
.exec(function (err,story){
 if(err){return handleError(err)}
 console.log(story.author.name)
 console.log(story.populated('person1'))
})
