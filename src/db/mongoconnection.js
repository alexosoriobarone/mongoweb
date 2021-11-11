const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/hr', {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
});
const employee=mongoose.model('employees',{
    name:{type:String},
    last_name:{type:String},
    salary:{type:Number},
    createdAt:{type:Date},
    lastModified:{type:Date},
    catagory:{type:String}
});
module.exports=employee;