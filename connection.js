const mongoose=require("mongoose");
try{
await mongoose.connect("mongodb://localhost:27017/test")
}catch(error){
 handleError(error)
}
const myModel=mongoose.model("new",new mongoose.Schema({name:String}))
//operation buffering
//to disable buffering disable setBuffer 
mongoose.set('bufferCommands',false)
//option-mongoose.connect accept another option
// mongoose.connect(uri,Options){options-bufferCommands,user/pass,autoIndex,dbName}

//connect() function also accepts a callback function
mongoose.connect(uri,Option).then(
()=>{},
err=>{}
 )
//connection event
//open connecing connected disconnected disconnecting close error

//keep alive for 300000ms
// mongoose.connect(uri,{keepAlive:true,keepAliveInitialDelay:300000})

//multiple connection for connecting several database or slow train
const conn=mongoose.createConnection(uri,Options)
//for multiple connection export schema not model
//export the connection and register the model on connection in the file

//connection pool default max connectio pool size is 100
//we can change by 
moongoose.createConnection(uri,{maxPoolSize:10})