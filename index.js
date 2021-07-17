const fs = require('fs');
const http =  require('http');


const server = http.createServer((req, res)=>{
   
 if(req.url=="/home")
 {
    res.end("this is home page of Ashish kiran")
 }   
 
 else if(req.url=="/movie")
 {
    res.end("this is movie page of Ashish kiran")
 } 

 else if(req.url=="/cricket")
 {
    res.end("this is contact page of Ashish kiran")
 }

 else if(req.url=="/user_api")
 {
    
    res.end("this is user API page of Ashish kiran")
 }

 else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end("Error 404. This Page does not exist")
 }
   
})

server.listen(3001 ,"localhost", ()=>{
    console.log(" listenng to poert 3001")
})

