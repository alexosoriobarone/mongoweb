const express=require("express");
const router=express.Router();
const Employee= require("../db/mongoconnection");
router.get('/api/employee/add',function(req,res){
    const emp=new Employee({name:'Matilde',last_name:'Ruiz',salary:50000,createdAt:Date('2021/11/11'),lastModified:Date('2021/11/11'),catagory:'A'});
    emp.save(function(err,empl){
        if(!err){
            console.log(empl);
        }else{
            console.log(err);
        }
    });
    res.send("Hola Mundo desde el server");
});
module.exports=router;
