// //defined in schema types
// //validation is middleware 
// //mongoose register validation before pre('save') hook
// //can disable automatic validation before save by setting validateBeforeSave 
// //you can manually run doc.validate(callback) or doc.validateSync()
// //doc.invalidate()-manually mark a field as invalid
// function fun1(){const mongoose=require("mongoose");
// const assert=require("assert")
//  mongoose.connect("mongodb://localhost:27017/test",{serverSelectionTimeoutMS:3000})
//  console.log("connected to db")

// // const schema=mongoose.Schema({
// //  name:{type:mongoose.Schema.Types.String,required:true
// // }})
// // const Cat=mongoose.model("Cat",schema);
// // const cat=new Cat();//this cat has no name
// // try{
//  // let error=cat.validateSync();
// // cat.save()
// // console.log("cat saved")
// // }catch(err){console.log(err)}
// //every schema has required validator
// //no have min max validator
// //string have enum match minLength maxLength validators
// const breakfastSchema=mongoose.Schema({
//  eggs:{
//   type:mongoose.Schema.Types.Number,
//   min:[6,"too few eggs"],
//   max:12,
//   required:true
//  },
//  bacon:{
//   type:String,
//   required:[true,'why no bacon?']
//  },
//  drink:{
//   type:String,
//   enum:['coffee','tea'],
//   required:()=>{return this.bacon>3}
//  }
// })
// const Breakfast=mongoose.model('Breakfast',breakfastSchema)
// const badBreakfast=new Breakfast({
//  eggs:7,
//  bacon:0,drink:"tea"
// })
// try{

//  badBreakfast.save()
//  console.log("saved to db")
// }catch(err){console.log(err)}}
// // fun1()
// // let error=badBreakfast.validateSync();
// // assert.equal(error.errors['eggs'].message,'too few eggs')
// // assert.ok(!error.errors['bacon'])
// // assert.equal(error.errors['drink'].message,'`milk` is not a valid `drink`')
// //unique option is not a validator its a helper function
// // const uniqueUserSchema=mongoose.Schema({
// //  userName:{
// //   type:String,
// //   unique:true
// //  }
// // })
// // const U1=mongoose.model("U1",uniqueUserSchema)
// // const U2=mongoose.model("U2",uniqueUserSchema)
// // const dup=[{userName:"val"},{userName:"val"}]
// // U1.create(dup,err=>{
// //  //race condition mongodb saves doc before creating index
// // })
// // U2.init().then(()=>{U2.create(dup)}).catch(error=>{
// // assert.ok(error);
// // assert.ok(!error.errors);
// // assert.ok(error.message.indexOf('duplicate key error')!== -1);

// // })
// async function fun(){
//  const mongoose=require("mongoose")
//  const conn=mongoose.createConnection("mongodb://localhost:27017/test2")
//  const peopleSchema=mongoose.Schema({
//   name:String,
//   age:Number,
//   country:String
//  })
//  const peoples=await conn.model("peoples",peopleSchema);
// // const fun2 =  async ()=>{
// // await new peoples({name:"Ankit",age:21,country:"cha"}).save()
// // await new peoples({name:"Ankit",age:20,country:"ind"}).save()
// // await new peoples({name:"Ankit",age:22,country:"pak"}).save()
// // await new peoples({name:"Ankit",age:23,country:"aus"}).save()
// // }
// // fun2().then(fun2())
 
// const fun1=async ()=>{
// const person=await peoples.find({"name":"Ankit","age":{$gt:17,$lt:23}})
// console.log(person);
// await peoples.deleteMany({"age":{$gt:22}});

// }
// fun1();
// }
// fun()
//we have to use keyword validate to create custom validator 

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/test2")
const emailSchema=mongoose.Schema({
 email:{
  type:String,
  validate:{
   validator:function(value){
     let regex=/([0-9])([])/g
     return regex.test(value)
    },message:"invalid email"
   }
  
 }
})
const Model=mongoose.model("model",emailSchema)
const email1=new Model({email:"a1gmail.com"})
email1.save()