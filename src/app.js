const express=require("express");
const server=express();
const path=require("path");
const logger=require('morgan');
server.set('puerto',process.env.PORT | 8020 );
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use(logger('dev'));
server.use(require("./routes/employees"));

server.listen(server.get('puerto'),function(){
    console.log("Server change start up on port: "+server.get('puerto'));
    
});