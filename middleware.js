// //are function which are passed control during execution of asynchronous fn
// //specified on schema level and useful for writing plugin
// //mw-document,model,query,aggregate
// //in query middleware this refers to the query
// //query-count find findOneAndUpdate findOneAndDelete findOneAndRemove findOneAndReplace updateOne updateMany
// //aggregate is for myModel.aggregate() aggregate executes when call exec() on an aggregate object
// //every middleware supports pre and post hook
// const mongoose=require("mongoose")
// const schema=mongoose.Schema({name:String})
// schema.pre("save",function(next){
//  //do stuff
//  next()
//  //if use return next() program stops else it will continue
// })
// schema.pre('save',function(){
//  return doStuff().
//  then(()=>{doMoreStuff()})
// })
// schema.pre("save",async function(){
//  await doStuff()
//  await doMoreStuff()
// })

// //use cases- complex validation,removing depending documents(ex removing user removes all his blogpost),asynchronous default,asynchronous task
// //error in pre hook
// schema.pre("save",async function(){
//  await Promise.resolve();
//  throw new Error("something went wrong")
// })

// //post hook
// // post middleware executed after hooked method and all of its pre middleware have completed
// schema.post("init",function(doc){
//  console.log("%s has been initialized from db",doc._id)
// })
// schema.post("validate",function(doc){
//  console.log("%s has been validated",doc._id)
// })
// schema.post("save",function(doc){
//  console.log("%s has been saved",doc._id)
// })
// schema.post("remove",function(doc){
//  console.log("%s has been removed from db",doc._id)
// })

// //asynchronous post hook
// schema.post("save",function(doc,next){
//  setTimeout(()=>{
//   console.log("post 1");
// next()
//  },100)
// })
// schema.post("save",function(doc,next){
//  console.log("post 2");
//  next()
// })

// //define middleware before compilling model
// const schema1=mongoose.Schema({name:String})
// schema1.pre("save",function(){console.log("hello from pre save")})// this will work
// const model1=mongoose.model("model1",schema1)
// schema1.pre("save",function(){console.log("hello from pre save")})//this wont work

// //save validate hooks
// schema1.pre("validate",function(){console.log("this get printed 1st")})
// schema1.post("validate",function(){console.log("this get printed 2nd")})
// schema1.pre("save",function(){console.log("this get printed 3rd")})
// schema1.post("save",function(){console.log("this get printed 4th")})
// //naming conflicts
// //mongoose has both query and document hooks for remove
// schema.pre("remove",function(){console.log("removing")})
// //prints removing
// doc.remove()
// model1.remove()
// //does not prints remove
// const mongoose=require("mongoose")
// mongoose.connect("mongodb://localhost:27017/mongoose").then(console.log("connected to db"))
// const schema1=mongoose.Schema({name:{type:String,require:true}})
// schema1.pre("validate",function(error,doc,next){
//  if(error.name=='mongoServerError' && error.code===11000){
// console.log("duplicate key error")
//  }return
// })
// const person=mongoose.model("person",schema1)
// const person1=new person({name:"john"})
// const person2=new person({name:"john"})
// person1.save().then(person2.save())

//synchronous hooks  certain mongoose hooks are synchronous mean they do not support function that return promises or receive a next callback pre and post init hooks
